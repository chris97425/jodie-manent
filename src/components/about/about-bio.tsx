import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { PortraitCard } from "@/components/ui/portrait-card";
import { Container } from "@/components/ui/container";
import { IMAGES, withBasePath } from "@/lib/assets";
import {
  ABOUT_FACTS,
  ABOUT_LEAD,
  ABOUT_LOCATION,
  ABOUT_TODAY,
} from "@/lib/content/about";

export function AboutBio() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <RevealOnScroll>
            <PortraitCard
              src={IMAGES.hero}
              alt="Jodie Manent, coach professionnelle certifiée — La Réunion"
              width={1280}
              height={1920}
              className="aspect-[4/5] max-w-md"
              imageClassName="object-[center_18%]"
            />
          </RevealOnScroll>

          <div>
            <RevealOnScroll>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral-800">
                Parcours
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink-700 sm:text-4xl">
                Un parcours au service des personnes et des collectifs
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-500">
                {ABOUT_LEAD}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-600">
                {ABOUT_TODAY}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">
                {ABOUT_LOCATION}
              </p>
            </RevealOnScroll>

            <ul className="mt-8 space-y-3">
              {ABOUT_FACTS.map((item, index) => (
                <RevealOnScroll key={item} delay={index * 0.05}>
                  <li className="rounded-xl border border-cream-200 bg-cream-50/90 px-5 py-4">
                    <p className="text-base text-ink-600">{item}</p>
                  </li>
                </RevealOnScroll>
              ))}
            </ul>
          </div>
        </div>

        <RevealOnScroll>
          <div className="mt-16 overflow-hidden rounded-3xl">
            <Image
              src={withBasePath(IMAGES.paysage)}
              alt="Paysage doux de La Réunion, tons sable et corail"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
