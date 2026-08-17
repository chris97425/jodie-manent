import { LinkedInIcon } from "@/components/ui/social-icons";
import { LINKEDIN_URL } from "@/lib/site";

export function SocialLinks() {
  return (
    <div className="rounded-2xl border border-cream-200 bg-white p-6 sm:p-8">
      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-700">
        LinkedIn
      </h2>
      <p className="mt-3 text-base text-ink-500">
        Retrouvez Jodie Manent sur LinkedIn pour suivre l&apos;actualité et
        échanger.
      </p>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex min-h-11 items-center gap-3 rounded-lg px-3 text-ink-700 transition-colors hover:bg-cream-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800"
      >
        <LinkedInIcon className="h-5 w-5 shrink-0 text-coral-600" />
        <span>Profil LinkedIn</span>
      </a>
    </div>
  );
}
