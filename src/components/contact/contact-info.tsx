import Image from "next/image";
import { MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { LinkedInIcon } from "@/components/ui/social-icons";
import { IMAGES, withBasePath } from "@/lib/assets";
import { LINKEDIN_URL, SITE_COVERAGE, SITE_LOCATION } from "@/lib/site";

export function ContactInfo() {
  return (
    <aside className="rounded-3xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-4">
        <Image
          src={withBasePath(IMAGES.hero)}
          alt="Jodie Manent, coach professionnelle à La Réunion"
          width={72}
          height={72}
          className="h-[4.5rem] w-[4.5rem] rounded-2xl border border-cream-200 object-cover object-[center_20%] shadow-sm"
        />
        <div>
          <p className="font-display text-xl font-semibold text-ink-700">
            Jodie Manent
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Coach professionnelle · La Réunion
          </p>
        </div>
      </div>

      <BrandLogo size={72} className="mb-5 h-16 w-16" />

      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-700">
        Me joindre
      </h2>
      <p className="mt-3 text-base leading-relaxed text-ink-500">
        Un premier échange permet de comprendre votre contexte et d&apos;imaginer
        l&apos;accompagnement le plus juste. Le formulaire est le canal d&apos;écriture
        — LinkedIn pour un message professionnel.
      </p>

      <ul className="mt-6 space-y-4">
        <li className="flex gap-3 text-ink-600">
          <MapPin
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-coral-600"
          />
          <div>
            <p className="font-medium text-ink-700">Localisation</p>
            <p>{SITE_LOCATION}</p>
            <p className="text-sm text-ink-500">{SITE_COVERAGE}</p>
          </div>
        </li>
        <li>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 rounded-xl text-ink-700 transition-colors hover:text-coral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
          >
            <LinkedInIcon className="mt-1 h-5 w-5 shrink-0 text-coral-600" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-sm text-ink-500 underline-offset-2 hover:underline">
                linkedin.com/in/jodie-manent-8b727717
              </p>
            </div>
          </a>
        </li>
      </ul>
    </aside>
  );
}
