import {
  Bed,
  Bath,
  Utensils,
  Waves,
  Sun,
  Tv,
  Wifi,
  Car,
  Palmtree,
  Snowflake,
} from "lucide-react";

const features = [
  { icon: Bed, title: "3 Bedrooms · Sleeps 6", desc: "Three air-conditioned bedrooms with premium linens and blackout curtains — ideal for families or two couples travelling together." },
  { icon: Bath, title: "2 Bathrooms + Jacuzzi", desc: "Modern bathrooms with rain showers plus a spa jacuzzi to unwind after a day at the beach." },
  { icon: Waves, title: "Private Swimming Pool", desc: "A sparkling private pool with sun loungers and a shaded outdoor lounge — exclusively yours during your stay." },
  { icon: Sun, title: "Rooftop Terrace", desc: "A private rooftop with panoramic views of Pereybere and Grand Baie — perfect for sunset apéro." },
  { icon: Utensils, title: "Fully-Equipped Kitchen", desc: "Cook like a local with a full kitchen: oven, hob, dishwasher, Nespresso and everything you need." },
  { icon: Tv, title: "Smart TV & Google Home", desc: "Smart TV with Netflix casting and Google Home for music, lights and voice control." },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Fast fibre Wi-Fi throughout the villa — great for remote work and streaming." },
  { icon: Snowflake, title: "Air Conditioning", desc: "Individually controlled AC in every bedroom and the living room." },
  { icon: Car, title: "Free Private Parking", desc: "Two secure parking spaces inside the property — no street parking needed." },
  { icon: Palmtree, title: "Steps from the Beach", desc: "Only minutes to Pereybere Beach and Grand Baie's turquoise lagoon and vibrant village centre." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-luxury-beige scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">Amenities</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            Everything you need for a perfect Mauritius holiday
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Luxora Villa combines the space of a private home with the amenities of a
            boutique hotel — designed for effortless island living.
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
