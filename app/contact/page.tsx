import type { Metadata } from "next";
import { CalendarCheck, Check, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Book a Free Marketing Consultation", description: "Discuss your marketing challenges, identify growth opportunities, and get a customized Digital Marketing Plan with actionable next steps.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><PageHero current="Contact" eyebrow="Let’s find the right opportunities" title="Turn your marketing challenges into growth opportunities." description="Not getting enough leads? Struggling with online marketing? Unsure how AI can help your business? Let’s discuss your challenges and find the right opportunities for growth." />
    <section className="section contact-section"><div className="container contact-grid"><div className="contact-info"><p className="eyebrow"><span/>Your free consultation</p><h2>Ready to get started?</h2><p>During your FREE Consultation, I’ll:</p><ul><li><Check/>Understand your business and goals</li><li><Check/>Review your current marketing challenges</li><li><Check/>Identify opportunities for improvement</li><li><Check/>Create a customized Digital Marketing Plan with actionable next steps</li></ul><a className="booking-placeholder" href={siteConfig.externalConsultationUrl.startsWith("[")?"#contact-form":siteConfig.externalConsultationUrl}><CalendarCheck/><div><span>Book your free call</span><strong>Open the consultation calendar</strong><small>{siteConfig.externalConsultationUrl}</small></div></a><div className="contact-methods"><div><Mail/><span>Email</span><strong>{siteConfig.email}</strong></div><div><MessageCircle/><span>LinkedIn</span><strong>{siteConfig.social.linkedin}</strong></div></div><p className="privacy-note"><ShieldCheck/>Your information is used only to respond to your enquiry. Never add sensitive information to this form.</p></div><ContactForm/></div></section>
  </>;
}
