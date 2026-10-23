import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", className = "", external = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" | "text"; className?: string; external?: boolean }) {
  const classes = `button button-${variant} ${className}`;
  const content = <>{children}<ArrowUpRight aria-hidden="true" size={17} /></>;
  if (external) return <a className={classes} href={href} target="_blank" rel="noreferrer">{content}</a>;
  if (href.includes("#")) return <a className={classes} href={href}>{content}</a>;
  return <Link className={classes} href={href}>{content}</Link>;
}
