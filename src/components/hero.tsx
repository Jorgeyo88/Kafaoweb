import { HERO } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";

export function Hero() {
  const { t } = useLocale();
  return (
    <section
      id="inicio"
      className="relative isolate min-h-[calc(100svh-4.6rem)] overflow-hidden bg-cacao"
    >
      <img
        src={HERO.image}
        alt={t.hero.alt}
        className="absolute inset-0 size-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cacao/80 via-cacao/45 to-cacao/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-cacao/75 via-transparent to-cacao/25" />

      <div className="hero-copy relative mx-auto flex min-h-[calc(100svh-4.6rem)] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 sm:py-20 lg:justify-center lg:py-24">
        <p className="eyebrow text-gold-soft">{t.hero.eyebrow}</p>
        <div className="gold-rule my-5 bg-gold-soft" />
        <h1 className="max-w-xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/85 sm:text-lg">
          {t.hero.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href={HERO.ctaHref} className="btn btn-gold">
            {t.hero.cta}
          </a>
          <a href="#contacto" className="btn btn-outline-ivory">
            {t.hero.talk}
          </a>
        </div>
      </div>
    </section>
  );
}
