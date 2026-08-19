import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <Container>
        <RevealOnScroll>
          <div className="rounded-[2.5rem] bg-coral-500 px-6 py-10 text-center text-cream-50 sm:px-8 md:px-16 md:py-12">
            <p className="font-display text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
              Échangeons sur votre besoin
            </p>
            <p className="mx-auto mt-3 max-w-xl text-lg text-cream-100">
              Un premier échange permet de comprendre votre contexte et
              d&apos;imaginer l&apos;accompagnement le plus juste — sans
              engagement.
            </p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="/contact/"
                variant="cream"
                size="lg"
                className="hover:-translate-y-0.5 hover:shadow-lg hover:shadow-coral-900/20"
              >
                Prendre un RDV gratuit &amp; sans engagement
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
