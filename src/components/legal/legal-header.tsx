import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";

type LegalHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export function LegalHeader({ badge, title, description }: LegalHeaderProps) {
  return (
    <header className="border-b border-cream-200 bg-cream-50 pt-28 pb-10 sm:pt-32 sm:pb-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-ink-600 transition-colors hover:text-coral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:text-coral-900"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
        <p className="mt-6 inline-flex rounded-full border border-coral-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-coral-800">
          {badge}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-ink-700 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          {description}
        </p>
        <p className="mt-4 text-sm text-ink-500">
          Dernière mise à jour : {SITE_LEGAL_INFO.lastUpdated}
        </p>
      </div>
    </header>
  );
}
