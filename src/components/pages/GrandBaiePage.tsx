import { Link } from "@tanstack/react-router";
import { LandingLayout, PageHero, Prose } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";
import SectionLink from "@/components/SectionLink";

export default function GrandBaiePage() {
  const { t, localize } = useLang();
  return (
    <LandingLayout
      breadcrumb={t("Grand Baie villa with private pool", "Villa à Grand Baie avec piscine privée")}
      related={[
        { to: "/pereybere-villa-rental", label: t("Villa rental in Pereybere", "Location à Pereybère") },
        { to: "/blog/things-to-do-in-grand-baie-mauritius", label: t("Things to do in Grand Baie", "Que faire à Grand Baie") },
      ]}
      hero={
        <PageHero
          eyebrow={t("Grand Baie, Mauritius", "Grand Baie, Île Maurice")}
          title={t(
            "A Grand Baie villa with its own private pool",
            "Une villa à Grand Baie avec sa propre piscine privée",
          )}
          intro={t(
            "Skip the shared hotel pool. Luxora Villa gives you a private pool, three bedrooms and a rooftop terrace, minutes from Grand Baie's beaches, restaurants and nightlife.",
            "Oubliez la piscine partagée de l'hôtel. Luxora Villa vous offre une piscine privée, trois chambres et un toit-terrasse, à quelques minutes des plages, restaurants et de la vie nocturne de Grand Baie.",
          )}
          image="/lovable-uploads/abb57903-7d11-459c-9ffe-7005a3f030b6.webp"
          imageAlt="Private swimming pool at Luxora Villa, Grand Baie, Mauritius"
        />
      }
    >
      <Prose>
        <h2>{t("Private pool villas in Grand Baie", "Villas avec piscine privée à Grand Baie")}</h2>
        <p>
          {t(
            "Grand Baie is the liveliest resort town in Mauritius, with the island's best selection of restaurants, bars, boutiques and boat trips. Most accommodation here is in hotels and apartment blocks with shared pools. A villa with a private pool is rarer, and it changes the holiday: swim whenever you like, let the children play without crowds, and have dinner by the water with nobody else around.",
            "Grand Baie est la station balnéaire la plus animée de l'Île Maurice, avec le meilleur choix de restaurants, bars, boutiques et sorties en mer de l'île. La plupart des hébergements sont des hôtels et résidences avec piscines partagées. Une villa avec piscine privée est plus rare, et cela change les vacances : nagez quand vous voulez, laissez les enfants jouer sans la foule, et dînez au bord de l'eau en toute intimité.",
          )}
        </p>
        <p>
          {t(
            "Luxora Villa sits in Pereybere, the quiet northern edge of Grand Baie, about five minutes by car from the centre. You get the calm of a residential lane and the town on your doorstep.",
            "Luxora Villa se trouve à Pereybère, la partie nord et calme de Grand Baie, à environ cinq minutes en voiture du centre. Vous profitez du calme d'une rue résidentielle avec la ville à portée de main.",
          )}
        </p>

        <h2>{t("What you get", "Ce que vous obtenez")}</h2>
        <ul>
          <li>{t("Private swimming pool with sun loungers and outdoor dining", "Piscine privée avec transats et coin repas extérieur")}</li>
          <li>{t("3 air-conditioned bedrooms, sleeps 6", "3 chambres climatisées, jusqu'à 6 personnes")}</li>
          <li>{t("2 bathrooms including a spa jacuzzi", "2 salles de bain dont un jacuzzi")}</li>
          <li>{t("Rooftop terrace with sunset views", "Toit-terrasse avec vue sur le coucher du soleil")}</li>
          <li>{t("Full kitchen, WiFi, Smart TV with Netflix", "Cuisine complète, WiFi, Smart TV avec Netflix")}</li>
          <li>{t("Two secure parking spaces behind the gate", "Deux places de parking sécurisées derrière le portail")}</li>
          <li>{t("Welcome tray and a host who lives nearby", "Plateau de bienvenue et un hôte qui habite à proximité")}</li>
        </ul>
        <p>
          <SectionLink id="gallery">{t("See all photos of the villa.", "Voir toutes les photos de la villa.")}</SectionLink>
        </p>

        <h2>{t("Beaches and things to do", "Plages et activités")}</h2>
        <p>
          {t(
            "Grand Baie public beach and La Cuvette are 5 to 7 minutes away; Pereybere Beach, Mont Choisy and Trou aux Biches are within 15 minutes. Catamaran cruises to Gabriel and Flat Island, the Grand Baie Bazaar, Super U and the Sunset Boulevard shops are all a short drive. For a full list, read our guide to",
            "La plage publique de Grand Baie et La Cuvette sont à 5 à 7 minutes ; les plages de Pereybère, Mont Choisy et Trou aux Biches à moins de 15 minutes. Les croisières en catamaran vers l'île Gabriel et l'île Plate, le Bazar de Grand Baie, Super U et les boutiques de Sunset Boulevard sont à quelques minutes en voiture. Pour la liste complète, lisez notre guide",
          )}{" "}
          <Link to="/blog/$slug" params={{ slug: "things-to-do-in-grand-baie-mauritius" }}>
            {t("25 things to do in Grand Baie", "25 choses à faire à Grand Baie")}
          </Link>
          .
        </p>

        <h2>{t("Booking direct", "Réserver en direct")}</h2>
        <p>
          {t(
            "We quote every stay individually because rates depend on the dates and the length of your stay. Send your dates through the form on this page or on WhatsApp and the host will reply with a personalised quote. Luxora Villa is also listed on Booking.com if you prefer to book there.",
            "Chaque séjour fait l'objet d'un devis individuel car les tarifs dépendent des dates et de la durée du séjour. Envoyez vos dates via le formulaire de cette page ou sur WhatsApp et l'hôte vous répondra avec un devis personnalisé. Luxora Villa est aussi sur Booking.com si vous préférez réserver là-bas.",
          )}
        </p>
      </Prose>
    </LandingLayout>
  );
}
