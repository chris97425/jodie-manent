import type { Metadata } from "next";
import { TestimonialsList } from "@/components/testimonials/testimonials-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Espace réservé aux retours réels d'accompagnement — sans témoignages inventés.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="Des mots qui comptent"
        description="Un espace pour les retours réels — les emplacements ci-dessous accueilleront les voix des personnes accompagnées."
      />
      <TestimonialsList />
    </>
  );
}
