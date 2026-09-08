import { useLocale } from "@/lib/locale";

export function LangSwitch() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.langAria} data-locale={locale}>
      <button
        type="button"
        id="kafao-lang-es"
        aria-pressed={locale === "es"}
        onClick={() => setLocale("es")}
      >
        ES
      </button>
      <button
        type="button"
        id="kafao-lang-en"
        aria-pressed={locale === "en"}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
    </div>
  );
}
