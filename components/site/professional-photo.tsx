import Image from "next/image";

export function ProfessionalPhoto({ priority = false }: { priority?: boolean }) {
  return (
    <Image
      className="professional-photo"
      src="/rajen-office-portrait.png"
      alt="Rajendra in a professional office setting"
      fill
      priority={priority}
      sizes="(max-width: 820px) 430px, 38vw"
    />
  );
}
