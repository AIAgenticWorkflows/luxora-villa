import { createFileRoute, Link } from "@tanstack/react-router";
import { LandingLayout, PageHero, Prose, landingHead } from "@/components/LandingPage";
import { galleryImages } from "@/data/galleryData";
import { useLang } from "@/i18n/LanguageContext";

const TITLE = "The Villa: 3 Bedrooms, Private Pool, Jacuzzi & Rooftop | Luxora Villa Mauritius";
const DESCRIPTION =
  "Tour Luxora Villa room by room: 3 air-conditioned bedrooms sleeping 6, 2 bathrooms with spa jacuzzi, private pool, rooftop terrace, full kitchen and secure parking in Pereybere, Grand Baie.";

export const Route = createFileRoute("/villa")({
  component: VillaPage,
  head: () =>
    landingHead({
      path: "/villa",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "The Villa",
    }),
});

function VillaPage() {
  const { t } = useLang();
  const rooms = [
    {
      img: galleryImages.find((g) => g.id === 11) ?? galleryImages[0],
      title: t("Private pool and sun terrace", "Piscine privée et terrasse"),
      body: t(
        "A private swimming pool with sun loungers, an outdoor dining table and a shaded lounge, enclosed by the villa's garden wall so it is entirely yours. The living room and master bedroom open straight onto the pool deck.",
        "Une piscine privée avec transats, une table à manger extérieure et un salon ombragé, entourée du mur du jardin pour une intimité totale. Le salon et la chambre principale s'ouvrent directement sur la terrasse de la piscine.",
      ),
    },
    {
      img: galleryImages.find((g) => g.src.includes("b20acf9f")) ?? galleryImages[0],
      title: t("Open-plan living and dining", "Salon et salle à manger ouverts"),
      body: t(
        "A large air-conditioned living room with a corner sofa, Smart TV with Netflix, Google Home and a glass dining table for six, flowing to the pool through sliding doors.",
        "Un grand salon climatisé avec canapé d'angle, Smart TV avec Netflix, Google Home et une table en verre pour six personnes, ouvert sur la piscine par des baies coulissantes.",
      ),
    },
    {
      img: galleryImages.find((g) => g.src.includes("8d3df2d7")) ?? galleryImages[0],
      title: t("Three air-conditioned bedrooms", "Trois chambres climatisées"),
      body: t(
        "The master bedroom has a king-size bed, fitted wardrobes and direct pool access. Two further bedrooms with quality linen and blackout curtains make the villa ideal for a family of six or two couples.",
        "La chambre principale dispose d'un lit king-size, de placards intégrés et d'un accès direct à la piscine. Deux autres chambres avec linge de qualité et rideaux occultants rendent la villa idéale pour une famille de six ou deux couples.",
      ),
    },
    {
      img: galleryImages.find((g) => g.src.includes("0a540aea")) ?? galleryImages[0],
      title: t("Two bathrooms with spa jacuzzi", "Deux salles de bain avec jacuzzi"),
      body: t(
        "Modern tiled bathrooms with rain showers, twin basins and a spa jacuzzi bath to soak in after a day on the lagoon.",
        "Des salles de bain modernes carrelées avec douches à effet pluie, double vasque et une baignoire jacuzzi pour se détendre après une journée au lagon.",
      ),
    },
    {
      img: galleryImages.find((g) => g.src.includes("77624a5a")) ?? galleryImages[0],
      title: t("Fully equipped kitchen", "Cuisine entièrement équipée"),
      body: t(
        "Oven, gas hob, extractor, large fridge-freezer, dishwasher, Nespresso machine, toaster, kettle and everything you need to cook, plus a welcome tray on arrival.",
        "Four, plaques à gaz, hotte, grand réfrigérateur-congélateur, lave-vaisselle, machine Nespresso, grille-pain, bouilloire et tout le nécessaire pour cuisiner, avec un plateau de bienvenue à l'arrivée.",
      ),
    },
    {
      img: galleryImages.find((g) => g.src.includes("e3a75e0b")) ?? galleryImages[0],
      title: t("Rooftop terrace, garden and parking", "Toit-terrasse, jardin et parking"),
      body: t(
        "A private rooftop with views over Pereybere for sunset drinks, a landscaped tropical garden with palms and stone paving, and two secure parking spaces inside the gate.",
        "Un toit-terrasse privé avec vue sur Pereybère pour l'apéritif au coucher du soleil, un jardin tropical paysagé avec palmiers et dallage en pierre, et deux places de parking sécurisées à l'intérieur du portail.",
      ),
    },
  ];

  return (
    <LandingLayout
      breadcrumb={t("The Villa", "La Villa")}
      related={[
        { to: "/pereybere-villa-rental", label: t("Villa rental in Pereybere", "Location à Pereybère") },
        {
          to: "/grand-baie-villa-with-private-pool",
          label: t("Grand Baie villa with private pool", "Villa à Grand Baie avec piscine"),
        },
        { to: "/contact", label: t("Contact and quote", "Contact et devis") },
      ]}
      hero={
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
      }
    >
      <Prose>
        <h2>{t("Luxora Villa at a glance", "Luxora Villa en bref")}</h2>
        <ul>
          <li>{t("3 bedrooms, sleeps up to 6 guests", "3 chambres, jusqu'à 6 personnes")}</li>
          <li>{t("2 bathrooms, one with a spa jacuzzi bath", "2 salles de bain, dont une avec baignoire jacuzzi")}</li>
          <li>{t("Private swimming pool with sun loungers", "Piscine privée avec transats")}</li>
          <li>{t("Rooftop terrace with sunset views", "Toit-terrasse avec vue sur le coucher du soleil")}</li>
          <li>{t("Air conditioning in every bedroom and the living room", "Climatisation dans chaque chambre et le salon")}</li>
          <li>{t("Fibre WiFi, Smart TV with Netflix, Google Home", "WiFi fibre, Smart TV avec Netflix, Google Home")}</li>
          <li>{t("Two secure parking spaces inside the property", "Deux places de parking sécurisées sur la propriété")}</li>
          <li>{t("5 minutes to Pereybere Beach and Grand Baie village", "5 minutes de la plage de Pereybère et du village de Grand Baie")}</li>
        </ul>
        <p>
          {t(
            "Check-in from 14:00, check-out by 10:00. Airport transfers, a cot and early or late arrivals can all be arranged with the host.",
            "Arrivée à partir de 14h, départ avant 10h. Transferts aéroport, lit bébé et arrivées anticipées ou tardives peuvent être organisés avec l'hôte.",
          )}
        </p>
      </Prose>

      <div className="mt-10 space-y-10">
        {rooms.map((r, i) => (
          <section
            key={r.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <img
              src={r.img.src}
              alt={r.img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="rounded-xl shadow-md w-full h-64 md:h-72 object-cover"
            />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-dark mb-2">
                {r.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{r.body}</p>
            </div>
          </section>
        ))}
      </div>

      <Prose>
        <h2>{t("See the full gallery", "Voir toute la galerie")}</h2>
        <p>
          {t("Browse all photos of the villa on the", "Retrouvez toutes les photos de la villa sur la")}{" "}
          <Link to="/" hash="gallery">
            {t("home page gallery", "galerie de la page d'accueil")}
          </Link>{" "}
          {t("or check", "ou consultez")}{" "}
          <Link to="/" hash="availability">
            {t("live availability", "les disponibilités en temps réel")}
          </Link>
          .
        </p>
      </Prose>
    </LandingLayout>
  );
}
