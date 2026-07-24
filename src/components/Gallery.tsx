import { useState } from "react";
import { galleryImages, type ImageCategory } from "@/data/galleryData";
import { useLang } from "@/i18n/LanguageContext";

export default function Gallery() {
  const { t } = useLang();
  const [tab, setTab] = useState<ImageCategory>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const tabs: { id: ImageCategory; label: string }[] = [
    { id: "all", label: t("All", "Tout") },
    { id: "exterior", label: t("Exterior & Pool", "Extérieur et piscine") },
    { id: "interior", label: t("Interior", "Intérieur") },
  ];

  const images = tab === "all" ? galleryImages : galleryImages.filter((i) => i.category === tab);

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white scroll-mt-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10">
          <p className="text-luxury-gold text-sm font-semibold tracking-widest uppercase mb-2">
            {t("Gallery", "Galerie")}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-dark mb-4">
            {t("Inside Luxora Villa, Grand Baie", "À l'intérieur de Luxora Villa, Grand Baie")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            {t(
              "Explore every corner of our luxury villa in Mauritius, from the private pool and rooftop terrace to the fully equipped kitchen and light filled bedrooms.",
              "Explorez chaque coin de notre villa de luxe à l'Île Maurice, de la piscine privée et la terrasse sur le toit à la cuisine entièrement équipée et aux chambres lumineuses.",
            )}
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                tab === t.id
                  ? "bg-luxury-blue text-white shadow"
                  : "bg-luxury-beige text-luxury-dark hover:bg-luxury-beige/70"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, idx) => (
            <button
              key={img.id}
              onClick={() => setLightbox(idx)}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all aspect-[4/3] bg-luxury-beige"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none p-2"
            aria-label="Close"
          >
            ×
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i! - 1 + images.length) % images.length);
            }}
            className="absolute left-2 sm:left-6 text-white text-4xl p-3"
            aria-label="Previous image"
          >
            ‹
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-full object-contain rounded"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((i) => (i! + 1) % images.length);
            }}
            className="absolute right-2 sm:right-6 text-white text-4xl p-3"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
