import type { Metadata } from "next";
import { OffersGrid } from "@/components/offers/offers-grid";
import { PageHero } from "@/components/ui/page-hero";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Coaching professionnel, bilans de compétences INM, formations et mentorat POWAO — accompagnements sur devis, à La Réunion et en métropole.",
};

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Offres"
        title="Accompagnements sur devis"
        description="Quatre formats pour révéler vos talents — présentiel ou distanciel, à La Réunion et en métropole."
      />
      <OffersGrid />
    </>
  );
}
