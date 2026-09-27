import { createFileRoute } from "@tanstack/react-router";
import AvailabilityPage from "@/components/pages/AvailabilityPage";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Calendrier des disponibilités | Luxora Villa, Grand Baie, Île Maurice";
const DESCRIPTION =
  "Consultez les disponibilités en temps réel de Luxora Villa, villa 3 chambres avec piscine privée à Pereybère, Grand Baie. Choisissez vos dates et demandez un devis personnalisé.";

export const Route = createFileRoute("/fr/availability")({
  component: AvailabilityPage,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/availability",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Disponibilités",
    }),
});
