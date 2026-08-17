import type { Metadata } from "next";
import { OffersGrid } from "@/components/offers/offers-grid";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Accompagnements",
  description:
    "Formation, bilans de compétences et coaching professionnel, conférences et ateliers — accompagnements sur devis, à La Réunion, dans l'océan Indien et à distance.",
};

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
