import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_TAGLINE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,_#ff6b6b_0%,_#f25555_55%,_#e24a4a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />
      <Container className="relative">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="font-display text-4xl sm:text-5xl">{SITE_TAGLINE}</p>
            <p className="mt-4 text-lg text-white/90">
              Parlons de votre transition, de vos talents, de la suite — sans
              engagement, sur devis.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                href="/contact/"
                className="bg-white text-coral-700 hover:bg-warm-50"
                size="lg"
              >
                Prendre contact
              </Button>
              <Button
                href="/a-propos/"
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                Qui suis-je ?
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
