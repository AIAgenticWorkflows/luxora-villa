import { useLang } from "@/i18n/LanguageContext";

export const faqs = [
  {
    q: "Where is Luxora Villa located in Mauritius?",
    a: "Luxora Villa is a private pool villa in Pereybere, in the north of Mauritius, just minutes from Pereybere Beach and Grand Baie's beaches, restaurants and shops.",
  },
  {
    q: "What makes Luxora Villa a great choice for villas in Grand Baie?",
    a: "Luxora Villa combines a fully private 3 bedroom villa with a private pool, jacuzzi and rooftop terrace, in a quiet residential lane just minutes from Grand Baie's centre. You get the space of a home with hotel grade amenities.",
  },
  {
    q: "How many guests can the villa accommodate?",
    a: "The villa sleeps up to 6 guests across 3 air conditioned bedrooms and 2 bathrooms, with a fully equipped kitchen and a large living and dining space.",
  },
  {
    q: "Is there a private pool at the villa?",
    a: "Yes, the villa has its own private swimming pool with sun loungers, a shaded outdoor lounge and a jacuzzi. The pool is exclusively yours during your stay.",
  },
  {
    q: "How close is the villa to the beach?",
    a: "Pereybere Beach is a short 5 minute drive away, and Grand Baie's main beach is also about 5 minutes by car. Both are among the best beaches in the north of Mauritius.",
  },
  {
    q: "How do I book Luxora Villa?",
    a: "You can check availability and book directly via WhatsApp with the host, or through our Booking.com listing with verified guest reviews.",
  },
  {
    q: "What is the closest airport to the villa?",
    a: "Sir Seewoosagur Ramgoolam International Airport (MRU) is about 75 minutes by car. Airport transfers can be arranged on request.",
  },
];

const faqsFr: { q: string; a: string }[] = [
  {
    q: "Où se trouve Luxora Villa à l'Île Maurice ?",
    a: "Luxora Villa est une villa avec piscine privée à Pereybère, dans le nord de l'Île Maurice, à quelques minutes de la plage de Pereybère et des plages, restaurants et boutiques de Grand Baie.",
  },
  {
    q: "Pourquoi choisir Luxora Villa parmi les villas de Grand Baie ?",
    a: "Luxora Villa allie une villa privée de 3 chambres avec piscine, jacuzzi et terrasse sur le toit, dans une rue résidentielle calme à quelques minutes du centre de Grand Baie. L'espace d'une maison avec les prestations d'un hôtel.",
  },
  {
    q: "Combien de personnes la villa peut-elle accueillir ?",
    a: "La villa accueille jusqu'à 6 personnes dans 3 chambres climatisées et 2 salles de bain, avec cuisine entièrement équipée et un grand salon-salle à manger.",
  },
  {
    q: "La villa dispose-t-elle d'une piscine privée ?",
    a: "Oui, la villa possède sa propre piscine privée avec transats, un salon extérieur ombragé et un jacuzzi. La piscine est exclusivement à vous pendant votre séjour.",
  },
  {
    q: "À quelle distance de la plage se trouve la villa ?",
    a: "La plage de Pereybère est à 5 minutes en voiture, et la plage principale de Grand Baie également à environ 5 minutes. Toutes deux figurent parmi les plus belles plages du nord de l'Île Maurice.",
  },
  {
    q: "Comment réserver Luxora Villa ?",
    a: "Vous pouvez vérifier les disponibilités et réserver directement via WhatsApp auprès de l'hôte, ou via notre annonce Booking.com avec avis vérifiés.",
  },
  {
    q: "Quel est l'aéroport le plus proche ?",
    a: "L'aéroport international Sir Seewoosagur Ramgoolam (MRU) est à environ 75 minutes en voiture. Des transferts peuvent être organisés sur demande.",
  },
];

export default function FAQ() {
  const { t, lang } = useLang();
  const items = lang === "fr" ? faqsFr : faqs;
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t("Frequently asked questions about our villa in Mauritius", "Questions fréquentes sur notre villa à l'Île Maurice")}
          </h2>
        </div>
        <div className="space-y-3">
          {items.map((f, i) => (
            <details
              key={i}
              className="group bg-luxury-beige/50 border border-luxury-beige rounded-lg p-5 open:shadow-md transition"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-serif font-semibold text-luxury-dark text-lg">
                <span>{f.q}</span>
                <span className="shrink-0 text-luxury-gold text-2xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
