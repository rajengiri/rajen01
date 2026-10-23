import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation, services, siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-intro"><Logo inverted /><p>Helping small and medium businesses generate more leads, attract more customers, and grow with AI-powered digital marketing.</p><strong>Smarter Marketing. More Customers. Business Growth.</strong><Link className="footer-cta" href={siteConfig.consultationUrl}>Book a Free Consultation Call <ArrowUpRight size={18} /></Link></div>
        <div><h2>Explore</h2>{navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        <div><h2>Services</h2>{services.slice(0, 4).map((item) => <Link key={item.slug} href={`/services#${item.slug}`}>{item.title}</Link>)}</div>
        <div><h2>Connect</h2><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.phone}</span><span>{siteConfig.social.linkedin}</span></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} Digital Rajen. All rights reserved.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms & Conditions</Link></div></div>
    </footer>
  );
}
