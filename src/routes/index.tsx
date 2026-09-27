import { createFileRoute } from "@tanstack/react-router";
import HomePage from "@/components/HomePage";
import { faqs } from "@/components/FAQ";

const SITE_URL = "https://www.luxoravilla.com";
const TITLE = "Luxury Private Pool Villa Mauritius | Luxora Villa Grand Baie";
const DESCRIPTION =
  "Luxora Villa is the ultimate luxury private pool villa in Mauritius. Book this exceptional 3-bedroom holiday villa in Grand Baie, Pereybere. Top-rated 9.3/10. Save by booking direct!";
const HERO_IMAGE = `${SITE_URL}/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png`;

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "villa mauritius, villas in mauritius, luxury villa mauritius, private pool villa mauritius, villa in grand baie, villas in grand baie, villa in north mauritius, luxury villas mauritius, villa rental mauritius, villa pereybere, holiday villa mauritius, mauritius villa with pool",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "597" },
      {
        property: "og:image:alt",
        content: "Luxora Villa, a luxury villa with private pool in Grand Baie, Mauritius",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:locale:alternate", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "MU" },
      { name: "geo.placename", content: "Grand Baie, Pereybere, Mauritius" },
      { name: "geo.position", content: "-20.003798;57.607427" },
      { name: "ICBM", content: "-20.003798, 57.607427" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "en-gb", href: `${SITE_URL}/` },
      { rel: "alternate", hrefLang: "fr", href: `${SITE_URL}/fr` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VacationRental",
          "@id": `${SITE_URL}/#villa`,
          name: "Luxora Villa, Luxury Villa in Grand Baie, Mauritius",
          description:
            "Luxora Villa is a premium 3-bedroom luxury villa with private pool located in Pereybere, Grand Baie, in the north of Mauritius. Near Grand Baie beaches, restaurants and shops. Features jacuzzi, rooftop terrace, Wi-Fi and air conditioning. Perfect for families and couples seeking a holiday villa rental in Mauritius.",
          brand: "Luxora Villa",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pereybere",
            addressRegion: "Grand Baie, North Mauritius",
            addressCountry: "MU",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -20.003798,
            longitude: 57.607427,
          },
          url: `${SITE_URL}/`,
          telephone: "+230-5922-6558",
          numberOfRooms: 3,
          numberOfBathroomsTotal: 2,
          occupancy: { "@type": "QuantitativeValue", value: 6 },
          petsAllowed: false,
          amenityFeature: [
            "Private Pool",
            "Jacuzzi",
            "Rooftop Terrace",
            "WiFi",
            "Air Conditioning",
            "Fully Equipped Kitchen",
            "Smart TV",
            "Google Home",
            "Free Parking",
            "Beach Proximity",
          ].map((n) => ({
            "@type": "LocationFeatureSpecification",
            name: n,
            value: true,
          })),
          image: [HERO_IMAGE],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "9.3",
            bestRating: "10",
            worstRating: "1",
            ratingCount: "8",
            reviewCount: "8",
          },
          checkinTime: "14:00",
          checkoutTime: "10:00",
          sameAs: [
            "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html",
          ],
          containedInPlace: {
            "@type": "Place",
            name: "Pereybere, Grand Baie, North Mauritius",
          },
          tourBookingPage:
            "https://www.booking.com/hotel/mu/3-bedrooms-villa-in-pereybere.en-gb.html",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          ],
        }),
      },
    ],
  }),
});
