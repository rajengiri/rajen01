import type { Metadata } from "next";
import { BlogExplorer } from "@/components/site/blog-explorer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "AI Marketing & Business Growth Blog", description: "Practical insights on AI marketing, lead generation, SEO, content, automation, and sustainable business growth.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  return <><PageHero current="Blog" eyebrow="The Growth Brief" title="Smarter marketing ideas for growing businesses." description="Straightforward guidance on AI, digital marketing, lead generation, content, and automation—written for business owners, not technologists." /><BlogExplorer /></>;
}
