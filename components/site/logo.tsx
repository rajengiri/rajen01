import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function BrandImage({ className = "logo-image", priority = false, sizes = "164px" }: { className?: string; priority?: boolean; sizes?: string }) {
  return (
    <Image
      className={className}
      src={siteConfig.logoPath}
      alt="Digital Rajen Growth logo"
      width={2170}
      height={725}
      priority={priority}
      sizes={sizes}
    />
  );
}

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverted ? "logo-inverted" : ""}`} aria-label="Digital Rajen home">
      <BrandImage priority sizes="(max-width: 560px) 132px, 164px" />
    </Link>
  );
}
