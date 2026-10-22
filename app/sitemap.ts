import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { siteConfig } from "@/lib/site-config";

export default function sitemap():MetadataRoute.Sitemap{const pages=["","/about","/services","/blog","/contact","/privacy","/terms"].map((path)=>({url:`${siteConfig.websiteUrl}${path}`,lastModified:new Date(),changeFrequency:path==="/blog"?"weekly" as const:"monthly" as const,priority:path===""?1:path==="/services"?0.9:0.7}));return [...pages,...blogPosts.map((p)=>({url:`${siteConfig.websiteUrl}/blog/${p.slug}`,lastModified:new Date(p.date),changeFrequency:"monthly" as const,priority:0.6}))]}
