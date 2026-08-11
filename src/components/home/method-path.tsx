import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { withBasePath } from "@/lib/assets";
import { METHOD_STEPS } from "@/lib/content/method";

export function MethodPath() {
  return (
    <Section
      id="votre-chemin"
      className="bg-cream-100"
      eyebrow="Votre chemin"
      title="Sortir du flou, étape après étape"
      description="L'arc ouvert du logo inspire cette trajectoire : de la découverte à l'action, vers plus de clarté."
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <RevealOnScroll>
          <div className="overflow-hidden rounded-2xl border border-cream-200 bg-white shadow-md">
            <Image
              src={withBasePath("/images/formation.png")}
              alt="Visuel abstrait — spirale ascendante évoquant la progression"
              width={960}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </RevealOnScroll>

        <ol className="space-y-4">
          {METHOD_STEPS.map((step, index) => (
            <RevealOnScroll key={step.id} delay={index * 0.07}>
              <li className="flex gap-4 rounded-2xl border border-cream-200 bg-white p-5 shadow-sm">
                <span className="text-sm font-bold tabular-nums text-coral-500">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-ink-700">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-ink-500">
                    {step.description}
                  </p>
                </div>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </div>
    </Section>
  );
}
