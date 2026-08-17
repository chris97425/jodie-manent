import { ConfidentialiteContent } from "@/components/legal/content/confidentialite-content";
import { LegalPageShell } from "@/components/legal";
import { buildLegalWebPageJsonLd } from "@/lib/legal/json-ld";
import {
  CONFIDENTIALITE_SECTIONS,
  SITE_LEGAL_INFO,
} from "@/lib/legal/site-legal-info";
import { pageMetadata } from "@/lib/seo";

const title = "Politique de confidentialité";
const description = `Politique de confidentialité de ${SITE_LEGAL_INFO.brandName} — formulaire de contact, droits RGPD, cookies.`;

export const metadata = pageMetadata({
  title,
  description,
  path: "/politique-de-confidentialite/",
});

export default function PrivacyPage() {
  return (
    <LegalPageShell
      badge="Confidentialité"
      title={title}
      description="Comment les données du formulaire de contact sont susceptibles d'être traitées, et quels sont vos droits."
      sections={CONFIDENTIALITE_SECTIONS}
      jsonLd={buildLegalWebPageJsonLd({
        name: title,
        description,
        path: "/politique-de-confidentialite/",
      })}
    >
      <ConfidentialiteContent />
    </LegalPageShell>
  );
}
