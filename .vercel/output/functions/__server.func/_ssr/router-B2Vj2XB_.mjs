import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useRouter, f as createRouter, g as createRootRoute, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B2Vj2XB_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "Ocurrió un error inesperado. Recarga la página.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 bg-cream px-6 text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-terracotta",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 1.6
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl",
				children: "Algo salió mal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-ink-soft",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var COPY = {
	es: {
		skip: "Saltar al contenido",
		title: "Kafao · Ropa artesanal de Ecuador",
		description: "Kafao — ropa y accesorios artesanales de Ecuador. Viste tu esencia étnica.",
		nav: {
			home: "Inicio",
			catalog: "Catálogo",
			promo: "Promociones",
			policies: "Políticas",
			contact: "Contacto"
		},
		navAria: "Principal",
		mobileAria: "Móvil",
		openMenu: "Abrir menú",
		closeMenu: "Cerrar menú",
		write: "Escribir",
		langAria: "Idioma",
		hero: {
			eyebrow: "Hecho a mano en los Andes ecuatorianos",
			title: "Viste tu esencia étnica.",
			subtitle: "Ropa y Accesorios Artesanales de Ecuador.",
			cta: "Ver Colección",
			talk: "Hablar con el atelier",
			alt: "Modelo Kafao en los Andes ecuatorianos, con poncho tejido a mano"
		},
		catalog: {
			kicker: "01 · Equinoccio 2026",
			eyebrow: "Lookbook 2026",
			title: "Catálogo Colección Andes",
			body: "Ponchos, ruanas, chompas, pantalones y collares. Hombre y mujer, hechos a mano en Ecuador: la misma hebra, dos maneras de llevar los Andes.",
			download: "Descargar Catálogo Completo (PDF)",
			pdfNote: "PDF de la colección Equinoccio 2026. Precios en USD. Pedidos por WhatsApp.",
			coverAlt: "Portada del catálogo Kafao Colección Andes",
			coverTitle: "Colección Andes",
			campaignAlt: "Pareja Kafao: ruana de mujer y poncho de hombre, campaña Detalles que enamoran",
			campaignTitle: "Detalles que enamoran",
			campaignBody: "Él lleva el poncho Árbol de la Vida; ella, la ruana de rayas otavaleñas. Prendas de hombre y de mujer, hechas para verse de cerca.",
			campaignKicker: "Campaña"
		},
		gallery: {
			kicker: "02 · Colección",
			title: "Para ella y para él",
			body: "Ruanas y pantalones de mujer, ponchos y chompas de hombre, collares artesanales. Toca una prenda para ver detalle y pedirla.",
			filterAria: "Filtrar prendas",
			detail: "Ver detalle",
			ask: "Pedir por WhatsApp",
			askNote: "Te confirmamos talla, color y envío a mano.",
			sale: "Oferta",
			wa: (name, price, wearer) => `Hola Kafao, me interesa ${name} (${price}, ${wearer}). ¿Tienen disponibilidad?`
		},
		filters: {
			todos: "Todos",
			mujer: "Mujer",
			hombre: "Hombre",
			Ponchos: "Ponchos",
			Chompas: "Chompas",
			Pantalones: "Pantalones",
			Accesorios: "Accesorios"
		},
		wearer: {
			Mujer: "Mujer",
			Hombre: "Hombre",
			Unisex: "Unisex"
		},
		category: {
			Ponchos: "Ponchos",
			Chompas: "Chompas",
			Pantalones: "Pantalones",
			Accesorios: "Accesorios"
		},
		products: {
			"ruana-rayas-otavalo": {
				name: "Ruana Rayas Otavalo",
				description: "Ruana de mujer en lana cruda con rayas horizontales en crudo, cacao y grafito. El fleco cae suelto; el tejido, de telar de cintura. La misma prenda de nuestra campaña Detalles que enamoran."
			},
			"poncho-arbol-vida": {
				name: "Poncho Árbol de la Vida",
				description: "Poncho de hombre en lana cacao, con el árbol de la vida en crudo y grecas geométricas en terracota, marfil e índigo. Forro interior en oliva y fleco denso. Pieza de gala, de nuestra campaña."
			},
			"pantalon-colibri": {
				name: "Pantalón Colibrí",
				description: "Pantalón de mujer en chambray, tiro alto con pretina fruncida y cordón. En el muslo, un colibrí bordado en hilo iridiscente. Holgado, ligero, para el patio y la ciudad."
			},
			"chompa-granada": {
				name: "Chompa Granada",
				description: "Chompa con cierre de hombre en granate, capucha forrada en tejido andino y grecas en las mangas. Bolsillos con vivo étnico y parche de cuero. La K de Kafao, bordada al pecho."
			},
			"chompa-negra": {
				name: "Chompa Negra",
				description: "Chompa con cierre de hombre en negro, capucha forrada en verde andino y grecas índigo en las mangas. Bolsillos con vivo étnico. Misma silueta que la granate, otro pulso de color."
			},
			"collar-quilotoa": {
				name: "Collar Quilotoa",
				description: "Doble vuelta de cuentas turquesa, como el agua del cráter, con esferas de madera clara que marcan el ritmo. Hecho a mano, para cuello desnudo o sobre lino."
			},
			"collar-ambar": {
				name: "Collar Ámbar",
				description: "Tres vueltas de cuentas ámbar y tubos de madera oscura. Calidez de sol andino sobre la piel. Pieza de atelier, liviana al uso diario."
			}
		},
		promo: {
			kicker: "Oferta de temporada",
			mark: "03 · Temporada",
			title: "¡OFERTA DE TEMPORADA! 20% de descuento en accesorios seleccionados.",
			body: "¡Hasta fin de mes!",
			cta: "Ver accesorios",
			ended: "La oferta de esta temporada ha cerrado.",
			remainAria: "Tiempo restante de la oferta",
			alt: "Collar artesanal Kafao en oferta de temporada",
			days: "Días",
			hours: "Horas",
			mins: "Min",
			secs: "Seg"
		},
		policies: {
			kicker: "04 · Atelier",
			title: "Políticas de ventas",
			lead: "Comprar a Kafao es tratar con el taller. Envíos, cambios y pagos, claros desde el primer mensaje.",
			items: {
				envios: {
					title: "Envíos Seguros",
					body: "Despachamos a todo Ecuador en 2 a 5 días hábiles, con empaque de tela reutilizable. Quito, entrega coordinada por WhatsApp."
				},
				cambios: {
					title: "Política de Cambios",
					body: "Tienes 15 días para cambiar talla o modelo, con la prenda en perfecto estado y su etiqueta. Escribe por WhatsApp y lo resolvemos."
				},
				pagos: {
					title: "Métodos de Pago",
					body: "Transferencia bancaria, depósito y efectivo en Quito. Pedidos se reservan con un abono; el saldo, al despachar."
				}
			}
		},
		contact: {
			kicker: "05 · Conversemos",
			title: "Contacto",
			note: "Atelier y envíos desde Quito. Cada pedido se confirma a mano.",
			hours: "Lunes a sábado, 9:00 – 18:00",
			formTitle: "Escribir al atelier",
			formLead: "Te respondemos por WhatsApp, el mismo día hábil.",
			name: "Nombre",
			namePh: "Tu nombre",
			interest: "Me interesa",
			message: "Mensaje",
			messagePh: "Talla, color o fecha en la que lo necesitas…",
			send: "Enviar por WhatsApp",
			wa: (name, topic, extra) => extra ? `Hola Kafao, soy ${name}. Quiero información sobre ${topic}. ${extra}` : `Hola Kafao, soy ${name}. Quiero información sobre ${topic}.`
		},
		topics: [
			{
				id: "general",
				label: "Información general",
				value: "información general sobre sus prendas"
			},
			{
				id: "ponchos",
				label: "Ponchos y ruanas",
				value: "un poncho o ruana"
			},
			{
				id: "chompas",
				label: "Chompas",
				value: "una chompa"
			},
			{
				id: "pantalones",
				label: "Pantalones",
				value: "un pantalón"
			},
			{
				id: "accesorios",
				label: "Collares y accesorios",
				value: "un collar o accesorio"
			},
			{
				id: "mayor",
				label: "Pedido al por mayor",
				value: "un pedido mayor o al por mayor"
			}
		],
		footer: {
			blurb: "Ropa y accesorios artesanales de Ecuador. Viste tu esencia étnica.",
			nav: "Navegación",
			socials: "Redes y taller",
			legal: "Hecho en Ecuador"
		},
		waFloat: {
			aria: "Escribir a Kafao por WhatsApp",
			tip: "WhatsApp",
			text: "Hola Kafao, quiero información sobre sus prendas"
		}
	},
	en: {
		skip: "Skip to content",
		title: "Kafao · Handcrafted clothing from Ecuador",
		description: "Kafao — handcrafted clothing and accessories from Ecuador. Wear your Andean essence.",
		nav: {
			home: "Home",
			catalog: "Catalog",
			promo: "Offers",
			policies: "Policies",
			contact: "Contact"
		},
		navAria: "Primary",
		mobileAria: "Mobile",
		openMenu: "Open menu",
		closeMenu: "Close menu",
		write: "Write us",
		langAria: "Language",
		hero: {
			eyebrow: "Handmade in the Ecuadorian Andes",
			title: "Wear your ethnic essence.",
			subtitle: "Artisan clothing and accessories from Ecuador.",
			cta: "See the collection",
			talk: "Talk to the atelier",
			alt: "Kafao model in the Ecuadorian Andes, wearing a handwoven poncho"
		},
		catalog: {
			kicker: "01 · Equinox 2026",
			eyebrow: "Lookbook 2026",
			title: "Andes Collection Catalog",
			body: "Ponchos, ruanas, hoodies, trousers and necklaces. For women and men, handmade in Ecuador: the same thread, two ways of wearing the Andes.",
			download: "Download full catalog (PDF)",
			pdfNote: "PDF of the Equinox 2026 collection (Spanish). Prices in USD. Orders via WhatsApp.",
			coverAlt: "Cover of the Kafao Andes Collection catalog",
			coverTitle: "Andes Collection",
			campaignAlt: "Kafao couple: women's ruana and men's poncho, Details that Enchant campaign",
			campaignTitle: "Details that enchant",
			campaignBody: "He wears the Tree of Life poncho; she, the Otavalo stripe ruana. Pieces for men and women, made to be seen up close.",
			campaignKicker: "Campaign"
		},
		gallery: {
			kicker: "02 · Collection",
			title: "For her and for him",
			body: "Women's ruanas and trousers, men's ponchos and hoodies, artisan necklaces. Tap a piece to see detail and order.",
			filterAria: "Filter pieces",
			detail: "View details",
			ask: "Order on WhatsApp",
			askNote: "We'll confirm size, color and shipping by hand.",
			sale: "Sale",
			wa: (name, price, wearer) => `Hello Kafao, I'm interested in ${name} (${price}, ${wearer}). Is it available?`
		},
		filters: {
			todos: "All",
			mujer: "Women",
			hombre: "Men",
			Ponchos: "Ponchos",
			Chompas: "Hoodies",
			Pantalones: "Trousers",
			Accesorios: "Accessories"
		},
		wearer: {
			Mujer: "Women",
			Hombre: "Men",
			Unisex: "Unisex"
		},
		category: {
			Ponchos: "Ponchos",
			Chompas: "Hoodies",
			Pantalones: "Trousers",
			Accesorios: "Accessories"
		},
		products: {
			"ruana-rayas-otavalo": {
				name: "Otavalo Stripe Ruana",
				description: "Women's ruana in raw wool with horizontal stripes of cream, cacao and graphite. Loose fringe; backstrap-loom weave. The same piece from our Details that Enchant campaign."
			},
			"poncho-arbol-vida": {
				name: "Tree of Life Poncho",
				description: "Men's cacao-wool poncho with the tree of life in cream and geometric grecas in terracotta, ivory and indigo. Olive lining and dense fringe. A gala piece, from our campaign."
			},
			"pantalon-colibri": {
				name: "Hummingbird Trousers",
				description: "Women's chambray trousers, high rise with a gathered drawstring waist. On the thigh, a hummingbird embroidered in iridescent thread. Easy, light, for the courtyard and the city."
			},
			"chompa-granada": {
				name: "Burgundy Hoodie",
				description: "Men's zip hoodie in burgundy, hood lined with Andean cloth and woven bands on the sleeves. Ethnic pocket welts and a leather patch. Kafao's K, embroidered at the chest."
			},
			"chompa-negra": {
				name: "Black Hoodie",
				description: "Men's zip hoodie in black, hood lined in Andean green and indigo grecas on the sleeves. Ethnic pocket welts. Same cut as the burgundy, another pulse of color."
			},
			"collar-quilotoa": {
				name: "Quilotoa Necklace",
				description: "A double strand of turquoise beads, like the crater lake, with pale wood spheres that keep the rhythm. Handmade, for a bare neck or over linen."
			},
			"collar-ambar": {
				name: "Amber Necklace",
				description: "Three strands of amber beads and dark wood tubes. Andean sun on the skin. An atelier piece, light enough for every day."
			}
		},
		promo: {
			kicker: "Season offer",
			mark: "03 · Season",
			title: "SEASON OFFER! 20% off selected accessories.",
			body: "Until the end of the month!",
			cta: "See accessories",
			ended: "This season's offer has closed.",
			remainAria: "Time left on the offer",
			alt: "Kafao artisan necklace in the season offer",
			days: "Days",
			hours: "Hours",
			mins: "Min",
			secs: "Sec"
		},
		policies: {
			kicker: "04 · Atelier",
			title: "Sales policies",
			lead: "Buying from Kafao means dealing with the workshop. Shipping, exchanges and payment, clear from the first message.",
			items: {
				envios: {
					title: "Secure shipping",
					body: "We ship across Ecuador in 2 to 5 business days, in reusable cloth wrapping. Quito deliveries are arranged on WhatsApp."
				},
				cambios: {
					title: "Exchange policy",
					body: "You have 15 days to exchange size or model, with the piece in perfect condition and its label. Write on WhatsApp and we'll sort it."
				},
				pagos: {
					title: "Payment methods",
					body: "Bank transfer, deposit and cash in Quito. Orders are reserved with a deposit; the balance, on dispatch."
				}
			}
		},
		contact: {
			kicker: "05 · Let's talk",
			title: "Contact",
			note: "Atelier and shipping from Quito. Every order is confirmed by hand.",
			hours: "Monday to Saturday, 9:00 – 18:00",
			formTitle: "Write to the atelier",
			formLead: "We reply on WhatsApp, the same business day.",
			name: "Name",
			namePh: "Your name",
			interest: "I'm interested in",
			message: "Message",
			messagePh: "Size, color, or the date you need it…",
			send: "Send on WhatsApp",
			wa: (name, topic, extra) => extra ? `Hello Kafao, I'm ${name}. I'd like information about ${topic}. ${extra}` : `Hello Kafao, I'm ${name}. I'd like information about ${topic}.`
		},
		topics: [
			{
				id: "general",
				label: "General information",
				value: "your pieces in general"
			},
			{
				id: "ponchos",
				label: "Ponchos and ruanas",
				value: "a poncho or ruana"
			},
			{
				id: "chompas",
				label: "Hoodies",
				value: "a hoodie"
			},
			{
				id: "pantalones",
				label: "Trousers",
				value: "trousers"
			},
			{
				id: "accesorios",
				label: "Necklaces and accessories",
				value: "a necklace or accessory"
			},
			{
				id: "mayor",
				label: "Wholesale order",
				value: "a wholesale order"
			}
		],
		footer: {
			blurb: "Handcrafted clothing and accessories from Ecuador. Wear your ethnic essence.",
			nav: "Navigation",
			socials: "Studio and socials",
			legal: "Made in Ecuador"
		},
		waFloat: {
			aria: "Message Kafao on WhatsApp",
			tip: "WhatsApp",
			text: "Hello Kafao, I would like information about your pieces"
		}
	}
};
var STORAGE_KEY = "kafao-locale";
var LocaleContext = (0, import_react.createContext)(null);
function readStored() {
	try {
		const saved = window.localStorage.getItem(STORAGE_KEY);
		if (saved === "en" || saved === "es") return saved;
	} catch {}
	return null;
}
function LocaleProvider({ children }) {
	const [locale, setLocaleState] = (0, import_react.useState)("es");
	const chosen = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (chosen.current) return;
		const saved = readStored();
		if (saved) setLocaleState(saved);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = locale;
		document.title = COPY[locale].title;
	}, [locale]);
	const setLocale = (0, import_react.useCallback)((next) => {
		chosen.current = true;
		try {
			window.localStorage.setItem(STORAGE_KEY, next);
		} catch {}
		setLocaleState(next);
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		locale,
		setLocale,
		t: COPY[locale]
	}), [locale, setLocale]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleContext.Provider, {
		value,
		children
	});
}
function useLocale() {
	const ctx = (0, import_react.useContext)(LocaleContext);
	if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
	return ctx;
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CeK6OqJ7.css";
var APP_NAME = "Kafao";
var DESCRIPTION = "Kafao — ropa y accesorios artesanales de Ecuador. Viste tu esencia étnica.";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: `${APP_NAME} · Ropa artesanal de Ecuador` },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				name: "theme-color",
				content: "#F7F1E6"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Figtree:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LocaleProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter = () => import("./routes-h7wVQJ2f.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { useLocale as n, router_exports as t };
