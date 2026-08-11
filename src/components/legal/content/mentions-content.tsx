import Link from "next/link";
import {
  LegalBulletList,
  LegalInfoRow,
  LegalSection,
} from "@/components/legal";
import {
  LEGAL_HOSTS,
  MENTIONS_LEGALES_SECTIONS,
  SITE_LEGAL_INFO,
} from "@/lib/legal/site-legal-info";

export function MentionsContent() {
  return (
    <>
      <LegalSection
        id="editeur"
        index={0}
        title={MENTIONS_LEGALES_SECTIONS[0].label}
      >
        <p>
          Le site vitrine {SITE_LEGAL_INFO.brandName} est édité par{" "}
          {SITE_LEGAL_INFO.brandName}, {SITE_LEGAL_INFO.activity}.
        </p>
        <dl>
          <LegalInfoRow
            label="Raison sociale"
            value={SITE_LEGAL_INFO.companyLegalName}
          />
          <LegalInfoRow
            label="Forme juridique"
            value={SITE_LEGAL_INFO.legalForm}
          />
          <LegalInfoRow
            label="SIREN / SIRET"
            value={SITE_LEGAL_INFO.sirenSiret}
          />
          <LegalInfoRow label="RCS" value={SITE_LEGAL_INFO.rcsNumber} />
          <LegalInfoRow
            label="Siège"
            value={
              <>
                {SITE_LEGAL_INFO.registeredOffice}{" "}
                <span className="text-ink-400">
                  ({SITE_LEGAL_INFO.registeredOfficeHint})
                </span>
              </>
            }
          />
          <LegalInfoRow
            label="Directrice de publication"
            value={SITE_LEGAL_INFO.publicationDirector}
          />
          <LegalInfoRow
            label="Email"
            value={SITE_LEGAL_INFO.contactEmail}
          />
          <LegalInfoRow
            label="Téléphone"
            value={SITE_LEGAL_INFO.contactPhone}
          />
          <LegalInfoRow
            label="Site"
            value={
              <a
                href={SITE_LEGAL_INFO.websiteUrl}
                className="text-coral-800 underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              >
                {SITE_LEGAL_INFO.websiteUrl}
              </a>
            }
          />
          <LegalInfoRow
            label="Nom de domaine à venir"
            value={SITE_LEGAL_INFO.websiteDisplay}
          />
        </dl>
      </LegalSection>

      <LegalSection
        id="hebergement"
        index={1}
        title={MENTIONS_LEGALES_SECTIONS[1].label}
      >
        <p>
          Le site est hébergé en tant que site statique via{" "}
          <strong>{LEGAL_HOSTS.service}</strong>, sans serveur applicatif.
        </p>
        <dl>
          <LegalInfoRow label="Hébergeur" value={LEGAL_HOSTS.name} />
          <LegalInfoRow label="Adresse" value={LEGAL_HOSTS.address} />
          <LegalInfoRow
            label="Site"
            value={
              <a
                href={LEGAL_HOSTS.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral-800 underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
              >
                {LEGAL_HOSTS.url}
              </a>
            }
          />
        </dl>
      </LegalSection>

      <LegalSection
        id="activite"
        index={2}
        title={MENTIONS_LEGALES_SECTIONS[2].label}
      >
        <p>
          Ce site présente les activités de coaching professionnel, de bilans de
          compétences et de formations liées aux Intelligences et Natures
          Multiples. Il s&apos;agit d&apos;un site vitrine informatif ; les
          prestations sont proposées sur devis.
        </p>
      </LegalSection>

      <LegalSection
        id="propriete-intellectuelle"
        index={3}
        title={MENTIONS_LEGALES_SECTIONS[3].label}
      >
        <p>
          L&apos;ensemble des contenus du site (textes, éléments graphiques,
          structure, logo « Jodie M. ») est protégé. Toute reproduction,
          représentation ou exploitation, totale ou partielle, sans autorisation
          préalable de {SITE_LEGAL_INFO.brandName} est interdite.
        </p>
      </LegalSection>

      <LegalSection
        id="responsabilite"
        index={4}
        title={MENTIONS_LEGALES_SECTIONS[4].label}
      >
        <p>
          Les informations sont fournies à titre indicatif. Le site est
          actuellement en démonstration. Les éléments encore manquants (
          {SITE_LEGAL_INFO.companyLegalName}) seront complétés à la mise en
          production. {SITE_LEGAL_INFO.brandName} ne saurait être tenue
          responsable d&apos;une utilisation non conforme des informations
          publiées.
        </p>
      </LegalSection>

      <LegalSection
        id="donnees-personnelles"
        index={5}
        title={MENTIONS_LEGALES_SECTIONS[5].label}
      >
        <p>
          Le traitement des données personnelles est décrit dans la{" "}
          <Link
            href="/politique-de-confidentialite/"
            className="font-semibold text-coral-800 underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
          >
            politique de confidentialité
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection
        id="cookies"
        index={6}
        title={MENTIONS_LEGALES_SECTIONS[6].label}
      >
        <p>
          Site statique hébergé sur GitHub Pages : aucun cookie de suivi
          publicitaire ou d&apos;analyse n&apos;est déposé par l&apos;éditeur à
          ce jour.
        </p>
      </LegalSection>

      <LegalSection
        id="securite"
        index={7}
        title={MENTIONS_LEGALES_SECTIONS[7].label}
      >
        <p>
          L&apos;accès au site s&apos;effectue via HTTPS. Les mesures de sécurité
          relèvent notamment de l&apos;infrastructure de {LEGAL_HOSTS.name}.
        </p>
      </LegalSection>

      <LegalSection
        id="modifications"
        index={8}
        title={MENTIONS_LEGALES_SECTIONS[8].label}
      >
        <p>
          {SITE_LEGAL_INFO.brandName} se réserve le droit de modifier les
          présentes mentions à tout moment. La date de mise à jour figure en
          tête de page.
        </p>
      </LegalSection>

      <LegalSection
        id="droit-applicable"
        index={9}
        title={MENTIONS_LEGALES_SECTIONS[9].label}
      >
        <LegalBulletList
          items={[
            "Les présentes mentions sont soumises au droit français.",
            "En cas de litige, et à défaut de résolution amiable, les tribunaux de La Réunion seront compétents, sous réserve des règles d'ordre public applicables aux consommateurs.",
          ]}
        />
      </LegalSection>
    </>
  );
}
