import { Bed, Bath, Utensils, Waves, Sun, Tv, Wifi, Car, Palmtree, Snowflake } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export default function Features() {
  const { t } = useLang();
  const features = [
    {
      icon: Bed,
      title: t("3 Bedrooms, Sleeps 6", "3 chambres, jusqu'à 6 personnes"),
      desc: t(
        "Three air-conditioned bedrooms with premium linens and blackout curtains, ideal for families or two couples travelling together.",
        "Trois chambres climatisées avec linge de qualité et rideaux occultants, idéales pour les familles ou deux couples voyageant ensemble.",
      ),
    },
    {
      icon: Bath,
      title: t("2 Bathrooms + Jacuzzi", "2 salles de bain + jacuzzi"),
      desc: t(
        "Modern bathrooms with rain showers plus a spa jacuzzi to unwind after a day at the beach.",
        "Salles de bain modernes avec douches à effet pluie et un jacuzzi spa pour se détendre après une journée à la plage.",
      ),
    },
    {
      icon: Waves,
      title: t("Private Swimming Pool", "Piscine privée"),
      desc: t(
        "A sparkling private pool with sun loungers and a shaded outdoor lounge, exclusively yours during your stay.",
        "Une piscine privée avec transats et un salon extérieur ombragé, exclusivement pour vous pendant votre séjour.",
      ),
    },
    {
      icon: Sun,
      title: t("Rooftop Terrace", "Terrasse sur le toit"),
      desc: t(
        "A private rooftop with panoramic views of Pereybere and Grand Baie, perfect for sunset apéro.",
        "Un toit privé avec vue panoramique sur Pereybère et Grand Baie, parfait pour l'apéro au coucher du soleil.",
      ),
    },
    {
      icon: Utensils,
      title: t("Fully Equipped Kitchen", "Cuisine entièrement équipée"),
      desc: t(
        "Cook like a local with a full kitchen featuring oven, hob, dishwasher, Nespresso and everything you need.",
        "Cuisinez comme un local avec une cuisine complète : four, plaques, lave-vaisselle, Nespresso et tout le nécessaire.",
      ),
    },
    {
      icon: Tv,
      title: t("Smart TV & Google Home", "Smart TV et Google Home"),
      desc: t(
        "Smart TV with Netflix casting and Google Home for music, lights and voice control.",
        "Smart TV avec Netflix et Google Home pour la musique, les lumières et la commande vocale.",
      ),
    },
    {
      icon: Wifi,
      title: t("Free Wi-Fi", "Wi-Fi gratuit"),
      desc: t(
        "Complimentary fibre Wi-Fi throughout the villa, great for remote work and streaming.",
        "Wi-Fi fibre gratuit dans toute la villa, idéal pour le télétravail et le streaming.",
      ),
    },
    {
      icon: Snowflake,
      title: t("Air Conditioning", "Climatisation"),
      desc: t(
        "Individually controlled AC in every bedroom and the living room.",
        "Climatisation individuelle dans chaque chambre et le salon.",
      ),
    },
    {
      icon: Car,
      title: t("Free Private Parking", "Parking privé gratuit"),
      desc: t(
        "Two secure parking spaces inside the property, so you never need to park on the street.",
        "Deux places de parking sécurisées sur la propriété, pour ne jamais avoir à se garer dans la rue.",
      ),
    },
    {
      icon: Palmtree,
      title: t("Close to the Beach", "Proche de la plage"),
      desc: t(
        "Only minutes to Pereybere Beach and Grand Baie's turquoise lagoon and vibrant village centre.",
        "À quelques minutes de la plage de Pereybère, du lagon turquoise de Grand Baie et du centre du village animé.",
      ),
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-luxury-beige scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Amenities", "Équipements")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t(
              "Everything you need for a perfect Mauritius holiday",
              "Tout ce qu'il faut pour des vacances parfaites à l'Île Maurice",
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Luxora Villa combines the space of a private home with the amenities of a boutique hotel, designed for effortless island living.",
              "Luxora Villa allie l'espace d'une maison privée aux prestations d'un hôtel boutique, pour une vie insulaire sans effort.",
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex p-3 rounded-full bg-luxury-blue/10 text-luxury-blue mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-serif font-bold text-luxury-dark mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
