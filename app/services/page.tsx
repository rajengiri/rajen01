import type { Metadata } from "next";
import { ArrowDown, Check, CircleAlert } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Digital Marketing Services for Business Growth", description: "Find the right AI marketing, digital strategy, lead generation, SEO, content, and automation solutions for your business.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><PageHero current="Services" eyebrow="The right solution for your business" title="Turn marketing challenges into growth opportunities." description="Whether you’re struggling to attract customers, generate leads, or improve sales, I can help you identify the right marketing solutions for your business."><ButtonLink href="#services" variant="light">Explore My Services</ButtonLink></PageHero>
    <section className="section service-overview"><div className="container"><SectionHeading eyebrow="Choose the right focus" title="Practical services for smarter marketing and business growth."><p>Not sure which service your business needs? Let’s find out together during your free consultation.</p></SectionHeading><div className="service-index">{services.map((service) => <a href={`#${service.slug}`} key={service.slug}><span>{service.number}</span>{service.title}<ArrowDown size={16} /></a>)}</div></div></section>
    <section id="services" className="service-details">{services.map((service,index) => <article id={service.slug} className="section service-detail" key={service.slug}><div className="container service-detail-grid"><div className="service-detail-title"><span>{service.number}</span><p className="eyebrow"><i />Service {String(index+1).padStart(2,"0")}</p><h2>{service.title}</h2><p>{service.short}</p><ButtonLink href={siteConfig.consultationUrl}>Book a Free Consultation Call</ButtonLink></div><div className="service-detail-content"><div className="problem-solution"><div><h3><CircleAlert size={20} /> The challenge</h3><p>{service.problem}</p></div><div><h3><Check size={20} /> How I can help</h3><p>{service.solution}</p></div></div><div className="service-columns"><div><h3>Your service can include</h3><ul>{service.includes.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div><h3>What this helps you achieve</h3><ul>{service.benefits.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div></div></div></div></article>)}</section><CTASection /></>;
}
