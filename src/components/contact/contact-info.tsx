import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { withBasePath } from "@/lib/assets";
import { CONTACT, PLACEHOLDER, SITE_COVERAGE } from "@/lib/site";

export function ContactInfo() {
  return (
    <aside className="rounded-2xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
      <div className="mb-5 flex items-center gap-4">
        <Image
          src={withBasePath("/images/jodie-parc.jpg")}
          alt="Jodie Manent dans un parc à La Réunion"
          width={72}
          height={72}
          className="h-18 w-18 h-[4.5rem] w-[4.5rem] rounded-2xl border border-cream-200 object-cover shadow-sm"
        />
        <div>
          <p className="font-script text-3xl leading-none text-coral-500">
            Jodie
          </p>
          <p className="mt-1 text-sm text-ink-500">
            Coach professionnelle · La Réunion
          </p>
        </div>
      </div>

      <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-700">
        Coordonnées
      </h2>
      <p className="mt-3 text-base leading-relaxed text-ink-500">
        Les coordonnées définitives seront renseignées ultérieurement. En
        attendant, utilisez le formulaire (mode démo) ou les réseaux sociaux.
      </p>

      <ul className="mt-6 space-y-4">
        <li className="flex gap-3 text-ink-600">
          <MapPin
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-coral-800"
          />
          <div>
            <p className="font-medium text-ink-700">Localisation</p>
            <p>{CONTACT.location}</p>
            <p className="text-sm text-ink-500">
              Interventions : {SITE_COVERAGE}
            </p>
            <p className="mt-1 text-sm text-ink-500">
              Adresse postale : {PLACEHOLDER}
            </p>
          </div>
        </li>
        <li className="flex gap-3 text-ink-600">
          <Mail
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-coral-800"
          />
          <div>
            <p className="font-medium text-ink-700">Email</p>
            <p>{CONTACT.email}</p>
          </div>
        </li>
        <li className="flex gap-3 text-ink-600">
          <Phone
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-coral-800"
          />
          <div>
            <p className="font-medium text-ink-700">Téléphone</p>
            <p>{CONTACT.phone}</p>
          </div>
        </li>
      </ul>
    </aside>
  );
}
