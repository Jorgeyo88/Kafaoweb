import { useState, type FormEvent } from "react";
import { CONTACT, WHATSAPP_NUMBER_DISPLAY, waLink } from "@/lib/site-data";
import { useLocale } from "@/lib/locale";
import { IconClock, IconMail, IconPin, IconWhatsApp } from "@/components/icons";
import { SectionMark } from "@/components/section-mark";

/* ========== SECCIÓN CONTACTO ==========
   El formulario abre WhatsApp con el mensaje ya armado. */
export function ContactSection() {
  const { t, locale } = useLocale();
  const [name, setName] = useState("");
  const [topicId, setTopicId] = useState(t.topics[0].id);
  const [message, setMessage] = useState("");

  const topic = t.topics.find((x) => x.id === topicId) ?? t.topics[0];

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const who = name.trim() || (locale === "en" ? "a client" : "un cliente");
    window.open(waLink(t.contact.wa(who, topic.value, message.trim())), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="section pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionMark kicker={t.contact.kicker} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl text-ink sm:text-5xl">{t.contact.title}</h2>
            <div className="gold-rule my-6" />
            <p className="max-w-md text-ink-soft">{t.contact.note}</p>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 text-ink">
                <IconPin className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <span>{CONTACT.place}</span>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <IconClock className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <span>{t.contact.hours}</span>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <IconWhatsApp className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <a href={waLink(t.waFloat.text)} target="_blank" rel="noreferrer" className="hover:text-gold-deep">
                  {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <IconMail className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-deep">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="contact-form">
            <h3 className="font-display text-2xl text-ink">{t.contact.formTitle}</h3>
            <p className="mt-1 text-sm text-ink-mute">{t.contact.formLead}</p>

            <label className="mt-6 block">
              <span className="field-label">{t.contact.name}</span>
              <input
                className="field"
                type="text"
                name="nombre"
                autoComplete="name"
                placeholder={t.contact.namePh}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="mt-4 block">
              <span className="field-label">{t.contact.interest}</span>
              <select
                className="field"
                name="interes"
                value={topicId}
                onChange={(e) => setTopicId(e.target.value)}
              >
                {t.topics.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-4 block">
              <span className="field-label">{t.contact.message}</span>
              <textarea
                className="field min-h-28 resize-y"
                name="mensaje"
                rows={4}
                placeholder={t.contact.messagePh}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>

            <button type="submit" className="btn btn-gold mt-6 w-full">
              <IconWhatsApp className="size-4" />
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
