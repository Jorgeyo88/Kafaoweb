import { useEffect, useState } from "react";
import { NAV, waLink } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { LangSwitch } from "@/components/lang-switch";
import { IconClose, IconMenu, IconWhatsApp } from "@/components/icons";

/* ========== SECCIÓN HEADER ==========
   Logo: /public/logo.png  ·  Enlaces: NAV en src/lib/site-data.ts */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-ivory/92 backdrop-blur-md transition-[border-color,box-shadow] duration-200",
        scrolled ? "border-sand shadow-[0_8px_24px_-20px_rgb(42_34_24_/_0.6)]" : "border-sand/70",
      )}
    >
      <div className="mx-auto flex h-[4.6rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="flex shrink-0 items-center" aria-label="Kafao">
          <Logo className="h-10 w-auto sm:h-12" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.navAria}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-sans text-[0.72rem] font-semibold tracking-[0.18em] text-ink-soft uppercase transition-colors duration-150 hover:text-gold-deep"
            >
              {t.nav[item.id]}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LangSwitch />
          <span className="hidden sm:inline-flex">
            <a
              href={waLink(t.waFloat.text)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold min-h-10 px-4"
            >
              <IconWhatsApp className="size-4" />
              {t.write}
            </a>
          </span>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-sand text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose className="size-5" /> : <IconMenu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        className={cn(
          "lg:hidden",
          "overflow-hidden border-t border-sand bg-ivory transition-[max-height,opacity] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-5" aria-label={t.mobileAria}>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display py-3 text-2xl text-ink"
            >
              {t.nav[item.id]}
            </a>
          ))}
          <a
            href={waLink(t.waFloat.text)}
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold mt-3 w-full"
            onClick={() => setOpen(false)}
          >
            <IconWhatsApp className="size-4" />
            WhatsApp
          </a>
        </nav>
      </div>
      <div className="kafao-ribbon" aria-hidden="true" />
    </header>
  );
}
