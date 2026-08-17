import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_HEADLINE, SITE_NAME, SITE_URL } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Coach professionnelle, bilan de compétences et formation · La Réunion`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Coach professionnelle à La Réunion`,
    description: SITE_HEADLINE,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Coach professionnelle à La Réunion`,
    description: SITE_HEADLINE,
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};
