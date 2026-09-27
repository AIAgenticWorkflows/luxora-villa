import { createFileRoute } from "@tanstack/react-router";
import VillaPage from "@/components/pages/VillaPage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "La Villa : 3 chambres, piscine privée, jacuzzi et toit-terrasse | Luxora Villa Île Maurice";
const DESCRIPTION =
  "Visitez Luxora Villa pièce par pièce : 3 chambres climatisées pour 6 personnes, 2 salles de bain avec jacuzzi, piscine privée, toit-terrasse, cuisine équipée et parking sécurisé à Pereybère, Grand Baie.";

export const Route = createFileRoute("/fr/villa")({
  component: VillaPage,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/villa",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "La Villa",
    }),
});
