"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} className={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "active" : ""}>{item.label}</Link>)}
        </nav>
        <Link href={siteConfig.consultationUrl} className="nav-cta">Book a Free Call <span aria-hidden="true">↗</span></Link>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      <div id="mobile-navigation" className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => <Link key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}><span>0{index + 1}</span>{item.label}</Link>)}
          <Link href={siteConfig.consultationUrl} className="mobile-consultation" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Book a Free Consultation Call <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
