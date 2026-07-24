import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogData";

const SITE_URL = "https://www.luxoravilla.com";
const TITLE = "Mauritius Travel Blog | Luxora Villa";
const DESCRIPTION =
  "Local tips for tourists in Mauritius: best beaches in the north, things to do in Grand Baie, day trips, food and travel planning by the Luxora Villa team.";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/blog` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/blog` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Luxora Villa Mauritius Blog",
          url: `${SITE_URL}/blog`,
          description: DESCRIPTION,
          blogPost: blogPosts.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.description,
            datePublished: p.datePublished,
            dateModified: p.dateUpdated,
            url: `${SITE_URL}/blog/${p.slug}`,
            image: `${SITE_URL}${p.image}`,
            author: { "@type": "Organization", name: "Luxora Villa" },
          })),
        }),
      },
    ],
  }),
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
              Mauritius Travel Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
              A local guide to Mauritius, by the Luxora Villa team
            </h1>
            <p className="text-gray-600 text-lg">
              Insider tips on the best beaches, restaurants, day trips and things to do in the
              north of Mauritius and around Grand Baie.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border border-luxury-beige"
              >
                <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                  <div className="aspect-[4/3] overflow-hidden bg-luxury-beige">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-luxury-gold font-semibold uppercase tracking-wider mb-2">
                      {post.category} · {post.readingMinutes} min read
                    </p>
                    <h2 className="font-serif text-xl font-bold text-luxury-dark mb-2 group-hover:text-luxury-gold transition">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
