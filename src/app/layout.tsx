import type { Metadata } from "next";
import { Fraunces, Inter, Parisienne } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  SITE_DESCRIPTION,
  SITE_HEADLINE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

/** Titres — serif éditoriale nette (remplace Manrope trop arrondie) */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

/** Corps — sans-serif neutre et lisible */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** Accent script rare — logo / wordmark uniquement */
const parisienne = Parisienne({
  variable: "--font-parisienne",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Coach professionnelle · La Réunion`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Coach professionnelle`,
    description: SITE_HEADLINE,
    images: [
      {
        url: "/images/jodie-photo-hero.jpg",
        width: 1280,
        height: 1920,
        alt: "Jodie Manent, coach professionnelle, assise sur un banc corail entourée de végétation tropicale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Coach professionnelle`,
    description: SITE_HEADLINE,
    images: ["/images/jodie-photo-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${fraunces.variable} ${inter.variable} ${parisienne.variable}`}
    >
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-ink-700 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-coral-600"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
