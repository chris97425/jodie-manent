import { CgvContent } from "@/components/legal/content/cgv-content";
import { LegalPageShell } from "@/components/legal";
import { buildLegalWebPageJsonLd } from "@/lib/legal/json-ld";
import { CGV_SECTIONS, SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";
import { pageMetadata } from "@/lib/seo";

const title = "Conditions Générales de Vente";
const description = `CGV de ${SITE_LEGAL_INFO.brandName} — coaching, bilans de compétences et formations sur devis.`;

export const metadata = pageMetadata({
  title: "CGV",
  description,
  path: "/cgv/",
});

export default function CgvPage() {
  return (
    <LegalPageShell
      badge="Conditions de vente"
      title={title}
      description="Cadre contractuel des prestations de coaching, bilans de compétences et formations — tarifs sur devis."
      sections={CGV_SECTIONS}
      jsonLd={buildLegalWebPageJsonLd({
        name: title,
        description,
        path: "/cgv/",
      })}
    >
      <CgvContent />
    </LegalPageShell>
  );
}
