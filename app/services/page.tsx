import type { Metadata } from "next";
import { ArrowDown, Check, CircleAlert } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { CTASection } from "@/components/site/cta-section";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { services, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "AI-Powered Digital Marketing Services", description: "Customized AI marketing, digital strategy, lead generation, content, SEO, and automation services for growing businesses.", alternates: { canonical: "/services" } };

export default function ServicesPage() {
  return <><PageHero current="Services" eyebrow="Services designed around outcomes" title="AI-powered digital marketing services designed to grow your business." description="No one-size-fits-all package. Every recommendation is shaped around your audience, goals, resources, and most valuable growth opportunities."><ButtonLink href="#services" variant="light">Explore the Services</ButtonLink></PageHero>
    <section className="section service-overview"><div className="container"><SectionHeading eyebrow="Choose the right focus" title="From unclear marketing to a connected growth system."><p>Start with the challenge that matters most—or book a consultation and we’ll identify the right priorities together.</p></SectionHeading><div className="service-index">{services.map((service) => <a href={`#${service.slug}`} key={service.slug}><span>{service.number}</span>{service.title}<ArrowDown size={16} /></a>)}</div></div></section>
    <section id="services" className="service-details">{services.map((service,index) => <article id={service.slug} className="section service-detail" key={service.slug}><div className="container service-detail-grid"><div className="service-detail-title"><span>{service.number}</span><p className="eyebrow"><i />Service {String(index+1).padStart(2,"0")}</p><h2>{service.title}</h2><p>{service.short}</p><ButtonLink href={siteConfig.consultationUrl}>Discuss This Service</ButtonLink></div><div className="service-detail-content"><div className="problem-solution"><div><h3><CircleAlert size={20} /> The problem</h3><p>{service.problem}</p></div><div><h3><Check size={20} /> The solution</h3><p>{service.solution}</p></div></div><div className="service-columns"><div><h3>What it can include</h3><ul>{service.includes.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div><div><h3>Business benefits</h3><ul>{service.benefits.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul></div></div></div></div></article>)}</section><CTASection /></>;
}
