import Image from "next/image";

type PhotoVariant = "mountain" | "office";

export function ProfessionalPhoto({ priority = false, variant = "office" }: { priority?: boolean; variant?: PhotoVariant }) {
  const isOffice = variant === "office";
  const src = isOffice ? "/rajen-office-portrait-cropped.png" : "/rajen-mountain-portrait.png";
  const sizes = isOffice
    ? "(max-width: 560px) min(calc(100vw - 72px), 476px), 402px"
    : "(max-width: 560px) min(calc(100vw - 50px), 408px), 408px";

  return (
    <Image
      className={`professional-photo professional-photo-${variant}`}
      src={src}
      alt={isOffice ? "Rajendra working in a professional office" : "Rajendra with a mountain landscape"}
      fill
      priority={priority}
      quality={88}
      sizes={sizes}
    />
  );
}
