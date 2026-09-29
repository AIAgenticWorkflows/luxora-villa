import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import Reviews from "@/components/Reviews";
import { landingHead } from "@/components/LandingPage";

const TITLE = "Avis des voyageurs, noté 9,3/10 | Luxora Villa, Grand Baie, Île Maurice";
const DESCRIPTION =
  "Lisez les avis vérifiés des voyageurs sur Luxora Villa à Pereybère, Grand Baie. Notée 9,3/10 Exceptionnel sur Booking.com pour la propreté, l'emplacement et l'hôte.";

export const Route = createFileRoute("/fr/reviews")({
  component: Page,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/reviews",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Avis",
    }),
});

function Page() {
  return (
    <SectionPage breadcrumb="Avis" title="Avis des voyageurs sur Luxora Villa">
      <Reviews />
    </SectionPage>
  );
}
