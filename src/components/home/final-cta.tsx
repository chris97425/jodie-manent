import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SITE_TAGLINE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute inset-0 bg-coral-500" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(176,58,46,0.25)_0%,_transparent_55%)]"
      />
      <Container className="relative">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              {SITE_TAGLINE}
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
