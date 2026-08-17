import type { Metadata } from "next";
import { Fraunces, Inter, Parisienne } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { rootMetadata } from "@/lib/root-metadata";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const parisienne = Parisienne({
  variable: "--font-parisienne",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = rootMetadata;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/jodie-photo-hero.jpg`,
  description:
    "Coach professionnelle certifiée RNCP, formatrice et consultante. Coaching, bilans de compétences et formations Intelligences et Natures Multiples à La Réunion.",
  areaServed: ["La Réunion", "Océan Indien"],
  availableLanguage: "fr",
  sameAs: ["https://www.linkedin.com/in/jodie-manent-8b727717/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
