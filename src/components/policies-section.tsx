import { useState } from "react";
import { BANK } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { IconCopy, IconPay, IconRefresh, IconTruck } from "@/components/icons";
import { Logo } from "@/components/logo";
import { SectionMark } from "@/components/section-mark";

const ICONS = {
  envios: IconTruck,
  cambios: IconRefresh,
  pagos: IconPay,
} as const;

/* ========== SECCIÓN POLÍTICAS DE VENTAS ==========
   Datos de cuenta: BANK en src/lib/site-data.ts */
export function PoliciesSection() {
  const { t } = useLocale();
  const [copied, setCopied] = useState(false);
  const items = [
    { id: "envios" as const, ...t.policies.items.envios },
    { id: "cambios" as const, ...t.policies.items.cambios },
    { id: "pagos" as const, ...t.policies.items.pagos },
  ];

  async function copyAccount() {
    try {
      await navigator.clipboard.writeText(BANK.account);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  const rows = [
    { label: t.policies.bank.bank, value: BANK.bank },
    { label: t.policies.bank.type, value: BANK.type },
    { label: t.policies.bank.holder, value: BANK.holder },
    { label: t.policies.bank.id, value: BANK.id },
    { label: t.policies.bank.email, value: BANK.email, href: `mailto:${BANK.email}` },
  ];

  return (
    <section id="politicas" className="section pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionMark kicker={t.policies.kicker} />
        <h2 className="font-display mt-8 max-w-xl text-4xl text-ink sm:text-5xl">{t.policies.title}</h2>
        <p className="mt-3 max-w-lg text-ink-soft">{t.policies.lead}</p>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((policy) => {
            const Icon = ICONS[policy.id];
            return (
              <li key={policy.id} className="policy-card">
                <span className="policy-card__icon">
                  <Icon className="size-6" />
                </span>
                <h3 className="font-display mt-5 text-2xl text-ink">{policy.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{policy.body}</p>
              </li>
            );
          })}
        </ul>

        <div className="bank-card mt-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="eyebrow text-gold-deep">{t.policies.bank.title}</p>
              <Logo className="mt-4 h-12 w-auto" />
              <p className="mt-3 max-w-sm text-sm text-ink-soft">{t.policies.bank.lead}</p>
            </div>
            <div className="bank-account">
              <p className="field-label text-gold-deep">{t.policies.bank.account}</p>
              <p className="font-display mt-1 text-3xl tracking-wide text-ink tabular-nums sm:text-4xl">
                {BANK.account}
              </p>
              <button type="button" className="btn btn-line mt-3" onClick={copyAccount}>
                <IconCopy className="size-4" />
                {copied ? t.policies.bank.copied : t.policies.bank.copy}
              </button>
            </div>
          </div>
          <dl className="bank-grid mt-8">
            {rows.map((row) => (
              <div key={row.label}>
                <dt className="field-label">{row.label}</dt>
                <dd className="mt-1 text-ink">
                  {row.href ? (
                    <a href={row.href} className="hover:text-gold-deep">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
