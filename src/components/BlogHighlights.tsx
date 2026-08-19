import { Link } from "@tanstack/react-router";
import { blogPosts } from "@/data/blogData";
import { useLang } from "@/i18n/LanguageContext";

export default function BlogHighlights() {
  const { lang, t } = useLang();

  return (
    <section id="guides" className="py-16 bg-luxury-beige/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Mauritius Travel Guides", "Guides de voyage Île Maurice")}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-luxury-dark mb-3">
            {t(
              "Plan your Mauritius holiday with our local guides",
              "Préparez vos vacances à l'Île Maurice avec nos guides locaux",
            )}
          </h2>
          <p className="text-gray-600">
            {t(
              "Beaches, restaurants, day trips and practical tips from the team at Luxora Villa in Grand Baie.",
              "Plages, restaurants, excursions et conseils pratiques de l'équipe de Luxora Villa à Grand Baie.",
            )}
          </p>
        </header>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => {
            const title = lang === "fr" && post.titleFr ? post.titleFr : post.title;
            const excerpt = lang === "fr" && post.excerptFr ? post.excerptFr : post.excerpt;
            const category = lang === "fr" && post.categoryFr ? post.categoryFr : post.category;
            return (
              <li key={post.slug}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="block h-full bg-white rounded-xl border border-luxury-beige p-5 shadow-sm hover:shadow-lg transition"
                >
                  <p className="text-xs text-luxury-gold font-semibold uppercase tracking-wider mb-2">
                    {category} · {post.readingMinutes} {t("min read", "min de lecture")}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-luxury-dark mb-2">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{excerpt}</p>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="text-center mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center justify-center rounded-md bg-luxury-gold px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition"
          >
            {t("Read all Mauritius guides", "Lire tous les guides Île Maurice")}
          </Link>
        </div>
      </div>
    </section>
  );
}
