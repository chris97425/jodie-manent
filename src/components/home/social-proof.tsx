import { Quote, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { SOCIAL_PROOF, TESTIMONIAL } from "@/lib/offers";

export function SocialProof() {
  return (
    <Section
      className="bg-white"
      eyebrow="Preuves vivantes"
      title="Des moments qui ancrent la confiance"
      description="Interventions et retours réels — sans fioritures inventées."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          {SOCIAL_PROOF.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.06}>
              <article className="flex gap-4 rounded-2xl bg-warm-50 p-5 sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-500 text-white">
                  <Sparkles aria-hidden="true" className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-ink-600">
                    {item.description}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.12}>
          <figure className="relative flex h-full flex-col justify-center rounded-3xl bg-coral-500 px-6 py-10 text-white sm:px-10">
            <Quote
              aria-hidden="true"
              className="mb-4 h-8 w-8 text-white/70"
            />
            <blockquote className="font-display text-3xl leading-snug sm:text-4xl">
              « {TESTIMONIAL.quote} »
            </blockquote>
            <figcaption className="mt-6 text-sm uppercase tracking-[0.14em] text-white/80">
              {TESTIMONIAL.attribution}
            </figcaption>
          </figure>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
