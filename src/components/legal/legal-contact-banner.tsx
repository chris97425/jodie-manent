import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LegalContactBanner() {
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
            Le formulaire de contact est le seul canal d&apos;écriture. Aucun
            e-mail n&apos;est publié sur ce site.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact/" className="min-w-[11rem]">
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
