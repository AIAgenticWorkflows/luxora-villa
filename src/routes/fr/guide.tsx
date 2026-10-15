import { createFileRoute } from "@tanstack/react-router";
import GuestGuide from "@/components/guide/GuestGuide";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Guide des voyageurs : Pereybère et Grand Baie | Luxora Villa";
const DESCRIPTION =
  "Le guide des voyageurs de Luxora Villa : arrivée, la villa, numéros d'urgence, supermarchés, plages, restaurants et activités autour de Pereybère et Grand Baie.";

export const Route = createFileRoute("/fr/guide")({
  component: GuestGuide,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/guide",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Guide des voyageurs",
    }),
});
