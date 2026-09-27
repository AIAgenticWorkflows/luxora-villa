import { useState, type FormEvent } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from "./WhatsAppButton";

/**
 * Request-a-quote form. No backend: on submit it opens WhatsApp with a
 * pre-filled message containing the enquiry, so the host replies with a
 * personalised quote for the chosen dates.
 */
export default function QuoteForm({ compact = false }: { compact?: boolean }) {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const today = new Date().toISOString().slice(0, 10);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !checkIn || !checkOut) {
      setError(t("Please fill in your name and dates.", "Merci d'indiquer votre nom et vos dates."));
      return;
    }
    if (checkOut <= checkIn) {
      setError(
        t("Check-out must be after check-in.", "La date de départ doit suivre la date d'arrivée."),
      );
      return;
    }
    setError("");
    const text =
      lang === "fr"
        ? `Bonjour Luxora Villa ! Je souhaite un devis.\nNom : ${name}\nArrivée : ${checkIn}\nDépart : ${checkOut}\nVoyageurs : ${guests}${message ? `\nMessage : ${message}` : ""}`
        : `Hi Luxora Villa! I'd like a quote.\nName: ${name}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}${message ? `\nMessage: ${message}` : ""}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    if (typeof window !== "undefined") {
      try {
        (window as any).gtag?.("event", "generate_lead", { method: "whatsapp_quote_form" });
      } catch {
        /* ignore */
      }
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const inputCls =
    "w-full rounded-md border border-luxury-dark/20 bg-white px-3 py-2.5 text-sm text-luxury-dark focus:border-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/30";
  const labelCls = "block text-xs font-semibold uppercase tracking-wide text-luxury-dark/70 mb-1";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl bg-white shadow-xl border border-luxury-beige ${compact ? "p-5" : "p-6 sm:p-8"}`}
      aria-label={t("Request a quote", "Demander un devis")}
    >
      {!compact && (
        <div className="mb-5">
          <h3 className="font-serif text-2xl font-bold text-luxury-dark">
            {t("Request a personalised quote", "Demandez un devis personnalisé")}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {t(
              "Rates depend on your dates and length of stay. Send us your details and the host replies on WhatsApp, usually within the hour.",
              "Les tarifs dépendent de vos dates et de la durée du séjour. Envoyez-nous vos informations et l'hôte vous répond sur WhatsApp, généralement dans l'heure.",
            )}
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label htmlFor="q-name" className={labelCls}>
            {t("Your name", "Votre nom")}
          </label>
          <input
            id="q-name"
            className={inputCls}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label htmlFor="q-in" className={labelCls}>
            {t("Check-in", "Arrivée")}
          </label>
          <input
            id="q-in"
            type="date"
            min={today}
            className={inputCls}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="q-out" className={labelCls}>
            {t("Check-out", "Départ")}
          </label>
          <input
            id="q-out"
            type="date"
            min={checkIn || today}
            className={inputCls}
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="q-guests" className={labelCls}>
            {t("Guests", "Voyageurs")}
          </label>
          <select
            id="q-guests"
            className={inputCls}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="q-msg" className={labelCls}>
            {t("Anything else? (optional)", "Un message ? (facultatif)")}
          </label>
          <textarea
            id="q-msg"
            rows={compact ? 1 : 3}
            className={inputCls}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("Airport transfer, cot, late arrival...", "Transfert aéroport, lit bébé, arrivée tardive...")}
          />
        </div>
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-md bg-luxury-gold px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-luxury-gold/90 transition"
      >
        {t("Get my quote on WhatsApp", "Recevoir mon devis sur WhatsApp")}
      </button>
      <p className="mt-3 text-xs text-gray-500 text-center">
        {t("Prefer to call?", "Vous préférez appeler ?")}{" "}
        <a href="tel:+23059226558" className="text-luxury-blue hover:underline">
          {WHATSAPP_DISPLAY}
        </a>
      </p>
    </form>
  );
}
