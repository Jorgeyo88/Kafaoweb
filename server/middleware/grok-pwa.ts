/**
 * Deployed-app (Nitro) half of the platform PWA chrome. Auto-registered as
 * global h3 middleware because vite.config.ts sets `serverDir: "./server"` —
 * without that option Nitro v3 never scans this directory.
 *
 * Never throw: a failure here used to 500 the whole public site.
 */
import installPageTemplate from "../../scripts/install-page.html?raw";
import { grokOgIdentity } from "virtual:grok-og-identity";
import {
  acceptsHtml,
  createHeadInjector,
  isDocumentPath,
  isInstallQuery,
  renderInstallPageHtml,
  renderWebManifest,
} from "../../scripts/grok-pwa-shared.mjs";

type HeaderBag = { get?: (name: string) => string | null; [key: string]: unknown };

interface GrokPwaEvent {
  url?: URL | string;
  req?: { method?: string; url?: string; headers?: HeaderBag };
}

function header(headers: HeaderBag | undefined, name: string): string | null {
  if (!headers) return null;
  if (typeof headers.get === "function") {
    const value = headers.get(name);
    return value ?? null;
  }
  const raw = headers[name] ?? headers[name.toLowerCase()];
  if (Array.isArray(raw)) return String(raw[0] ?? "") || null;
  if (raw == null) return null;
  return String(raw);
}

function eventUrl(event: GrokPwaEvent): URL {
  if (event.url instanceof URL) return event.url;
  const raw = typeof event.url === "string" && event.url ? event.url : event.req?.url || "/";
  try {
    return new URL(raw, "https://localhost/");
  } catch {
    return new URL("https://localhost/");
  }
}

function requestHost(event: GrokPwaEvent): string {
  return (
    header(event.req?.headers, "x-forwarded-host") ??
    header(event.req?.headers, "host") ??
    eventUrl(event).host
  );
}

function injectHeadStreaming(response: Response, host: string): Response {
  if (!response.body) return response;
  const injector = createHeadInjector({
    host,
    site: grokOgIdentity?.site,
  });
  const transformed = response.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        for (const out of injector.push(chunk)) controller.enqueue(out);
      },
      flush(controller) {
        for (const out of injector.flush()) controller.enqueue(out);
      },
    }),
  );
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(transformed, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default async function grokPwaMiddleware(
  event: GrokPwaEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  try {
    const method = (event.req?.method ?? "GET").toUpperCase();
    if (method !== "GET") return next();

    const url = eventUrl(event);
    const path = url.pathname;
    const urlWithQuery = path + url.search;

    if (path === "/__grok/manifest.webmanifest" || path === "/__grok/manifest.json") {
      return new Response(renderWebManifest(requestHost(event)), {
        headers: {
          "content-type": "application/manifest+json; charset=utf-8",
          "cache-control": "no-cache",
        },
      });
    }

    if (
      isInstallQuery(urlWithQuery) &&
      isDocumentPath(path) &&
      acceptsHtml(header(event.req?.headers, "accept"))
    ) {
      const html = renderInstallPageHtml(installPageTemplate, {
        host: requestHost(event),
        url: urlWithQuery,
      });
      return new Response(html, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "cache-control": "no-cache",
        },
      });
    }

    if (!isDocumentPath(path)) return next();

    const result = await next();
    if (
      result instanceof Response &&
      result.body &&
      String(result.headers.get("content-type") ?? "").includes("text/html") &&
      !result.headers.get("content-encoding")
    ) {
      try {
        return injectHeadStreaming(result, requestHost(event));
      } catch (err) {
        console.error("[pwa] head inject failed", err);
        return result;
      }
    }
    return result;
  } catch (err) {
    console.error("[pwa] middleware failed", err);
    return next();
  }
}
