import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";

export function CTASection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-section ${compact ? "cta-compact" : ""}`}>
      <div className="container cta-shell">
        <div><p className="eyebrow eyebrow-light"><span />Turn challenges into opportunities</p><h2>Stop guessing what might work.</h2><p>Let’s discover what’s holding your marketing back and build a clear, practical plan to move your business forward.</p></div>
        <div className="cta-action"><ButtonLink href={siteConfig.consultationUrl} variant="light">Book a Free Consultation Call</ButtonLink><p><CheckCircle2 size={16} aria-hidden="true" /> No complicated jargon—just practical strategies built around your business.</p></div>
      </div>
    </section>
  );
}
