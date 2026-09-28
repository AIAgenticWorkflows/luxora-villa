import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";
import { useLang } from "@/i18n/LanguageContext";

export const SITE_URL = "https://www.luxoravilla.com";
export const HERO_IMAGE_PNG = `${SITE_URL}/lovable-uploads/8b20f933-58f6-481b-a4ee-3858f9644d8b.png`;

/** Shared head() builder for landing pages: title, description, OG, canonical, breadcrumb. */
export function landingHead(opts: {
  path: string;
  title: string;
  description: string;
  image?: string;
  breadcrumb: string;
  extraJsonLd?: object[];
  /** "fr" for the French version of a page; the English path is derived by stripping /fr. */
  lang?: "en" | "fr";
}) {
  const lang = opts.lang ?? "en";
  const url = `${SITE_URL}${opts.path}`;
  const enPath = lang === "fr" ? opts.path.replace(/^\/fr/, "") || "/" : opts.path;
  const frPath = enPath === "/" ? "/fr" : `/fr${enPath}`;
  const image = opts.image ?? HERO_IMAGE_PNG;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
      { property: "og:locale:alternate", content: lang === "fr" ? "en_US" : "fr_FR" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: image },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${enPath}` },
      { rel: "alternate", hrefLang: "fr", href: `${SITE_URL}${frPath}` },
      { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}${enPath}` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: lang === "fr" ? "Accueil" : "Home",
              item: `${SITE_URL}${lang === "fr" ? "/fr" : "/"}`,
            },
            { "@type": "ListItem", position: 2, name: opts.breadcrumb, item: url },
          ],
        }),
      },
      ...(opts.extraJsonLd ?? []).map((obj) => ({
        type: "application/ld+json",
        children: JSON.stringify(obj),
      })),
    ],
  };
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <header className="relative min-h-[60vh] flex items-end">
      <img
        src={image}
        alt={imageAlt}
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/40 to-luxury-dark/20" />
      <div className="relative container mx-auto px-4 pb-14 pt-32 text-white">
        <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/90">{intro}</p>
      </div>
    </header>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="landing-prose text-gray-700 text-base sm:text-lg leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl sm:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-luxury-dark [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-luxury-dark [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-luxury-blue [&_a]:underline [&_strong]:text-luxury-dark">
      {children}
    </div>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  const { t, home } = useLang();
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link to={home as any} className="hover:text-luxury-gold">
            {t("Home", "Accueil")}
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li className="text-luxury-dark font-medium" aria-current="page">
          {current}
        </li>
      </ol>
    </nav>
  );
}

/** Two-column body: long-form content on the left, sticky quote form on the right. */
export function LandingLayout({
  hero,
  breadcrumb,
  children,
  related,
}: {
  hero: ReactNode;
  breadcrumb: string;
  children: ReactNode;
  related?: { to: string; label: string }[];
}) {
  const { t, localize } = useLang();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {hero}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2">
              <Breadcrumbs current={breadcrumb} />
              {children}
              {related && related.length > 0 && (
                <aside className="mt-12 rounded-xl bg-luxury-beige p-6">
                  <h2 className="font-serif text-xl font-bold text-luxury-dark mb-3">
                    {t("Explore more", "Découvrir aussi")}
                  </h2>
                  <ul className="flex flex-wrap gap-3">
                    {related.map((r) => (
                      <li key={r.to}>
                        <Link
                          to={localize(r.to) as any}
                          className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-luxury-dark shadow-sm hover:text-luxury-gold"
                        >
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              )}
            </article>
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
