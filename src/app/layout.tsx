import type { Metadata } from "next";
import { Great_Vibes, Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  SITE_DESCRIPTION,
  SITE_HEADLINE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
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
  description: `${SITE_HEADLINE}. ${SITE_DESCRIPTION}`,
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
        url: "/logo_jodie.png",
        width: 512,
        height: 512,
        alt: "Logo Jodie M.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE_NAME} — Coach professionnelle`,
    description: SITE_HEADLINE,
    images: ["/logo_jodie.png"],
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
    <html lang="fr" className={`${manrope.variable} ${greatVibes.variable}`}>
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-3 focus:text-ink-900 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-coral-600"
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
