import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/ui/container";
import { HOME_CONVICTION } from "@/lib/content/home";

export function ConvictionBand() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <RevealOnScroll>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-display text-2xl leading-[1.2] text-ink-700 sm:text-4xl">
              « Je crois que les personnes progressent davantage lorsqu&apos;elles
              <span className="italic text-coral-600">
                {" "}
                comprennent leurs ressources
              </span>
              , se sentent légitimes et trouvent un environnement qui leur
              permet d&apos;exprimer leur potentiel. »
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest text-ink-400">
              — Ma conviction
            </p>
            <p className="sr-only">{HOME_CONVICTION}</p>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
