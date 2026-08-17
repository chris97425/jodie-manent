import { TestimonialsList } from "@/components/testimonials/testimonials-list";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Témoignages",
  description:
    "Retours anonymes d'accompagnements : bilan de compétences, coaching individuel, formation et découverte des Intelligences et Natures Multiples.",
  path: "/temoignages/",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title="Des mots qui comptent"
        description="Des retours réels et anonymes — sans prénom ni nom, uniquement la prestation concernée."
      />
      <TestimonialsList />
    </>
  );
}
