import Image from "next/image";
import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverted ? "logo-inverted" : ""}`} aria-label="Digital Rajen home">
      <Image
        className="logo-image"
        src="/digital-rajen-growth-logo.png"
        alt="Digital Rajen"
        width={2170}
        height={725}
        priority
        sizes="(max-width: 560px) 132px, 164px"
      />
    </Link>
  );
}
