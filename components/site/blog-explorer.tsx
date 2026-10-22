"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { blogCategories, blogPosts } from "@/lib/blog-data";
import { BlogCard } from "./blog-card";

export function BlogExplorer() {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
  const results=useMemo(()=>blogPosts.filter((p)=>(category==="All"||p.category===category)&&(`${p.title} ${p.excerpt}`.toLowerCase().includes(query.toLowerCase()))),[query,category]);
  return <section className="section blog-listing"><div className="container"><div className="blog-tools"><div className="category-tabs" role="group" aria-label="Filter articles by category">{blogCategories.map((item)=><button key={item} className={category===item?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}</div><label className="blog-search"><Search size={18} /><span className="sr-only">Search articles</span><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search articles" />{query&&<button onClick={()=>setQuery("")} aria-label="Clear search"><X size={16}/></button>}</label></div>{results.length?<div className="blog-grid">{results.map((post,index)=><BlogCard key={post.slug} post={post} index={index}/>)}</div>:<div className="empty-state"><Search/><h2>No articles found</h2><p>Try another search or category.</p><button onClick={()=>{setQuery("");setCategory("All")}}>Show all articles</button></div>}<p className="demo-disclosure">Editorial note: The articles shown are clearly labeled demo content and should be reviewed or replaced before public promotion.</p></div></section>;
}
