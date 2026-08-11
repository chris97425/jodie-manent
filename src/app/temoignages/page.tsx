import type { Metadata } from "next";
import { TestimonialsList } from "@/components/testimonials/testimonials-list";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Retours d'accompagnement autour de la clarté, de la confiance et du sens — sans témoignages inventés.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="Des mots qui comptent"
        description="Un espace pour les retours réels — aujourd'hui une citation vérifiée, demain d'autres voix."
      />
      <TestimonialsList />
    </>
  );
}
