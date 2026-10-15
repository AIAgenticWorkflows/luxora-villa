import { Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogData";
import { useLang } from "@/i18n/LanguageContext";

/** Blog index, shared by /blog (English) and /fr/blog (French). */
export default function BlogIndexPage() {
  const { lang, t, localize } = useLang();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
              {t("Mauritius Travel Blog", "Blog de Voyage Île Maurice")}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
              {t(
                "A local guide to Mauritius, by the Luxora Villa team",
                "Un guide local de l'Île Maurice, par l'équipe Luxora Villa",
              )}
            </h1>
            <p className="text-gray-600 text-lg">
              {t(
                "Insider tips on the best beaches, restaurants, day trips and things to do in the north of Mauritius and around Grand Baie.",
                "Conseils d'initiés sur les plus belles plages, restaurants, excursions et activités dans le nord de l'Île Maurice et autour de Grand Baie.",
              )}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const title = lang === "fr" && post.titleFr ? post.titleFr : post.title;
              const excerpt = lang === "fr" && post.excerptFr ? post.excerptFr : post.excerpt;
              const category = lang === "fr" && post.categoryFr ? post.categoryFr : post.category;
              return (
                <article
                  key={post.slug}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition overflow-hidden border border-luxury-beige"
                >
                  <Link to={localize(`/blog/${post.slug}`) as any} className="block">
                    <div className="aspect-[4/3] overflow-hidden bg-luxury-beige">
                      <img
                        src={post.image}
                        alt={lang === "fr" && post.imageAltFr ? post.imageAltFr : post.imageAlt}
                        loading="lazy"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-luxury-gold font-semibold uppercase tracking-wider mb-2">
                        {category} · {post.readingMinutes} {t("min read", "min de lecture")}
                      </p>
                      <h2 className="font-serif text-xl font-bold text-luxury-dark mb-2 group-hover:text-luxury-gold transition">
                        {title}
                      </h2>
                      <p className="text-sm text-gray-600 leading-relaxed">{excerpt}</p>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
