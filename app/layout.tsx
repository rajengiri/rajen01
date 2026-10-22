import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: { default: "Digital Rajen | AI Marketing Expert", template: "%s | Digital Rajen" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Digital Rajen | AI Marketing Expert", description: siteConfig.description, url: "/", siteName: "Digital Rajen", type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "Digital Rajen | AI Marketing Expert", description: siteConfig.description },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071a2b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "WebSite", name: "Digital Rajen", url: siteConfig.websiteUrl, description: siteConfig.description }, { "@type": ["Person", "ProfessionalService"], name: siteConfig.personName, alternateName: siteConfig.brandName, url: siteConfig.websiteUrl, description: siteConfig.description, jobTitle: siteConfig.professionalTitle }] };
  return <html lang="en"><body className={manrope.variable}><a href="#main-content" className="skip-link">Skip to main content</a><Header /><main id="main-content">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
