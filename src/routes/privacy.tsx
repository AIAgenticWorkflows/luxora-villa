import { createFileRoute } from "@tanstack/react-router";
import SectionPage from "@/components/pages/SectionPage";
import { landingHead } from "@/components/LandingPage";
import { useLang } from "@/i18n/LanguageContext";

const TITLE = "Privacy Policy | Luxora Villa, Grand Baie";
const DESCRIPTION = "How Luxora Villa handles the personal details you share when you enquire, book or follow us on social media.";

export const Route = createFileRoute("/privacy")({
  component: Page,
  head: () => landingHead({ path: "/privacy", title: TITLE, description: DESCRIPTION, breadcrumb: "Privacy" }),
});

function Page() {
  const { t } = useLang();
  return (
    <SectionPage breadcrumb={t("Privacy", "Confidentialité")} title={t("Privacy policy", "Politique de confidentialité")}>
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral">
          <h2>{t("Privacy policy", "Politique de confidentialité")}</h2>
          <p>
            {t(
              "Luxora Villa is a privately owned holiday villa in Pereybere, Grand Baie, Mauritius. This page explains what we do with the personal details you give us.",
              "Luxora Villa est une villa de vacances privée à Pereybere, Grand Baie, île Maurice. Cette page explique ce que nous faisons des informations personnelles que vous nous confiez.",
            )}
          </p>
          <h3>{t("What we collect", "Ce que nous collectons")}</h3>
          <p>
            {t(
              "When you request a quote or book, we collect your name, contact details (email, phone or WhatsApp number), travel dates, party size and anything you choose to tell us about your stay. If you message us on WhatsApp, Facebook or Instagram, we see what you send through those services.",
              "Lorsque vous demandez un devis ou réservez, nous collectons votre nom, vos coordonnées (email, téléphone ou numéro WhatsApp), vos dates de voyage, le nombre de voyageurs et ce que vous choisissez de nous dire sur votre séjour. Si vous nous écrivez sur WhatsApp, Facebook ou Instagram, nous voyons ce que vous envoyez via ces services.",
            )}
          </p>
          <h3>{t("How we use it", "Comment nous l'utilisons")}</h3>
          <p>
            {t(
              "Only to answer your enquiry, prepare your quote, manage your booking and welcome you at the villa. We do not sell your details and we do not send marketing emails unless you ask for them.",
              "Uniquement pour répondre à votre demande, préparer votre devis, gérer votre réservation et vous accueillir à la villa. Nous ne vendons pas vos données et n'envoyons pas d'emails marketing sans votre accord.",
            )}
          </p>
          <h3>{t("Social media", "Réseaux sociaux")}</h3>
          <p>
            {t(
              "We publish posts about the villa on our own Facebook Page using Meta's official tools. Those tools do not give us access to your Facebook account or personal data. Anything you post or share on Facebook is governed by Meta's own privacy policy.",
              "Nous publions des posts sur la villa sur notre propre page Facebook à l'aide des outils officiels de Meta. Ces outils ne nous donnent aucun accès à votre compte Facebook ni à vos données personnelles. Ce que vous publiez ou partagez sur Facebook relève de la politique de confidentialité de Meta.",
            )}
          </p>
          <h3>{t("Cookies and analytics", "Cookies et statistiques")}</h3>
          <p>
            {t(
              "This website uses cookies only with your consent, to understand which pages are useful. You can change your choice at any time from the cookie banner.",
              "Ce site utilise des cookies uniquement avec votre accord, pour comprendre quelles pages sont utiles. Vous pouvez modifier votre choix à tout moment depuis la bannière de cookies.",
            )}
          </p>
          <h3>{t("Keeping and deleting your details", "Conservation et suppression")}</h3>
          <p>
            {t(
              "We keep enquiry and booking details for as long as needed to host you and to meet legal and accounting obligations. Ask us at any time to see, correct or delete what we hold about you, and we will do so within 30 days.",
              "Nous conservons les demandes et réservations le temps nécessaire pour vous accueillir et respecter nos obligations légales et comptables. Vous pouvez à tout moment demander à consulter, corriger ou supprimer vos données ; nous le faisons sous 30 jours.",
            )}
          </p>
          <h3>{t("Contact", "Contact")}</h3>
          <p>
            {t("For any question about your data, message us on WhatsApp at +230 5922 6558 or use the contact page.", "Pour toute question sur vos données, écrivez-nous sur WhatsApp au +230 5922 6558 ou via la page contact.")}
          </p>
        </div>
      </section>
    </SectionPage>
  );
}
