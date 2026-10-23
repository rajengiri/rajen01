import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: { default: "Digital Rajen | Get More Leads, Customers & Sales", template: "%s | Digital Rajen" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Digital Rajen | Get More Leads, Customers & Sales", description: siteConfig.description, url: "/", siteName: "Digital Rajen", type: "website", locale: "en_US", images: [{ url: siteConfig.logoPath, width: 2170, height: 725, alt: "Digital Rajen Growth logo" }] },
  twitter: { card: "summary_large_image", title: "Digital Rajen | Get More Leads, Customers & Sales", description: siteConfig.description, images: [siteConfig.logoPath] },
  icons: { icon: siteConfig.logoPath, shortcut: siteConfig.logoPath, apple: siteConfig.logoPath },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071a2b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const logoUrl = `${siteConfig.websiteUrl}${siteConfig.logoPath}`;
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", name: "Digital Rajen", url: siteConfig.websiteUrl, description: siteConfig.description, image: logoUrl }, { "@type": ["Person", "ProfessionalService"], name: siteConfig.personName, alternateName: siteConfig.brandName, url: siteConfig.websiteUrl, description: siteConfig.description, jobTitle: siteConfig.professionalTitle, logo: logoUrl, image: logoUrl }] };
  return <html lang="en"><body className={manrope.variable}><a href="#main-content" className="skip-link">Skip to main content</a><Header /><main id="main-content">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
