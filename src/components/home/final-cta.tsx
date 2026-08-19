import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Container>
        <RevealOnScroll>
          <div className="mx-auto max-w-3xl rounded-[2.5rem] bg-coral-500 px-6 py-12 text-center text-cream-50 sm:px-8 md:px-16 md:py-16">
            <p className="font-display text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
              Échangeons sur votre besoin
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream-100">
              Un premier échange permet de comprendre votre contexte et
              d&apos;imaginer l&apos;accompagnement le plus juste — sans
              engagement.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href="/contact/" variant="cream" size="lg">
                Prendre RDV
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
