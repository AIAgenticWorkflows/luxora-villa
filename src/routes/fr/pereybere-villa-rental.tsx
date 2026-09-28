import { createFileRoute } from "@tanstack/react-router";
import PereyberePage from "@/components/pages/PereyberePage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Location de villa à Pereybère, Île Maurice | Piscine privée, 6 personnes | Luxora Villa";
const DESCRIPTION =
  "Louez une villa privée à Pereybère, nord de l'Île Maurice : 3 chambres, piscine privée, jacuzzi et toit-terrasse, à 5 minutes de la plage de Pereybère et de Grand Baie. Réservez en direct avec le propriétaire.";

export const Route = createFileRoute("/fr/pereybere-villa-rental")({
  component: PereyberePage,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/pereybere-villa-rental",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Location de villa à Pereybère",
      image: "https://www.luxoravilla.com/lovable-uploads/17d507de-ba3a-4058-abe3-c10f9cde1650.webp",
    }),
});
