import { useLang } from "@/i18n/LanguageContext";
import { WHATSAPP_URL } from "./WhatsAppButton";

export default function HeroSection() {
  const { t } = useLang();
  return (
    <header id="top" className="relative h-[100svh] min-h-[600px] w-full">
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png"
          alt="Luxora Villa, a luxury private pool villa in Grand Baie, North Mauritius"
          className="w-full h-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" aria-hidden />
      </div>

      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <p className="inline-block bg-luxury-gold/95 text-white text-xs sm:text-sm font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm mb-5">
              {t("★ 9.3/10 · Rated Exceptional on Booking.com", "★ 9,3/10 · Noté Exceptionnel sur Booking.com")}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-serif font-bold leading-tight mb-4">
              {t("Luxury Villa in Grand Baie, Mauritius", "Villa de luxe à Grand Baie, Île Maurice")}
            </h1>
            <p className="text-xl md:text-2xl text-white/95 font-serif mb-3">
              {t("Private pool · 3 bedrooms · Pereybere, North Mauritius", "Piscine privée · 3 chambres · Pereybère, Nord de l'Île Maurice")}
            </p>
            <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl">
              {t(
                "Luxora Villa is a brand new 3 bedroom holiday villa rental with private pool, jacuzzi and rooftop terrace, just minutes from Pereybere Beach and Grand Baie's best restaurants, shops and nightlife.",
                "Luxora Villa est une villa de vacances neuve de 3 chambres avec piscine privée, jacuzzi et terrasse sur le toit, à quelques minutes de la plage de Pereybère et des meilleurs restaurants, boutiques et vie nocturne de Grand Baie."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-lg hover:bg-[#1ebe57] hover:-translate-y-0.5 transition"
              >
                {t("Book via WhatsApp", "Réserver sur WhatsApp")}
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-md bg-white/10 backdrop-blur border border-white/40 px-8 py-4 text-base sm:text-lg font-semibold text-white hover:bg-white/20 transition"
              >
                {t("Explore the Villa", "Découvrir la villa")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#gallery"
        aria-label="Scroll to gallery"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/90 animate-bounce"
      >
        <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </header>
  );
}
