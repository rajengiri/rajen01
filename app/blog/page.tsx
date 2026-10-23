import type { Metadata } from "next";
import { BlogExplorer } from "@/components/site/blog-explorer";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = { title: "Practical Marketing & AI Insights", description: "Practical tips, proven strategies, and useful AI tools to help you attract customers, improve your marketing, and grow your business.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  return <><PageHero current="Blog" eyebrow="Practical ideas for business growth" title="Learn smarter ways to market your business." description="Discover practical tips, proven strategies, and useful AI tools to help you attract more customers, improve your marketing, and grow—without unnecessary complexity." /><BlogExplorer /></>;
}
