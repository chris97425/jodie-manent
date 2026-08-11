import { MapPin, Mail, Phone } from "lucide-react";
import { CONTACT, PLACEHOLDER, SITE_COVERAGE } from "@/lib/site";

export function ContactInfo() {
  return (
    <aside className="rounded-2xl border border-cream-200 bg-cream-50 p-6 sm:p-8">
      <h2 className="text-2xl font-bold tracking-tight text-ink-700">
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
