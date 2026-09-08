import { useEffect, useState } from "react";
import { PROMO } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { SectionMark } from "@/components/section-mark";
import { IconArrow } from "@/components/icons";

type Remain = { days: number; hours: number; mins: number; secs: number } | null;

function remaining(until: string): Remain {
  const diff = new Date(until).getTime() - Date.now();
  if (diff <= 0) return null;
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const mins = Math.floor((diff % 3_600_000) / 60_000);
  const secs = Math.floor((diff % 60_000) / 1_000);
  return { days, hours, mins, secs };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/* ========== SECCIÓN PROMOCIONES ==========
   Cambia la fecha y la foto en src/lib/site-data.ts (PROMO). */
export function PromoSection() {
  const [left, setLeft] = useState<Remain>(null);
  const [ready, setReady] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const tick = () => setLeft(remaining(PROMO.endsAt));
    tick();
    setReady(true);
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="promociones" className="section pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionMark kicker={t.promo.mark} />
        <div className="promo-banner mt-10 overflow-hidden rounded-xl">
          <img src={PROMO.image} alt={t.promo.alt} />
          <div className="promo-banner__veil" />
          <div className="promo-banner__copy">
            <p className="eyebrow text-gold-soft">{t.promo.kicker}</p>
            <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight text-ivory sm:text-5xl">
              {t.promo.title}
            </h2>
            <p className="mt-4 font-display text-2xl text-gold-soft italic">{t.promo.body}</p>

            {ready && left ? (
              <div className="mt-8 flex flex-wrap gap-3" aria-label={t.promo.remainAria}>
                <TimeBox label={t.promo.days} value={pad(left.days)} />
                <TimeBox label={t.promo.hours} value={pad(left.hours)} />
                <TimeBox label={t.promo.mins} value={pad(left.mins)} />
                <TimeBox label={t.promo.secs} value={pad(left.secs)} />
              </div>
            ) : ready ? (
              <p className="mt-8 text-ivory/80">{t.promo.ended}</p>
            ) : null}

            <a href={PROMO.ctaHref} className="btn btn-gold mt-8">
              {t.promo.cta}
              <IconArrow className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="time-box">
      <span className="font-display text-2xl text-ivory tabular-nums sm:text-3xl">{value}</span>
      <span className="time-label">{label}</span>
    </div>
  );
}
