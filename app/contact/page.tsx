import type { Metadata } from "next";
import { CalendarCheck, Check, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = { title: "Contact & Free Marketing Consultation", description: "Book a free consultation to discuss your business, marketing challenges, and strongest growth opportunities.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  return <><PageHero current="Contact" eyebrow="Start with a useful conversation" title="Let’s talk about growing your business." description="Book a free consultation to discuss your business, marketing challenges, and growth opportunities. You’ll leave with a clearer direction—even before becoming a client." />
    <section className="section contact-section"><div className="container contact-grid"><div className="contact-info"><p className="eyebrow"><span/>Your free consultation</p><h2>A focused conversation. A customized plan.</h2><p>During the call, I’ll learn how your business works, what you have tried, and where you want to go. Then we’ll identify the most practical marketing opportunities.</p><ul><li><Check/>Business and marketing analysis</li><li><Check/>Review of your audience, challenges, and goals</li><li><Check/>Prioritized growth opportunities</li><li><Check/>A customized Digital Marketing Plan</li><li><Check/>Practical next steps you can begin using</li></ul><a className="booking-placeholder" href={siteConfig.externalConsultationUrl.startsWith("[")?"#contact-form":siteConfig.externalConsultationUrl}><CalendarCheck/><div><span>Preferred option</span><strong>Open the consultation calendar</strong><small>{siteConfig.externalConsultationUrl}</small></div></a><div className="contact-methods"><div><Mail/><span>Email</span><strong>{siteConfig.email}</strong></div><div><MessageCircle/><span>LinkedIn</span><strong>{siteConfig.social.linkedin}</strong></div></div><p className="privacy-note"><ShieldCheck/>Your information is used only to respond to your enquiry. Never add sensitive information to this form.</p></div><ContactForm/></div></section>
  </>;
}
