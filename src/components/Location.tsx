import { MapPin, Utensils, ShoppingBag } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export default function Location() {
  const { t } = useLang();
  const pois = [
    { icon: MapPin, title: t("Pereybere Beach", "Plage de Pereybère"), desc: t("A short 5 minute drive to Pereybere's turquoise lagoon and family friendly beach.", "À 5 minutes en voiture du lagon turquoise de Pereybère et de sa plage familiale.") },
    { icon: MapPin, title: t("Grand Baie Beach", "Plage de Grand Baie"), desc: t("About 5 minutes by car to Grand Baie village, the north's most popular beach and marina.", "Environ 5 minutes en voiture jusqu'au village de Grand Baie, la plage et la marina les plus populaires du nord.") },
    { icon: Utensils, title: t("Restaurants & Nightlife", "Restaurants et vie nocturne"), desc: t("Dozens of restaurants, beach bars and rooftop lounges within a 3 km radius.", "Des dizaines de restaurants, bars de plage et rooftops dans un rayon de 3 km.") },
    { icon: ShoppingBag, title: t("Grand Baie La Croisette", "Grand Baie La Croisette"), desc: t("A 10 minute drive to the north's biggest shopping mall, cinema and supermarket.", "À 10 minutes en voiture du plus grand centre commercial du nord, avec cinéma et supermarché.") },
  ];

  return (
    <section id="location" className="py-16 sm:py-20 bg-luxury-beige scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">{t("Location", "Emplacement")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t("Pereybere, Grand Baie, the north's most sought after coast", "Pereybère, Grand Baie, la côte la plus prisée du nord")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "The villa sits in a peaceful residential lane in Pereybere, minutes from Grand Baie village, the finest beaches of North Mauritius and the northern islets.",
              "La villa se trouve dans une rue résidentielle paisible à Pereybère, à quelques minutes du village de Grand Baie, des plus belles plages du nord de l'Île Maurice et des îlots du nord."
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-white">
              <iframe
                title="Luxora Villa location in Pereybere, Grand Baie, Mauritius"
                src="https://www.openstreetmap.org/export/embed.html?bbox=57.60243%2C-20.00785%2C57.61243%2C-19.99985&layer=mapnik&marker=-20.003798%2C57.607427"
                className="w-full h-[420px]"
                loading="lazy"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://www.google.com/maps/place/20%C2%B000'13.7%22S+57%C2%B036'26.7%22E/@-20.003798,57.6067819,252m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-20.003798!4d57.607427"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-luxury-blue px-6 py-3 text-sm font-semibold text-white hover:bg-luxury-blue/90 transition"
              >
                {t("Open in Google Maps", "Ouvrir dans Google Maps")}
              </a>
            </div>
          </div>

          <div className="space-y-5">
            {pois.map((p) => (
              <div key={p.title} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="shrink-0 bg-luxury-gold rounded-full p-2.5 text-white">
                  <p.icon size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif font-bold text-lg text-luxury-dark">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
