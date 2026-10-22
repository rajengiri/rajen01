"use client";

import { Check, Link as LinkIcon, Share2 } from "lucide-react";
import { useState } from "react";

export function ArticleShare({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); } }
  return <aside className="share-panel" aria-label="Share article"><span>Share</span><a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} aria-label="Share on LinkedIn" target="_blank" rel="noreferrer"><Share2 size={18}/></a><button type="button" onClick={copy} aria-label={copied?"Article link copied":"Copy article link"} title="Copy this page URL">{copied?<Check size={18}/>:<LinkIcon size={18}/>}</button></aside>;
}
