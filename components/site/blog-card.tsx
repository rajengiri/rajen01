import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

export function BlogCard({ post, index = 0 }: { post: BlogPost; index?: number }) {
  return <article className="blog-card"><Link href={`/blog/${post.slug}`} className={`blog-visual blog-visual-${(index % 3) + 1}`} aria-label={`Read ${post.title}`}><span>{String(index + 1).padStart(2, "0")}</span><div aria-hidden="true" /></Link><div className="blog-card-body"><p className="blog-meta"><span>{post.category}</span>{post.readingTime}</p><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.excerpt}</p><Link className="read-link" href={`/blog/${post.slug}`}>Read article <ArrowRight size={17} /></Link></div></article>;
}
