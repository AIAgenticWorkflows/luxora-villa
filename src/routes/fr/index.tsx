import { createFileRoute } from "@tanstack/react-router";
import { galleryImages } from "@/data/galleryData";
import HomePage from "@/components/HomePage";
import { faqsFr } from "@/components/FAQ";

const SITE_URL = "https://www.luxoravilla.com";
const TITLE = "Villa de luxe avec piscine privée à l'Île Maurice | Luxora Villa Grand Baie";
const DESCRIPTION =
  "Luxora Villa : villa de luxe 3 chambres avec piscine privée, jacuzzi et toit-terrasse à Pereybère, Grand Baie, nord de l'Île Maurice. Notée 9,3/10. Demandez votre devis en direct.";
const HERO_IMAGE = `${SITE_URL}/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png`;
const SCHEMA_IMAGES = galleryImages.slice(0, 10).map((g) => `${SITE_URL}${g.src}`);

export const Route = createFileRoute("/fr/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/fr` },
      { property: "og:image", content: HERO_IMAGE },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1280" },
      { property: "og:image:height", content: "597" },
      {
        property: "og:image:alt",
        content: "Luxora Villa, villa de luxe avec piscine privée à Grand Baie, Île Maurice",
      },
      { property: "og:locale", content: "fr_FR" },
      { property: "og:locale:alternate", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: HERO_IMAGE },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "MU" },
      { name: "geo.placename", content: "Grand Baie, Pereybère, Île Maurice" },
      { name: "geo.position", content: "-20.003798;57.607427" },
      { name: "ICBM", content: "-20.003798, 57.607427" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/fr` },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/` },
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
          name: "Luxora Villa, villa de luxe à Grand Baie, Île Maurice",
          description:
            "Luxora Villa est une villa de luxe de 3 chambres avec piscine privée située à Pereybère, Grand Baie, dans le nord de l'Île Maurice. Jacuzzi, toit-terrasse, WiFi et climatisation, à quelques minutes des plages et restaurants de Grand Baie.",
          inLanguage: "fr",
          brand: "Luxora Villa",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pereybère",
            addressRegion: "Grand Baie, Nord de l'Île Maurice",
            addressCountry: "MU",
          },
          geo: { "@type": "GeoCoordinates", latitude: -20.003798, longitude: 57.607427 },
          url: `${SITE_URL}/fr`,
          telephone: "+230-5922-6558",
          identifier: "luxora-villa-pereybere",
          additionalType: "https://schema.org/House",
          numberOfRooms: 3,
          numberOfBathroomsTotal: 2,
          occupancy: { "@type": "QuantitativeValue", value: 6 },
          petsAllowed: false,
          containsPlace: {
            "@type": "Accommodation",
            additionalType: "https://schema.org/House",
            name: "Luxora Villa",
            numberOfBedrooms: 3,
            numberOfBathroomsTotal: 2,
            occupancy: { "@type": "QuantitativeValue", value: 6 },
            bed: [
              { "@type": "BedDetails", numberOfBeds: 1, typeOfBed: "King" },
              { "@type": "BedDetails", numberOfBeds: 2, typeOfBed: "Queen" },
            ],
            amenityFeature: [
              "Private Pool",
              "Jacuzzi",
              "Rooftop Terrace",
              "WiFi",
              "Air Conditioning",
              "Fully Equipped Kitchen",
              "Smart TV",
              "Free Parking",
            ].map((n) => ({ "@type": "LocationFeatureSpecification", name: n, value: true })),
          },
          checkinTime: "14:00",
          checkoutTime: "10:00",
          image: SCHEMA_IMAGES,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "9.3",
            bestRating: "10",
            worstRating: "1",
            ratingCount: "8",
            reviewCount: "8",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: "fr",
          mainEntity: faqsFr.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});
