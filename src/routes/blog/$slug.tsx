import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts, type BlogPost as BlogPostType } from "@/data/blogData";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

const SITE_URL = "https://www.luxoravilla.com";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Article not found | Luxora Villa" }],
      };
    }
    const url = `${SITE_URL}/blog/${post.slug}`;
    const img = `${SITE_URL}${post.image}`;
    return {
      meta: [
        { title: `${post.title} | Luxora Villa` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: img },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: img },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "article:published_time", content: post.datePublished },
        { name: "article:modified_time", content: post.dateUpdated },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: img,
            datePublished: post.datePublished,
            dateModified: post.dateUpdated,
            author: { "@type": "Organization", name: "Luxora Villa" },
            publisher: {
              "@type": "Organization",
              name: "Luxora Villa",
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/lovable-uploads/06ef031e-998e-41b5-a951-2c8ba14df591.png`,
              },
            },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
              { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <nav className="text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-luxury-gold">
              Home
            </Link>{" "}
            /{" "}
            <Link to="/blog" className="hover:text-luxury-gold">
              Blog
            </Link>{" "}
            / <span className="text-luxury-dark">{post.category}</span>
          </nav>

          <header className="mb-8">
            <p className="text-luxury-gold text-xs font-semibold uppercase tracking-widest mb-2">
              {post.category} · {post.readingMinutes} min read
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
            <p className="text-xs text-gray-500 mt-3">
              Published{" "}
              {new Date(post.datePublished).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {post.dateUpdated !== post.datePublished && (
                <>
                  {" "}
                  · Updated{" "}
                  {new Date(post.dateUpdated).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </>
              )}
            </p>
          </header>

          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-luxury-beige">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {(post.body as BlogPostType["body"]).map((block, i: number) => {
              if (block.type === "p")
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-5">
                    {block.text}
                  </p>
                );
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="font-serif text-2xl md:text-3xl font-bold text-luxury-dark mt-10 mb-4"
                  >
                    {block.text}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3
                    key={i}
                    className="font-serif text-xl md:text-2xl font-bold text-luxury-dark mt-6 mb-3"
                  >
                    {block.text}
                  </h3>
                );
              if (block.type === "ul")
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mb-5 text-gray-700">
                    {block.items.map((it: string, j: number) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              if (block.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-luxury-gold pl-4 italic text-gray-700 my-6"
                  >
                    {block.text}
                  </blockquote>
                );
              return null;
            })}
          </div>

          <aside className="mt-12 bg-luxury-beige/50 border border-luxury-beige rounded-xl p-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-luxury-dark mb-2">
              Planning a trip to the north of Mauritius?
            </h2>
            <p className="text-gray-700 mb-4">
              Luxora Villa is a 3 bedroom private-pool villa in Pereybere, Grand Baie, five minutes
              from the beach.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-luxury-gold px-6 py-3 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
            >
              Check availability
            </a>
          </aside>

          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-luxury-dark mb-6">
              More Mauritius travel tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-lg overflow-hidden border border-luxury-beige hover:shadow-lg transition"
                >
                  <div className="aspect-[4/3] bg-luxury-beige overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-luxury-gold font-semibold uppercase tracking-wider mb-1">
                      {p.category}
                    </p>
                    <h3 className="font-serif font-bold text-luxury-dark group-hover:text-luxury-gold transition">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
