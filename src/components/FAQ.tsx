export const faqs = [
  {
    q: "Where is Luxora Villa located in Mauritius?",
    a: "Luxora Villa is a private-pool villa in Pereybere, Grand Baie, in the north of Mauritius — minutes from Pereybere Beach and Grand Baie's beaches, restaurants and shops.",
  },
  {
    q: "What makes Luxora Villa a great choice for villas in Grand Baie?",
    a: "Luxora Villa combines a fully private 3-bedroom villa with a private pool, jacuzzi and rooftop terrace, in a quiet residential lane just minutes from Grand Baie's centre — you get the space of a home with hotel-grade amenities.",
  },
  {
    q: "How many guests can the villa accommodate?",
    a: "The villa sleeps up to 6 guests across 3 air-conditioned bedrooms and 2 bathrooms, with a fully-equipped kitchen and large living/dining space.",
  },
  {
    q: "Is there a private pool at the villa?",
    a: "Yes — the villa has its own private swimming pool with sun loungers, a shaded outdoor lounge and a jacuzzi. The pool is exclusively yours during your stay.",
  },
  {
    q: "How close is the villa to the beach?",
    a: "Pereybere Beach is a 5-minute walk and Grand Baie's main beach is a 5-minute drive. Both are among the best beaches in the north of Mauritius.",
  },
  {
    q: "How do I book Luxora Villa?",
    a: "You can check availability and book directly through Booking.com via the Book Now button on this site — no agency fees, verified guest reviews.",
  },
  {
    q: "What is the closest airport to the villa?",
    a: "Sir Seewoosagur Ramgoolam International Airport (MRU) is about 75 minutes by car. Airport transfers can be arranged on request.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            Frequently asked questions about our villa in Mauritius
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
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
