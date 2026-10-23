import Image from "next/image";

type PhotoVariant = "mountain" | "office";

export function ProfessionalPhoto({ priority = false, variant = "office" }: { priority?: boolean; variant?: PhotoVariant }) {
  const isOffice = variant === "office";

  return (
    <Image
      className={`professional-photo professional-photo-${variant}`}
      src="/rajen-office-portrait.png"
      alt={isOffice ? "Rajendra working in a professional office" : "Rajendra with a mountain landscape"}
      fill
      priority={priority}
      sizes={isOffice ? "(max-width: 560px) 138px, 178px" : "(max-width: 820px) 430px, 38vw"}
    />
  );
}
