import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";
import { PLACEHOLDER } from "@/lib/site";

export function LegalContactBanner() {
  const email = SITE_LEGAL_INFO.contactEmail as string;
  const isPlaceholder =
    email === PLACEHOLDER || email.includes("À COMPLÉTER");

  return (
    <aside className="mt-12 rounded-2xl border border-cream-200 bg-cream-100 px-6 py-8 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-800">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-700">
            Une question juridique ou RGPD ?
          </h2>
          <p className="mt-2 text-base leading-relaxed text-ink-500">
            Jodie répond sous 48&nbsp;h ouvrées. Email :{" "}
            {isPlaceholder ? (
              <span className="font-medium text-ink-700">{PLACEHOLDER}</span>
            ) : (
              <a
                href={`mailto:${email}`}
                className="font-medium text-coral-800 underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              >
                {email}
              </a>
            )}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact/" className="min-w-[11rem]">
            <Mail aria-hidden="true" className="h-4 w-4" />
            Écrire via le formulaire
          </Button>
          <Link
            href="/politique-de-confidentialite/"
            className="inline-flex min-h-11 items-center rounded-lg px-4 text-sm font-semibold text-ink-700 transition-colors hover:bg-cream-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600 active:bg-white"
          >
            Voir la confidentialité
          </Link>
        </div>
      </div>
    </aside>
  );
}
