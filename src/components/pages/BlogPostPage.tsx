import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton, { whatsappUrl } from "@/components/WhatsAppButton";
import { blogPosts, type BlogPost as BlogPostType } from "@/data/blogData";
import { useLang } from "@/i18n/LanguageContext";

/** Article page, shared by /blog/$slug (English) and /fr/blog/$slug (French). */
export default function BlogPostPage({ post }: { post: BlogPostType }) {
  const { lang, t, home, localize } = useLang();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const title = lang === "fr" && post.titleFr ? post.titleFr : post.title;
  const excerpt = lang === "fr" && post.excerptFr ? post.excerptFr : post.excerpt;
  const category = lang === "fr" && post.categoryFr ? post.categoryFr : post.category;
  const imageAlt = lang === "fr" && post.imageAltFr ? post.imageAltFr : post.imageAlt;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-3xl">
          <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
            <Link to={home as any} className="hover:text-luxury-gold">
              {t("Home", "Accueil")}
            </Link>{" "}
            /{" "}
            <Link to={localize("/blog") as any} className="hover:text-luxury-gold">
              {t("Blog", "Blog")}
            </Link>{" "}
            / <span className="text-luxury-dark">{category}</span>
          </nav>

          <header className="mb-8">
            <p className="text-luxury-gold text-xs font-semibold uppercase tracking-widest mb-2">
              {category} · {post.readingMinutes} {t("min read", "min de lecture")}
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-luxury-dark leading-tight mb-4">
              {title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">{excerpt}</p>
            <p className="text-xs text-gray-600 mt-3">
              {t("Published", "Publié le")}{" "}
              {new Date(post.datePublished).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              {post.dateUpdated !== post.datePublished && (
                <>
                  {" "}
                  · {t("Updated", "Mis à jour le")}{" "}
                  {new Date(post.dateUpdated).toLocaleDateString(
                    lang === "fr" ? "fr-FR" : "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </>
              )}
            </p>
          </header>

          <div className="aspect-[16/9] rounded-xl overflow-hidden mb-10 bg-luxury-beige">
            <img
              src={post.image}
              alt={imageAlt}
              width={800}
              height={450}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            {(post.body as BlogPostType["body"]).map((block, i: number) => {
              const blockText =
                "text" in block ? (lang === "fr" && block.textFr ? block.textFr : block.text) : "";
              if (block.type === "p")
                return (
                  <p key={i} className="text-gray-700 leading-relaxed mb-5">
                    {blockText}
                  </p>
                );
              if (block.type === "h2")
                return (
                  <h2
                    key={i}
                    className="font-serif text-2xl md:text-3xl font-bold text-luxury-dark mt-10 mb-4"
                  >
                    {blockText}
                  </h2>
                );
              if (block.type === "h3")
                return (
                  <h3
                    key={i}
                    className="font-serif text-xl md:text-2xl font-bold text-luxury-dark mt-6 mb-3"
                  >
                    {blockText}
                  </h3>
                );
              if (block.type === "ul") {
                const items = lang === "fr" && block.itemsFr ? block.itemsFr : block.items;
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mb-5 text-gray-700">
                    {items.map((it: string, j: number) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="border-l-4 border-luxury-gold pl-4 italic text-gray-700 my-6"
                  >
                    {blockText}
                  </blockquote>
                );
              return null;
            })}
          </div>

          {post.faq && post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-luxury-dark mb-6">
                {t("Quick answers", "Réponses rapides")}
              </h2>
              <div className="space-y-6">
                {post.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-lg font-bold text-luxury-dark mb-2">
                      {lang === "fr" && f.qFr ? f.qFr : f.q}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {lang === "fr" && f.aFr ? f.aFr : f.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <aside className="mt-12 bg-luxury-beige/50 border border-luxury-beige rounded-xl p-6 text-center">
            <h2 className="font-serif text-2xl font-bold text-luxury-dark mb-2">
              {t(
                "Planning a trip to the north of Mauritius?",
                "Vous planifiez un voyage dans le nord de l'Île Maurice ?",
              )}
            </h2>
            <p className="text-gray-700 mb-4">
              {t(
                "Luxora Villa is a premier 3-bedroom luxury private pool villa in Pereybere, Grand Baie. It stands out as one of the most exceptional holiday villa rentals in Mauritius, offering complete privacy and modern amenities just minutes from the beach.",
                "Luxora Villa est une villa de luxe de 3 chambres avec piscine privée à Pereybère, Grand Baie. Elle s'impose comme l'une des locations de villa de vacances les plus exceptionnelles de l'Île Maurice, offrant une intimité totale et des prestations modernes à quelques minutes de la plage.",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to={home as any}
                className="inline-flex items-center rounded-md border border-luxury-gold text-luxury-gold px-6 py-3 text-sm font-semibold hover:bg-luxury-gold hover:text-white transition"
              >
                {t("Visit our Luxury Villa", "Découvrir notre villa de luxe")}
              </Link>
              <a
                href={whatsappUrl(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-luxury-gold px-6 py-3 text-sm font-semibold text-white hover:bg-luxury-gold/90 transition"
              >
                {t("Check availability", "Vérifier la disponibilité")}
              </a>
            </div>
          </aside>

          <section className="mt-16">
            <h2 className="font-serif text-2xl font-bold text-luxury-dark mb-6">
              {t("More Mauritius travel tips", "Plus de conseils de voyage à l'Île Maurice")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => {
                const rTitle = lang === "fr" && p.titleFr ? p.titleFr : p.title;
                const rCategory = lang === "fr" && p.categoryFr ? p.categoryFr : p.category;
                return (
                  <Link
                    key={p.slug}
                    to={localize(`/blog/${p.slug}`) as any}
                    className="group block rounded-lg overflow-hidden border border-luxury-beige hover:shadow-lg transition"
                  >
                    <div className="aspect-[4/3] bg-luxury-beige overflow-hidden">
                      <img
                        src={p.image}
                        alt={lang === "fr" && p.imageAltFr ? p.imageAltFr : p.imageAlt}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-luxury-gold font-semibold uppercase tracking-wider mb-1">
                        {rCategory}
                      </p>
                      <h3 className="font-serif font-bold text-luxury-dark group-hover:text-luxury-gold transition">
                        {rTitle}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
