import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { AUDIENCE_PROFILES } from "@/lib/content/profiles";

export function AudienceProfiles() {
  return (
    <Section
      className="bg-white"
      eyebrow="Pour qui ?"
      title="Quatre situations, un accompagnement adapté"
      description="Repérez-vous en un coup d'œil — puis explorez l'offre qui parle le plus à votre moment."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {AUDIENCE_PROFILES.map((profile, index) => (
          <RevealOnScroll key={profile.id} delay={index * 0.06}>
            <Card interactive className="h-full">
              <h3 className="text-xl font-bold tracking-tight text-ink-700">
                {profile.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-500">
                {profile.text}
              </p>
              <Link
                href={profile.href}
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-coral-800 transition-colors hover:text-coral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:text-ink-700"
              >
                Voir l&apos;offre
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
