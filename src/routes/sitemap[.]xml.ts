import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { blogPosts } from "@/data/blogData";

const BASE_URL = "https://www.luxoravilla.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {

        const blogUrls = blogPosts
          .map(
            (p) => `  <url>
    <loc>${BASE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.dateUpdated}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
          )
          .join("\n");
        const staticPages = [
          ["/villa", "0.9"],
          ["/pereybere-villa-rental", "0.9"],
          ["/grand-baie-villa-with-private-pool", "0.9"],
          ["/contact", "0.8"],
          ["/availability", "0.9"],
        ]
          .flatMap(([path, priority]) => {
            const alt = `    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}${path}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}/fr${path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${path}" />`;
            return [path, `/fr${path}`].map(
              (p) => `  <url>
    <loc>${BASE_URL}${p}</loc>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
${alt}
  </url>`,
            );
          })
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}/fr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
  <url>
    <loc>${BASE_URL}/fr</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${BASE_URL}/" />
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}/fr" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/" />
  </url>
${staticPages}
  <url>
    <loc>${BASE_URL}/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${blogUrls}
</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
