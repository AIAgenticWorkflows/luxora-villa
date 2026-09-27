import { Link } from "@tanstack/react-router";
import { Bed, Bath, Users, Waves, Star, Clock, Car, Plane, Baby } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Features from "@/components/Features";
import QuoteForm from "@/components/QuoteForm";
import { PageHero } from "@/components/LandingPage";
import { galleryImages } from "@/data/galleryData";
import { useLang } from "@/i18n/LanguageContext";

const pick = (needle: string) =>
  galleryImages.find((g) => g.src.includes(needle)) ?? galleryImages[0];

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">{title}</h2>
      {intro && <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">{intro}</p>}
    </div>
  );
}

export default function VillaPage() {
  const { t, localize, home } = useLang();

  const stats = [
    { icon: Bed, value: "3", label: t("Bedrooms", "Chambres") },
    { icon: Users, value: "6", label: t("Guests", "Voyageurs") },
    { icon: Bath, value: "2", label: t("Bathrooms", "Salles de bain") },
    { icon: Waves, value: t("Private", "Privée"), label: t("Pool", "Piscine") },
    { icon: Star, value: "9.3", label: t("Guest rating", "Note des voyageurs") },
  ];

  const rooms = [
    {
      img: pick("abb57903"),
      n: "01",
      title: t("Private pool and sun terrace", "Piscine privée et terrasse"),
      body: t(
        "A sparkling private pool with sun loungers, an outdoor dining table and a shaded lounge, enclosed by the villa's garden wall so it is entirely yours. The living room and master bedroom open straight onto the pool deck.",
        "Une piscine privée avec transats, une table à manger extérieure et un salon ombragé, entourée du mur du jardin pour une intimité totale. Le salon et la chambre principale s'ouvrent directement sur la terrasse de la piscine.",
      ),
    },
    {
      img: pick("b20acf9f"),
      n: "02",
      title: t("Open-plan living and dining", "Salon et salle à manger ouverts"),
      body: t(
        "A large air-conditioned living room with a corner sofa, Smart TV with Netflix, Google Home and a glass dining table for six, flowing to the pool through sliding doors.",
        "Un grand salon climatisé avec canapé d'angle, Smart TV avec Netflix, Google Home et une table en verre pour six personnes, ouvert sur la piscine par des baies coulissantes.",
      ),
    },
    {
      img: pick("8d3df2d7"),
      n: "03",
      title: t("Three air-conditioned bedrooms", "Trois chambres climatisées"),
      body: t(
        "The master bedroom has a king-size bed, fitted wardrobes and direct pool access. Two further bedrooms with quality linen and blackout curtains make the villa ideal for a family of six or two couples.",
        "La chambre principale dispose d'un lit king-size, de placards intégrés et d'un accès direct à la piscine. Deux autres chambres avec linge de qualité et rideaux occultants rendent la villa idéale pour une famille de six ou deux couples.",
      ),
    },
    {
      img: pick("0a540aea"),
      n: "04",
      title: t("Two bathrooms with spa jacuzzi", "Deux salles de bain avec jacuzzi"),
      body: t(
        "Modern tiled bathrooms with rain showers, twin basins and a spa jacuzzi bath to soak in after a day on the lagoon.",
        "Des salles de bain modernes carrelées avec douches à effet pluie, double vasque et une baignoire jacuzzi pour se détendre après une journée au lagon.",
      ),
    },
    {
      img: pick("77624a5a"),
      n: "05",
      title: t("Fully equipped kitchen", "Cuisine entièrement équipée"),
      body: t(
        "Oven, gas hob, extractor, large fridge-freezer, dishwasher, Nespresso machine and everything you need to cook, plus a welcome tray on arrival.",
        "Four, plaques à gaz, hotte, grand réfrigérateur-congélateur, lave-vaisselle, machine Nespresso et tout le nécessaire pour cuisiner, avec un plateau de bienvenue à l'arrivée.",
      ),
    },
    {
      img: pick("e3a75e0b"),
      n: "06",
      title: t("Rooftop terrace, garden and parking", "Toit-terrasse, jardin et parking"),
      body: t(
        "A private rooftop with views over Pereybere for sunset drinks, a landscaped tropical garden with palms and stone paving, and two secure parking spaces inside the gate.",
        "Un toit-terrasse privé avec vue sur Pereybère pour l'apéritif au coucher du soleil, un jardin tropical paysagé avec palmiers et dallage en pierre, et deux places de parking sécurisées à l'intérieur du portail.",
      ),
    },
  ];

  const practical = [
    { icon: Clock, title: t("Check-in / check-out", "Arrivée / départ"), body: t("From 14:00 / by 10:00. Early or late arrivals on request.", "À partir de 14h / avant 10h. Arrivées anticipées ou tardives sur demande.") },
    { icon: Plane, title: t("Airport transfer", "Transfert aéroport"), body: t("About 75 minutes from SSR Airport. Private transfer can be arranged.", "Environ 75 minutes de l'aéroport SSR. Transfert privé sur demande.") },
    { icon: Car, title: t("Parking", "Parking"), body: t("Two secure spaces inside the property.", "Deux places sécurisées sur la propriété.") },
    { icon: Baby, title: t("Families", "Familles"), body: t("Cot and high chair available on request. Gated pool area.", "Lit bébé et chaise haute sur demande. Piscine clôturée.") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHero
          eyebrow={t("The Villa", "La Villa")}
          title={t(
            "A brand-new 3-bedroom villa with private pool in Pereybere",
            "Une villa neuve de 3 chambres avec piscine privée à Pereybère",
          )}
          intro={t(
            "Sleeps 6 across three air-conditioned bedrooms, with two bathrooms, a spa jacuzzi, private pool, rooftop terrace and secure parking. Rated 9.3/10 by verified guests.",
            "Jusqu'à 6 personnes dans trois chambres climatisées, deux salles de bain, un jacuzzi, une piscine privée, un toit-terrasse et un parking sécurisé. Notée 9,3/10 par des voyageurs vérifiés.",
          )}
          image="/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.webp"
          imageAlt="Luxora Villa exterior with private pool, Pereybere, Grand Baie, Mauritius"
        />

        {/* Stats strip */}
        <section className="bg-white border-b border-luxury-beige">
          <div className="container mx-auto px-4">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 md:divide-x divide-luxury-beige">
              {stats.map((s) => (
                <li key={s.label} className="flex items-center justify-center gap-3 py-6 px-4">
                  <s.icon className="text-luxury-gold shrink-0" size={26} />
                  <div>
                    <div className="font-serif text-2xl font-bold text-luxury-dark leading-none">{s.value}</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mt-1">{s.label}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Room by room */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={t("Room by room", "Pièce par pièce")}
              title={t("Inside Luxora Villa", "À l'intérieur de Luxora Villa")}
              intro={t(
                "Built recently and finished to a high standard, the villa has the space of a family home and the comforts of a boutique hotel.",
                "Construite récemment et finie avec soin, la villa offre l'espace d'une maison familiale et le confort d'un hôtel boutique.",
              )}
            />
            <div className="space-y-16 sm:space-y-20">
              {rooms.map((r, i) => (
                <article
                  key={r.n}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
                    <img
                      src={r.img.src}
                      alt={r.img.alt}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="w-full h-72 sm:h-96 md:h-[420px] object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                  <div className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`}>
                    <p className="font-serif text-luxury-gold text-5xl font-bold leading-none mb-4">{r.n}</p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-dark mb-4">{r.title}</h3>
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{r.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-14">
              <Link
                to={home as any}
                hash="gallery"
                className="inline-flex items-center rounded-md border-2 border-luxury-gold px-6 py-3 text-sm font-semibold text-luxury-dark hover:bg-luxury-gold hover:text-white transition"
              >
                {t("See all photos in the gallery", "Voir toutes les photos")}
              </Link>
            </div>
          </div>
        </section>

        {/* Amenities grid, same component as the home page */}
        <Features />

        {/* Practical details */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading
              eyebrow={t("Good to know", "Bon à savoir")}
              title={t("Practical details", "Informations pratiques")}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {practical.map((p) => (
                <div key={p.title} className="bg-luxury-beige/60 rounded-xl p-6">
                  <div className="inline-flex p-3 rounded-full bg-white text-luxury-blue shadow-sm mb-4">
                    <p.icon size={22} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-luxury-dark mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section id="quote" className="py-16 sm:py-20 bg-luxury-dark scroll-mt-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
                {t("Book direct", "Réserver en direct")}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
                {t("Ask for your dates", "Demandez vos dates")}
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                {t(
                  "Rates depend on the season and the length of your stay, so every booking is quoted individually. Send your dates and the host replies personally on WhatsApp, usually within the hour.",
                  "Les tarifs dépendent de la saison et de la durée du séjour, chaque réservation fait donc l'objet d'un devis individuel. Envoyez vos dates et l'hôte vous répond personnellement sur WhatsApp, généralement dans l'heure.",
                )}
              </p>
              <ul className="flex flex-wrap gap-3 text-sm">
                <li>
                  <Link to={home as any} hash="availability" className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("Check availability", "Voir les disponibilités")}
                  </Link>
                </li>
                <li>
                  <Link to={localize("/pereybere-villa-rental") as any} className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("About Pereybere", "À propos de Pereybère")}
                  </Link>
                </li>
                <li>
                  <Link to={localize("/grand-baie-villa-with-private-pool") as any} className="inline-block rounded-full bg-white/10 px-4 py-2 hover:bg-white/20">
                    {t("About Grand Baie", "À propos de Grand Baie")}
                  </Link>
                </li>
              </ul>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
