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
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Container>
        <RevealOnScroll>
          <div className="rounded-[2.5rem] bg-coral-500 px-8 py-12 text-center text-night md:px-16 md:py-16">
            <p className="font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Échangeons sur votre besoin
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-night/80">
              Un premier échange permet de comprendre votre contexte et
              d&apos;imaginer l&apos;accompagnement le plus juste — sans
              engagement.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact/" variant="cream" size="lg">
                Envoyer ma demande
              </Button>
              <Button
                href="/faq/"
                variant="ghost"
                size="lg"
                className="border border-night/20 text-night hover:bg-night/5 hover:text-night"
              >
                Lire la FAQ
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
                      className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-night/80 transition-colors hover:bg-night/10 hover:text-night focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-night active:bg-night/15"
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
