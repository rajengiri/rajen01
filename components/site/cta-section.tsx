import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./button-link";

export function CTASection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`cta-section ${compact ? "cta-compact" : ""}`}>
      <div className="container cta-shell">
        <div><p className="eyebrow eyebrow-light"><span />Your next best move</p><h2>Let’s build a smarter marketing strategy for your business.</h2><p>Book a free consultation and leave with a clearer view of your strongest marketing opportunities—and practical next steps you can start using.</p></div>
        <div className="cta-action"><ButtonLink href={siteConfig.consultationUrl} variant="light">Book a Free Consultation Call</ButtonLink><p><CheckCircle2 size={16} aria-hidden="true" /> Includes a customized Digital Marketing Plan</p></div>
      </div>
    </section>
  );
}
