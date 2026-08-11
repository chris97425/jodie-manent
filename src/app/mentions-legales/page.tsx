import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalBlock,
  LegalDocument,
} from "@/components/legal/legal-document";
import { PLACEHOLDER, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site vitrine ${SITE_NAME}.`,
  robots: { index: true, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20">
      <LegalDocument title="Mentions légales">
        <LegalBlock title="Éditeur du site">
          <p>
            Le site <strong>{SITE_NAME}</strong> est édité par :
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Nom / raison sociale : {SITE_NAME}</li>
            <li>Statut / forme juridique : {PLACEHOLDER}</li>
            <li>SIREN / SIRET : {PLACEHOLDER}</li>
            <li>Adresse : {PLACEHOLDER}</li>
            <li>Email : {PLACEHOLDER}</li>
            <li>Téléphone : {PLACEHOLDER}</li>
            <li>Directeur de la publication : {PLACEHOLDER}</li>
          </ul>
        </LegalBlock>

        <LegalBlock title="Hébergement">
          <p>
            Ce site est hébergé via <strong>GitHub Pages</strong> (GitHub, Inc.).
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Hébergeur : GitHub Pages</li>
            <li>
              Adresse : 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107,
              États-Unis
            </li>
            <li>
              Site :{" "}
              <a
                href="https://pages.github.com/"
                className="text-coral-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                pages.github.com
              </a>
            </li>
            <li>
              URL du présent site :{" "}
              <a
                href={SITE_URL}
                className="text-coral-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              >
                {SITE_URL}
              </a>
            </li>
          </ul>
        </LegalBlock>

        <LegalBlock title="Propriété intellectuelle">
          <p>
            L&apos;ensemble des contenus présents sur ce site (textes, éléments
            graphiques, logo) est protégé. Toute reproduction non autorisée est
            interdite. Le logo « Jodie M. » appartient à {SITE_NAME}.
          </p>
        </LegalBlock>

        <LegalBlock title="Données personnelles">
          <p>
            Pour toute information relative au traitement des données, consultez
            la{" "}
            <Link
              href="/politique-de-confidentialite/"
              className="text-coral-700 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
            >
              politique de confidentialité
            </Link>
            . Les coordonnées de contact du responsable de traitement restent :{" "}
            {PLACEHOLDER}.
          </p>
        </LegalBlock>

        <LegalBlock title="Responsabilité">
          <p>
            Les informations présentées sur ce site vitrine ont un caractère
            informatif. {SITE_NAME} s&apos;efforce d&apos;en assurer
            l&apos;exactitude, sans garantie d&apos;exhaustivité. Les offres sont
            proposées sur devis.
          </p>
        </LegalBlock>
      </LegalDocument>
    </div>
  );
}
