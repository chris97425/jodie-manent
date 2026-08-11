import { SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";

export function buildLegalWebPageJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_LEGAL_INFO.websiteUrl}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: input.name,
    description: input.description,
    url,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_LEGAL_INFO.brandName,
      url: SITE_LEGAL_INFO.websiteUrl,
    },
    dateModified: "2026-08-11",
    publisher: {
      "@type": "Person",
      name: SITE_LEGAL_INFO.publicationDirector,
    },
  };
}
