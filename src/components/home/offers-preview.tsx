import Link from "next/link";
import { GraduationCap, Mic, Briefcase, Users } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Container } from "@/components/ui/container";
import {
  HOME_ACCOMPANIMENTS,
  HOME_PEDAGOGY,
} from "@/lib/content/home";

const ICONS = [GraduationCap, Users, Briefcase, Mic] as const;

export function OffersPreview() {
  return (
    <section id="accompagnements" className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-normal tracking-tight text-ink-700 sm:text-4xl lg:text-5xl">
              Mes accompagnements
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-500">
              {HOME_PEDAGOGY}
            </p>
          </RevealOnScroll>

          <ul>
            {HOME_ACCOMPANIMENTS.map((item, index) => {
              const Icon = ICONS[index] ?? Briefcase;
              return (
                <RevealOnScroll key={item.id} delay={index * 0.06}>
                  <li>
                    <Link
                      href={item.href}
                      className="group flex min-h-11 items-start gap-3 border-b border-ink-700/10 py-7 transition-[padding] duration-300 ease-out sm:gap-6 hover:pl-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800"
                    >
                      <Icon
                        aria-hidden="true"
                        className="mt-1 h-5 w-5 shrink-0 text-coral-500"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-xl font-normal text-ink-700">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-ink-500">
                          {item.description}
                        </p>
                      </div>
                      <span className="mt-2 font-mono text-xs text-ink-500">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                </RevealOnScroll>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
