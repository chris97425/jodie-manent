import type { Metadata } from "next";
import { CguContent } from "@/components/legal/content/cgu-content";
import { LegalPageShell } from "@/components/legal";
import { buildLegalWebPageJsonLd } from "@/lib/legal/json-ld";
import { CGU_SECTIONS, SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";

const title = "Conditions Générales d'Utilisation";
const description = `CGU du site vitrine ${SITE_LEGAL_INFO.brandName} — accès, contenus et responsabilités.`;

export const metadata: Metadata = {
  title: "CGU",
  description,
  openGraph: {
    title: `CGU · ${SITE_LEGAL_INFO.brandName}`,
    description,
    url: `${SITE_LEGAL_INFO.websiteUrl}/cgu/`,
  },
};

export default function CguPage() {
  return (
    <LegalPageShell
      badge="Conditions d'utilisation"
      title={title}
      description="Règles d'accès et d'usage du site vitrine statique de présentation."
      sections={CGU_SECTIONS}
      jsonLd={buildLegalWebPageJsonLd({
        name: title,
        description,
        path: "/cgu/",
      })}
    >
      <CguContent />
    </LegalPageShell>
  );
}
