import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MaltIcon,
} from "@/components/ui/social-icons";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SOCIAL_LINKS } from "@/lib/site";

const iconMap = {
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  malt: MaltIcon,
} as const;

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div aria-hidden="true" className="absolute inset-0 bg-coral-800" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-coral-500 via-coral-800 to-ink-800"
      />
      <Container className="relative">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt·e à sortir du flou ?
            </p>
            <p className="mt-4 text-lg text-white/90">
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
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
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
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-white/90 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-100 active:bg-white/15"
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
