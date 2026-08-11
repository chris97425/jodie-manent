import type { Metadata } from "next";
import { MentionsContent } from "@/components/legal/content/mentions-content";
import { LegalPageShell } from "@/components/legal";
import { buildLegalWebPageJsonLd } from "@/lib/legal/json-ld";
import {
  MENTIONS_LEGALES_SECTIONS,
  SITE_LEGAL_INFO,
} from "@/lib/legal/site-legal-info";

const title = "Mentions légales";
const description = `Mentions légales du site vitrine ${SITE_LEGAL_INFO.brandName} — éditeur, hébergement GitHub Pages, propriété intellectuelle.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} · ${SITE_LEGAL_INFO.brandName}`,
    description,
    url: `${SITE_LEGAL_INFO.websiteUrl}/mentions-legales/`,
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageShell
      badge="Informations légales"
      title={title}
      description="Identité de l'éditeur, hébergement, propriété intellectuelle et responsabilités liées au site vitrine."
      sections={MENTIONS_LEGALES_SECTIONS}
      jsonLd={buildLegalWebPageJsonLd({
        name: title,
        description,
        path: "/mentions-legales/",
      })}
    >
      <MentionsContent />
    </LegalPageShell>
  );
}
