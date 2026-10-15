import { blogPosts, type BlogPost } from "@/data/blogData";

export const SITE_URL = "https://www.luxoravilla.com";
const LOGO = `${SITE_URL}/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.webp`;
const OG_IMAGE = `${SITE_URL}/lovable-uploads/villa-garden-balcony-og.jpg`;

type Lang = "en" | "fr";

/** "/blog" or "/fr/blog", with an optional article slug. */
export function blogPath(lang: Lang, slug?: string) {
  const base = lang === "fr" ? "/fr/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}

/** English and French addresses of a blog page, for canonical and hreflang links. */
function alternates(lang: Lang, slug?: string) {
  const en = `${SITE_URL}${blogPath("en", slug)}`;
  const fr = `${SITE_URL}${blogPath("fr", slug)}`;
  return [
    { rel: "canonical", href: lang === "fr" ? fr : en },
    { rel: "alternate", hrefLang: "en", href: en },
    { rel: "alternate", hrefLang: "fr", href: fr },
    { rel: "alternate", hrefLang: "x-default", href: en },
  ];
}

const INDEX_TEXT = {
  en: {
    title: "Mauritius Travel Blog | Luxora Villa",
    description:
      "Local tips for tourists in Mauritius: best beaches in the north, things to do in Grand Baie, day trips, food and travel planning by the Luxora Villa team.",
    name: "Luxora Villa Mauritius Blog",
    home: "Home",
  },
  fr: {
    title: "Blog voyage Île Maurice : plages, Grand Baie, conseils | Luxora Villa",
    description:
      "Conseils locaux pour vos vacances à l'Île Maurice : plus belles plages du nord, que faire à Grand Baie, excursions, gastronomie et location de villa, par l'équipe Luxora Villa.",
    name: "Blog Luxora Villa Île Maurice",
    home: "Accueil",
  },
} as const;

/** Text of an article in the requested language, falling back to English. */
export function postText(post: BlogPost, lang: Lang) {
  const fr = lang === "fr";
  return {
    title: (fr && post.titleFr) || post.title,
    description: (fr && post.descriptionFr) || post.description,
  };
}

export function blogIndexHead(lang: Lang) {
  const t = INDEX_TEXT[lang];
  const url = `${SITE_URL}${blogPath(lang)}`;
  return {
    meta: [
      { title: t.title },
      { name: "description", content: t.description },
      { property: "og:title", content: t.title },
      { property: "og:description", content: t.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: t.title },
      { name: "twitter:description", content: t.description },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: alternates(lang),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: t.name,
          url,
          inLanguage: lang,
          description: t.description,
          blogPost: blogPosts.map((p) => {
            const pt = postText(p, lang);
            return {
              "@type": "BlogPosting",
              headline: pt.title,
              description: pt.description,
              datePublished: p.datePublished,
              dateModified: p.dateUpdated,
              url: `${SITE_URL}${blogPath(lang, p.slug)}`,
              image: `${SITE_URL}${p.image}`,
              author: { "@type": "Organization", name: "Luxora Villa" },
            };
          }),
        }),
      },
    ],
  };
}

export function blogPostHead(post: BlogPost | undefined, lang: Lang) {
  if (!post) {
    return {
      meta: [
        { title: lang === "fr" ? "Article introuvable | Luxora Villa" : "Article not found | Luxora Villa" },
        { name: "robots", content: "noindex" },
      ],
    };
  }
  const { title, description } = postText(post, lang);
  const url = `${SITE_URL}${blogPath(lang, post.slug)}`;
  const img = `${SITE_URL}${post.image}`;
  const home = lang === "fr" ? `${SITE_URL}/fr` : `${SITE_URL}/`;
  const faq = (post.faq ?? []).map((f) => ({
    q: (lang === "fr" && f.qFr) || f.q,
    a: (lang === "fr" && f.aFr) || f.a,
  }));

  return {
    meta: [
      { title: `${title} | Luxora Villa` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "fr" ? "fr_FR" : "en_US" },
      { property: "og:image", content: img },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: img },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "article:published_time", content: post.datePublished },
      { name: "article:modified_time", content: post.dateUpdated },
    ],
    links: alternates(lang, post.slug),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description,
          inLanguage: lang,
          image: img,
          datePublished: post.datePublished,
          dateModified: post.dateUpdated,
          author: { "@type": "Organization", name: "Luxora Villa" },
          publisher: {
            "@type": "Organization",
            name: "Luxora Villa",
            logo: { "@type": "ImageObject", url: LOGO },
          },
          mainEntityOfPage: url,
        }),
      },
      ...(faq.length
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                inLanguage: lang,
                mainEntity: faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            },
          ]
        : []),
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: INDEX_TEXT[lang].home, item: home },
            { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}${blogPath(lang)}` },
            { "@type": "ListItem", position: 3, name: title, item: url },
          ],
        }),
      },
    ],
  };
}
