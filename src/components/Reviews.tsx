import { Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const BOOKING_URL = "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html";

const reviews = [
  {
    name: "Hurley",
    country: "United States",
    quote:
      "The location is somewhat remote, where you get a calm, clear night's rest, but also close enough to the centre of Grand Baie to where getting food and hanging out is really easy to do.",
  },
  {
    name: "Akshay",
    country: "Mauritius",
    quote:
      "Brand new villa with modern amenities and fully equipped. Ideal for both short and long term stays. Neighbourhood is very quiet and very nice. The villa is well maintained and was spotlessly clean.",
  },
  {
    name: "Shweta",
    country: "Mauritius",
    quote:
      "The host Nisha was very kind and gave us a welcoming like a hotel check in. We felt at home from the moment we arrived.",
  },
  {
    name: "Chutkai",
    country: "Mauritius",
    quote:
      "Very comfortable and clean. Kids loved the pool so much they didn't want to leave. Would absolutely stay again.",
  },
  {
    name: "Lamlac",
    country: "Reunion",
    quote:
      "Very quiet, restful residence and the villa is beautiful and very comfortable. High end appliances, comfortable bedding, a little gem in the north of Mauritius.",
  },
  {
    name: "Nishaad Nowbuth",
    country: "Mauritius",
    quote:
      "We had a wonderful stay at this villa. It was exceptionally clean, well maintained, and equipped with plenty of amenities that made our stay comfortable and convenient. The host was very friendly, welcoming, and always available to help whenever needed. The location is excellent. It's easily accessible and conveniently close to shopping malls, beaches, and other attractions, making it a great base for exploring the area. Overall, we had a fantastic experience and would highly recommend this villa to anyone looking for a comfortable and enjoyable stay. We would definitely love to come back!",
  },
];

export default function Reviews() {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Guest Reviews", "Avis des voyageurs")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t('Rated 9.3/10, "Exceptional"', "Noté 9,3/10, « Exceptionnel »")}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex" aria-hidden>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-luxury-gold text-luxury-gold" />
              ))}
            </div>
            <span className="text-2xl font-serif font-bold text-luxury-dark">9.3/10</span>
          </div>
          <p className="text-gray-600">
            {t("Based on verified guest reviews on", "Basé sur des avis vérifiés sur")}{" "}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-luxury-gold underline hover:no-underline"
            >
              Booking.com
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="bg-luxury-beige/40 border border-luxury-beige rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-3" role="img" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" aria-hidden />
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "{r.quote}"
              </blockquote>
              <footer className="text-sm">
                <span className="font-semibold text-luxury-dark">{r.name}</span>
                <span className="text-gray-500"> · {r.country}</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-luxury-gold font-semibold hover:underline"
          >
            {t("Read all reviews on Booking.com →", "Voir tous les avis sur Booking.com →")}
          </a>
        </div>
      </div>
    </section>
  );
}
