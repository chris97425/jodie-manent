import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Users } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { HOME_ENTRY_DOORS } from "@/lib/content/home";

const ICONS = [Users, Compass, Sparkles] as const;

export function AudienceProfiles() {
  return (
    <Section
      className="border-y border-ink-700/5 bg-white/60"
      title="Trois portes d'entrée, une même attention."
      description="Chaque parcours commence là où vous êtes — avec vos questions, votre contexte, vos enjeux."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {HOME_ENTRY_DOORS.map((door, index) => {
          const Icon = ICONS[index] ?? Users;
          return (
            <RevealOnScroll key={door.id} delay={index * 0.06}>
              <Link
                href={door.href}
                className="group flex h-full flex-col rounded-3xl border border-ink-700/5 bg-white p-8 transition-all hover:border-coral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cream-50 text-coral-600 transition-colors group-hover:bg-coral-50">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink-700">
                  {door.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
                  {door.description}
                </p>
                <span className="mt-6 inline-flex min-h-11 items-center gap-1 text-xs font-bold uppercase tracking-widest text-coral-600">
                  Explorer
                  <ArrowRight aria-hidden="true" className="h-3 w-3" />
                </span>
              </Link>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
