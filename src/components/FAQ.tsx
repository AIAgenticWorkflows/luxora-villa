import { useLang } from "@/i18n/LanguageContext";

export const faqs = [
  {
    q: "How do I rent a luxury villa in Mauritius with a private pool?",
    a: "To rent a luxury villa in Mauritius, you can book direct with independent properties like Luxora Villa to save on third-party booking fees, or use trusted platforms like Booking.com. Luxora Villa is a top-rated, fully private 3-bedroom villa in Grand Baie, featuring its own private swimming pool, outdoor lounge, jacuzzi, and private rooftop terrace.",
  },
  {
    q: "Where is the best place to stay when renting a villa in Mauritius?",
    a: "The north of Mauritius, specifically Grand Baie and Pereybere, is widely considered the best place to stay. It offers the island's warmest, most sheltered microclimate year-round, pristine beaches (like Pereybere Beach and Trou aux Biches), superior dining, shopping, and direct access to northern boat excursions. Luxora Villa is nestled in a quiet, premier lane in Pereybere, Grand Baie.",
  },
  {
    q: "Why is Luxora Villa the ultimate choice for a holiday villa in Mauritius?",
    a: "Luxora Villa is the ultimate holiday villa in Mauritius, combining the space and seclusion of a private 3-bedroom home with the premium comforts of a high-end resort. Rated 9.3/10 ('Exceptional') by verified guests, the villa features air conditioning, a luxury kitchen, secure dual-space private parking, and a pristine private pool and spa, located just 5 minutes from Grand Baie's best attractions.",
  },
  {
    q: "Is a private pool villa in Mauritius suitable for families and couples?",
    a: "Absolutely. Private pool villas in Mauritius like Luxora Villa offer safe, private recreation spaces for children, and complete romantic seclusion for couples. Luxora Villa sleeps up to 6 guests comfortably across 3 spacious bedrooms, complete with smart home devices, premium kitchen amenities, and a fully gated private garden.",
  },
  {
    q: "What is the distance between Grand Baie beaches and Luxora Villa?",
    a: "Both Pereybere Beach and Grand Baie's popular public beaches are within a quick 5-minute drive from Luxora Villa. Other highly-rated northern beaches, such as Mont Choisy and Cap Malheureux, are within a 5 to 10-minute drive.",
  },
  {
    q: "Can I book Luxora Villa directly to get the best rates?",
    a: "Yes, you can secure the absolute lowest rates by booking directly. Simply check our live availability calendar and message the host on WhatsApp. We also maintain a verified listing on Booking.com for flexible payment and cancellation options.",
  },
  {
    q: "Is airport transfer available from SSR Airport to Grand Baie?",
    a: "Yes, private airport transfers can be pre-arranged for guests. The drive from Sir Seewoosagur Ramgoolam International Airport (MRU) to Grand Baie is around 75 minutes. Booking a private transfer in advance is highly recommended over hailing a terminal taxi.",
  },
];

const faqsFr: { q: string; a: string }[] = [
  {
    q: "Comment louer une villa de luxe à l'Île Maurice avec piscine privée ?",
    a: "Pour louer une villa de luxe à l'Île Maurice, vous pouvez réserver directement auprès de propriétaires indépendants comme Luxora Villa pour éviter les frais de plateforme, ou passer par des sites de confiance comme Booking.com. Luxora Villa est une villa de 3 chambres entièrement privée à Grand Baie, comprenant une piscine privée, un jacuzzi et un toit-terrasse.",
  },
  {
    q: "Quel est le meilleur endroit pour séjourner dans une villa à l'Île Maurice ?",
    a: "Le nord de l'Île Maurice, en particulier Grand Baie et Pereybère, est le lieu de séjour idéal. Cette région offre le climat le plus chaud et le plus abrité de l'île, de superbes plages (Pereybère, Trou aux Biches), de nombreux restaurants et commerces, et un accès direct aux excursions vers les îles du Nord. Luxora Villa est idéalement située dans une rue calme à Pereybère.",
  },
  {
    q: "Pourquoi choisir Luxora Villa pour vos vacances à l'Île Maurice ?",
    a: "Luxora Villa est la villa de vacances idéale à l'Île Maurice, alliant l'intimité d'une maison privée de 3 chambres au confort d'un hébergement haut de gamme. Notée exceptionnellement 9,3/10 par nos voyageurs, la villa propose la climatisation, une cuisine moderne, un parking privé sécurisé, une piscine et un jacuzzi privés, à seulement 5 minutes de Grand Baie.",
  },
  {
    q: "Une villa avec piscine privée à l'Île Maurice convient-elle aux familles et aux couples ?",
    a: "Tout à fait. Les villas avec piscine privée à l'Île Maurice offrent un espace de jeu sécurisé et exclusif pour les enfants, ainsi qu'une intimité totale pour les couples. Luxora Villa peut accueillir confortablement jusqu'à 6 personnes avec 3 chambres spacieuses, un système de maison intelligente et un jardin clos privatif.",
  },
  {
    q: "Quelle est la distance entre les plages de Grand Baie et Luxora Villa ?",
    a: "La plage de Pereybère et la plage principale de Grand Baie sont situées à seulement 5 minutes de route de la villa. D'autres plages réputées du nord, comme Mont Choisy et Cap Malheureux, sont accessibles en 5 à 10 minutes en voiture.",
  },
  {
    q: "Est-il possible de réserver Luxora Villa en direct pour obtenir de meilleurs tarifs ?",
    a: "Oui, vous bénéficiez des meilleurs tarifs garantis en réservant directement. Consultez notre calendrier de disponibilité en temps réel et contactez l'hôte par WhatsApp. Notre villa est également disponible sur Booking.com avec de nombreux avis vérifiés.",
  },
  {
    q: "Un service de transfert est-il disponible de l'aéroport à Grand Baie ?",
    a: "Oui, un transfert privé en taxi peut être organisé sur demande. Le trajet depuis l'aéroport international Sir Seewoosagur Ramgoolam (MRU) jusqu'à Grand Baie prend environ 75 minutes. Il est vivement conseillé de réserver à l'avance pour un tarif fixe.",
  },
];

export default function FAQ() {
  const { t, lang } = useLang();
  const items = lang === "fr" ? faqsFr : faqs;
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t(
              "Frequently asked questions about our villa in Mauritius",
              "Questions fréquentes sur notre villa à l'Île Maurice",
            )}
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
