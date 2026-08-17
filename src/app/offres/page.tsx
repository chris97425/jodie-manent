import { OffersGrid } from "@/components/offers/offers-grid";
import { PageHero } from "@/components/ui/page-hero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Accompagnements",
  description:
    "Formation, bilans de compétences, coaching professionnel, conférences et ateliers — accompagnements sur devis à La Réunion, dans l'océan Indien et à distance.",
  path: "/offres/",
});

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Accompagnements"
        title="Des formats construits avec vous"
        description="Formation, bilan de compétences et coaching, conférences — présentiel ou distanciel, à La Réunion, dans l'océan Indien et à distance."
      />
      <OffersGrid />
    </>
  );
}
