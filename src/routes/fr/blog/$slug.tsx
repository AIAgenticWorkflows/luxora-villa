import { createFileRoute, notFound } from "@tanstack/react-router";
import BlogPostPage from "@/components/pages/BlogPostPage";
import { blogPosts } from "@/data/blogData";
import { blogPostHead } from "@/lib/blog-seo";

export const Route = createFileRoute("/fr/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => blogPostHead(loaderData?.post, "fr"),
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return <BlogPostPage post={post} />;
}
