import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/button-link";
import { siteConfig } from "@/lib/site-config";

export default function NotFound(){return <section className="not-found"><div className="container not-found-inner"><span>404</span><p className="eyebrow eyebrow-light"><i/>A small detour</p><h1>Looks like this page took a wrong turn.</h1><p>The page may have moved, but your next marketing opportunity is still within reach.</p><div><Link href="/"><ArrowLeft size={17}/>Return home</Link><Link href="/services">Explore services<ArrowRight size={17}/></Link></div><ButtonLink href={siteConfig.consultationUrl} variant="light">Book a Free Consultation Call</ButtonLink></div></section>}
