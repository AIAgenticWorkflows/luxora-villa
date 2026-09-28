import { Link } from "@tanstack/react-router";
import { LandingLayout, PageHero, Prose } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";
import SectionLink from "@/components/SectionLink";

export default function PereyberePage() {
  const { t, localize } = useLang();
  return (
    <LandingLayout
      breadcrumb={t("Villa rental in Pereybere", "Location de villa à Pereybère")}
      related={[
        {
          to: "/grand-baie-villa-with-private-pool",
          label: t("Grand Baie villa with private pool", "Villa à Grand Baie avec piscine"),
        },
        { to: "/blog/best-beaches-north-mauritius", label: t("Best beaches in the north", "Plus belles plages du nord") },
      ]}
      hero={
        <PageHero
          eyebrow={t("Pereybere, North Mauritius", "Pereybère, Nord de l'Île Maurice")}
          title={t(
            "Villa rental in Pereybere with private pool",
            "Location de villa à Pereybère avec piscine privée",
          )}
          intro={t(
            "Stay in a quiet residential lane five minutes from Pereybere's turquoise lagoon, in a new 3-bedroom villa with its own pool, jacuzzi and rooftop.",
            "Séjournez dans une rue résidentielle calme à cinq minutes du lagon turquoise de Pereybère, dans une villa neuve de 3 chambres avec piscine, jacuzzi et toit-terrasse.",
          )}
          image="/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp"
          imageAlt="Sunset over the lagoon near Pereybere Beach, North Mauritius"
        />
      }
    >
      <Prose>
        <h2>{t("Why rent a villa in Pereybere?", "Pourquoi louer une villa à Pereybère ?")}</h2>
        <p>
          {t(
            "Pereybere is the small village just north of Grand Baie, and for many visitors it is the best base on the island. Its public beach is one of the most sheltered in Mauritius, with calm, deep water that is good for swimming and snorkelling straight from the sand. The village has its own restaurants, bars, a supermarket and a bus stop, yet it stays quieter than Grand Baie in the evenings.",
            "Pereybère est le petit village juste au nord de Grand Baie, et pour beaucoup de visiteurs c'est le meilleur point de chute de l'île. Sa plage publique est l'une des plus abritées de Maurice, avec une eau calme et profonde idéale pour la baignade et le snorkeling depuis le sable. Le village a ses propres restaurants, bars, un supermarché et un arrêt de bus, tout en restant plus calme que Grand Baie le soir.",
          )}
        </p>
        <p>
          {t(
            "Renting a villa rather than a hotel room gives you a private pool, your own kitchen, space for a family or two couples, and a far lower cost per person for a week or more. Luxora Villa was built recently and is rated 9.3/10 by verified guests.",
            "Louer une villa plutôt qu'une chambre d'hôtel vous offre une piscine privée, votre propre cuisine, de la place pour une famille ou deux couples, et un coût par personne bien plus bas pour une semaine ou plus. Luxora Villa a été construite récemment et est notée 9,3/10 par des voyageurs vérifiés.",
          )}
        </p>

        <h2>{t("What is nearby", "À proximité")}</h2>
        <ul>
          <li>{t("Pereybere Beach: 5 minutes by car, about 20 minutes on foot", "Plage de Pereybère : 5 minutes en voiture, environ 20 minutes à pied")}</li>
          <li>{t("Grand Baie village, restaurants and shopping: 5 to 7 minutes", "Village de Grand Baie, restaurants et boutiques : 5 à 7 minutes")}</li>
          <li>{t("Mont Choisy and Trou aux Biches beaches: 10 to 15 minutes", "Plages de Mont Choisy et Trou aux Biches : 10 à 15 minutes")}</li>
          <li>{t("Cap Malheureux and its red-roofed church: 10 minutes", "Cap Malheureux et son église au toit rouge : 10 minutes")}</li>
          <li>{t("Catamaran trips to the northern islets: depart from Grand Baie", "Excursions en catamaran vers les îles du Nord : départ de Grand Baie")}</li>
          <li>{t("SSR International Airport: about 75 minutes by car", "Aéroport international SSR : environ 75 minutes en voiture")}</li>
        </ul>

        <h2>{t("The villa", "La villa")}</h2>
        <p>
          {t(
            "Three air-conditioned bedrooms sleeping six, two bathrooms with a spa jacuzzi, a fully equipped kitchen, fibre WiFi, Smart TV, a private pool with loungers, a rooftop terrace and two secure parking spaces.",
            "Trois chambres climatisées pour six personnes, deux salles de bain avec jacuzzi, une cuisine entièrement équipée, WiFi fibre, Smart TV, une piscine privée avec transats, un toit-terrasse et deux places de parking sécurisées.",
          )}{" "}
          <SectionLink id="gallery">{t("See all photos of the villa.", "Voir toutes les photos de la villa.")}</SectionLink>
        </p>

        <h2>{t("How to book", "Comment réserver")}</h2>
        <p>
          {t(
            "Rates vary with the season and the length of your stay, so we quote each booking individually. Use the form on this page or message us on WhatsApp with your dates and the number of guests; you will get a personalised quote from the host, usually within the hour. You can also check live availability first.",
            "Les tarifs varient selon la saison et la durée du séjour, chaque réservation fait donc l'objet d'un devis personnalisé. Utilisez le formulaire de cette page ou écrivez-nous sur WhatsApp avec vos dates et le nombre de voyageurs ; l'hôte vous répond généralement dans l'heure. Vous pouvez aussi consulter les disponibilités en temps réel.",
          )}{" "}
          <Link to={localize("/availability") as any}>
            {t("Check availability", "Voir les disponibilités")}
          </Link>
          .
        </p>
      </Prose>
    </LandingLayout>
  );
}
