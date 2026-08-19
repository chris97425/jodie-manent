import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FEATURED_OFFER } from "@/lib/content/home";

export function FeaturedOfferBand() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Container>
        <RevealOnScroll>
          <div className="rounded-[2.5rem] bg-night px-6 py-12 text-cream-50 sm:px-8 md:px-16 md:py-20">
            <p className="text-xs font-bold uppercase tracking-widest text-coral-400">
              {FEATURED_OFFER.eyebrow}
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-3xl font-normal leading-[1.08] tracking-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Développer sa posture managériale
              <br />
              grâce aux{" "}
              <span className="italic text-coral-400">
                Intelligences et Natures Multiples
              </span>
              .
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-100">
              {FEATURED_OFFER.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                href={FEATURED_OFFER.href}
                variant="cream"
                size="lg"
                className="focus-visible:ring-offset-night"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
