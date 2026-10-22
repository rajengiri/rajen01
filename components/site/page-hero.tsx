import type { ReactNode } from "react";
import { Breadcrumbs } from "./breadcrumbs";

export function PageHero({ eyebrow, title, description, children, current }: { eyebrow: string; title: string; description: string; children?: ReactNode; current: string }) {
  return <section className="page-hero"><div className="container"><Breadcrumbs current={current} /><div className="page-hero-grid"><div><p className="eyebrow eyebrow-light"><span />{eyebrow}</p><h1>{title}</h1></div><div className="page-hero-copy"><p>{description}</p>{children}</div></div></div></section>;
}
