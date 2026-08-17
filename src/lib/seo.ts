import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const OG_IMAGE = {
  url: "/images/jodie-photo-hero.jpg",
  width: 1280,
  height: 1920,
  alt: "Jodie Manent, coach professionnelle, assise sur un banc corail entourée de végétation tropicale",
} as const;

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(input.path);
  const fullTitle = `${input.title} · ${SITE_NAME}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url,
      locale: "fr_FR",
      type: "website",
      siteName: SITE_NAME,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: input.description,
      images: [OG_IMAGE.url],
    },
  };
}
