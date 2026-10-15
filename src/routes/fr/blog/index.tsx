import { createFileRoute } from "@tanstack/react-router";
import BlogIndexPage from "@/components/pages/BlogIndexPage";
import { blogIndexHead } from "@/lib/blog-seo";

export const Route = createFileRoute("/fr/blog/")({
  component: BlogIndexPage,
  head: () => blogIndexHead("fr"),
});
