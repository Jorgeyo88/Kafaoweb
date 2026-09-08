import { waLink } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { IconWhatsApp } from "@/components/icons";

/* ========== WHATSAPP FLOTANTE ========== */
export function WhatsAppFloat() {
  const { t } = useLocale();
  return (
    <a
      href={waLink(t.waFloat.text)}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label={t.waFloat.aria}
    >
      <IconWhatsApp className="relative z-10 size-7" title="" />
      <span className="wa-float__tip">{t.waFloat.tip}</span>
    </a>
  );
}
