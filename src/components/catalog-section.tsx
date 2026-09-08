import { CATALOG } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { IconDownload } from "@/components/icons";
import { SectionMark } from "@/components/section-mark";

/* ========== SECCIÓN CATÁLOGO DESCARGABLE ==========
   PDF oficial: public/catalogo-kafao.pdf (Septiembre 2026). */
export function CatalogSection() {
  const { t } = useLocale();
  return (
    <section id="catalogo" className="section py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionMark kicker={t.catalog.kicker} />
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">{t.catalog.title}</h2>
            <div className="gold-rule my-6" />
            <p className="max-w-md text-base leading-relaxed text-ink-soft">{t.catalog.body}</p>
            <a
              href={CATALOG.pdfHref}
              download={CATALOG.pdfDownloadName}
              className="btn btn-gold mt-8"
            >
              <IconDownload className="size-4" />
              {t.catalog.download}
            </a>
            <p className="mt-4 max-w-sm text-sm text-ink-mute">{t.catalog.pdfNote}</p>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-[1.6rem] bg-sand/50" />
            <figure className="overflow-hidden rounded-xl bg-[#f26522] shadow-[var(--shadow-card)]">
              <img
                src={CATALOG.cover}
                alt={t.catalog.coverAlt}
                className="aspect-[3/4] w-full object-cover object-center"
                loading="lazy"
              />
            </figure>
            <p className="mt-4 text-center text-xs tracking-[0.18em] text-ink-mute uppercase">
              {t.catalog.eyebrow}
            </p>
          </div>
        </div>

        <div className="campaign mt-16 overflow-hidden rounded-xl">
          <img src={CATALOG.campaign} alt={t.catalog.campaignAlt} loading="lazy" />
          <div className="campaign__veil" />
          <div className="campaign__copy">
            <p className="eyebrow text-gold-soft">{t.catalog.campaignKicker}</p>
            <p className="font-display mt-3 max-w-lg text-4xl leading-tight text-ivory sm:text-5xl">
              {t.catalog.campaignTitle}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/80 sm:text-base">
              {t.catalog.campaignBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
