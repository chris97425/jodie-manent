import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { withBasePath } from "@/lib/assets";
import { SOCIAL_LINKS } from "@/lib/site";

const iconMap = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  malt: MaltIcon,
} as const;

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <Image
        src={withBasePath("/images/cta.png")}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ink-900/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink-900/70 via-ink-900/40 to-transparent"
      />

      <Container className="relative">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center text-cream-50">
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Prêt·e à sortir du flou ?
            </p>
            <p className="mt-4 text-lg text-cream-100/95">
              Parlons de votre transition et de vos talents — sans engagement,
              sur devis.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact/" variant="cream" size="lg">
                Je prends RDV
              </Button>
              <Button
                href="/offres/"
                variant="ghost"
                size="lg"
                className="border border-cream-100/40 text-cream-50 hover:bg-white/10 hover:text-white"
              >
                Voir les offres
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.id as keyof typeof iconMap];
                if (!Icon) return null;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-cream-100 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100 active:bg-white/15"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
