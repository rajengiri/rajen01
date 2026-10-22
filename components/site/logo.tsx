import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className={`logo ${inverted ? "logo-inverted" : ""}`} aria-label="Digital Rajen home">
      <span className="logo-mark" aria-hidden="true"><span>DR</span></span>
      <span className="logo-type"><strong>Digital Rajen</strong><small>AI Marketing & Growth</small></span>
    </Link>
  );
}
