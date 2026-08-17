import { CguContent } from "@/components/legal/content/cgu-content";
import { LegalPageShell } from "@/components/legal";
import { buildLegalWebPageJsonLd } from "@/lib/legal/json-ld";
import { CGU_SECTIONS, SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";
import { pageMetadata } from "@/lib/seo";

const title = "Conditions Générales d'Utilisation";
const description = `CGU du site vitrine ${SITE_LEGAL_INFO.brandName} — accès, contenus et responsabilités.`;

export const metadata = pageMetadata({
  title: "CGU",
  description,
  path: "/cgu/",
});

export default function CguPage() {
  return (
    <LegalPageShell
      badge="Conditions d'utilisation"
      title={title}
      description="Règles d'accès et d'usage du site vitrine de présentation."
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
