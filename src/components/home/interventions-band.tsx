import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/ui/container";
import { SOCIAL_PROOF } from "@/lib/offers";

export function InterventionsBand() {
  return (
    <section className="border-y border-cream-200 bg-white py-10">
      <Container>
        <RevealOnScroll>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-600">
              Interventions
            </p>
            <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              {SOCIAL_PROOF.map((item) => (
                <li
                  key={item.id}
                  className="flex items-baseline gap-3 border-l-2 border-coral-500 pl-4"
                >
                  <span className="text-sm font-bold tracking-tight text-ink-700">
                    {item.title}
                  </span>
                  <span className="text-sm text-ink-500">{item.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
