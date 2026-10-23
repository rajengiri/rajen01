"use client";

import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const revealSelectors = [
  ".section-heading",
  ".section-top",
  ".solution-panel",
  ".outcome-strip article",
  ".service-card",
  ".benefit-grid article",
  ".process-list article",
  ".consultation-grid > *",
  ".blog-card",
  ".page-hero-grid > *",
  ".about-story > *",
  ".philosophy-grid article",
  ".ai-benefits .two-column > *",
  ".credential-grid article",
  ".service-index a",
  ".service-detail-grid > *",
  ".contact-grid > *",
  ".article-body > section",
  ".article-cta",
  ".article-author",
].join(",");

export function ScrollExperience() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0);
      setShowTop(window.scrollY > 720);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    nodes.forEach((node, index) => {
      node.classList.add("scroll-reveal");
      node.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
      observer.observe(node);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
      <div className="fun-orbit fun-orbit-one" aria-hidden="true" />
      <div className="fun-orbit fun-orbit-two" aria-hidden="true" />
      <button
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}
