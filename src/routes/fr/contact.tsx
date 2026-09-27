import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/components/pages/ContactPage";
import { SITE_URL, landingHead } from "@/components/LandingPage";

const TITLE = "Contact et demande de devis | Luxora Villa, Grand Baie, Île Maurice";
const DESCRIPTION =
  "Obtenez un devis personnalisé pour Luxora Villa à Pereybère, Grand Baie. Envoyez vos dates et le nombre de voyageurs ; l'hôte répond sur WhatsApp, généralement dans l'heure. Tél. +230 5922 6558.";

export const Route = createFileRoute("/fr/contact")({
  component: ContactPage,
  head: () =>
    landingHead({
      lang: "fr",
      path: "/fr/contact",
      title: TITLE,
      description: DESCRIPTION,
      breadcrumb: "Contact",
      extraJsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          inLanguage: "fr",
          name: "Contacter Luxora Villa",
          url: `${SITE_URL}/fr/contact`,
          mainEntity: {
            "@type": "Organization",
            name: "Luxora Villa",
            telephone: "+230-5922-6558",
            url: `${SITE_URL}/fr`,
          },
        },
      ],
    }),
});
