import { NAV, SOCIALS, WHATSAPP_NUMBER_DISPLAY, waLink } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { Logo } from "@/components/logo";
import { IconFacebook, IconInstagram, IconTikTok, IconWhatsApp } from "@/components/icons";

const SOCIAL_ICONS = {
  instagram: IconInstagram,
  tiktok: IconTikTok,
  facebook: IconFacebook,
} as const;

/* ========== SECCIÓN FOOTER Y REDES SOCIALES ==========
   Handles: @kafaomitico · kafao.mitico · /Kafao Mítico */
export function SiteFooter() {
  const { t } = useLocale();
  return (
    <footer className="site-footer">
      <div className="kafao-ribbon" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div>
          <a href="#inicio" aria-label="Kafao">
            <Logo className="h-11 w-auto sm:h-12" />
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">{t.footer.blurb}</p>
        </div>

        <div>
          <p className="eyebrow text-gold-soft">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer-link">
                  {t.nav[item.id]}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-soft">{t.footer.socials}</p>
          <ul className="mt-4 space-y-3">
            {SOCIALS.map((s) => {
              const Icon = SOCIAL_ICONS[s.id];
              return (
                <li key={s.id}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="footer-social">
                    <Icon className="size-5" />
                    <span>
                      <span className="block text-xs tracking-[0.14em] text-ivory/50 uppercase">{s.name}</span>
                      <span>{s.handle}</span>
                    </span>
                  </a>
                </li>
              );
            })}
            <li>
              <a href={waLink(t.waFloat.text)} target="_blank" rel="noreferrer" className="footer-social">
                <IconWhatsApp className="size-5" />
                <span>
                  <span className="block text-xs tracking-[0.14em] text-ivory/50 uppercase">WhatsApp</span>
                  <span>{WHATSAPP_NUMBER_DISPLAY}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-4 py-5 text-center text-xs tracking-[0.16em] text-ivory/45 uppercase sm:px-6">
        © {new Date().getFullYear()} Kafao · {t.footer.legal}
      </div>
    </footer>
  );
}
