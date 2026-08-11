import {
  LegalBulletList,
  LegalInfoRow,
  LegalSection,
} from "@/components/legal";
import {
  CONFIDENTIALITE_SECTIONS,
  LEGAL_HOSTS,
  SITE_LEGAL_INFO,
} from "@/lib/legal/site-legal-info";

export function ConfidentialiteContent() {
  return (
    <>
      <LegalSection
        id="responsable"
        index={0}
        title={CONFIDENTIALITE_SECTIONS[0].label}
      >
        <p>
          Le responsable de traitement est {SITE_LEGAL_INFO.brandName},{" "}
          {SITE_LEGAL_INFO.activity}.
        </p>
        <dl>
          <LegalInfoRow
            label="Adresse"
            value={SITE_LEGAL_INFO.registeredOffice}
          />
          <LegalInfoRow label="Email" value={SITE_LEGAL_INFO.contactEmail} />
          <LegalInfoRow
            label="Téléphone"
            value={SITE_LEGAL_INFO.contactPhone}
          />
        </dl>
      </LegalSection>

      <LegalSection
        id="donnees"
        index={1}
        title={CONFIDENTIALITE_SECTIONS[1].label}
      >
        <p>
          Via le formulaire de contact (actuellement en mode démo), les données
          susceptibles d&apos;être collectées sont uniquement celles que vous
          saisissez :
        </p>
        <LegalBulletList items={["Nom", "Adresse email", "Message"]} />
        <p>
          En mode démo, aucune donnée n&apos;est transmise à un serveur distant :
          la validation et le message de succès sont simulés localement.
        </p>
      </LegalSection>

      <LegalSection
        id="finalites"
        index={2}
        title={CONFIDENTIALITE_SECTIONS[2].label}
      >
        <LegalBulletList
          items={[
            "Finalité : répondre aux demandes de contact et de devis.",
            "Base légale : consentement et/ou mesures précontractuelles à votre demande ; intérêt légitime pour le suivi de la relation.",
            "Aucune prospection commerciale sans votre accord préalable.",
          ]}
        />
      </LegalSection>

      <LegalSection
        id="conservation"
        index={3}
        title={CONFIDENTIALITE_SECTIONS[3].label}
      >
        <p>
          Durée de conservation des messages de contact :{" "}
          <strong>[À COMPLÉTER]</strong> (à définir, par exemple le temps
          nécessaire au traitement de la demande puis archivage limité).
        </p>
      </LegalSection>

      <LegalSection
        id="destinataires"
        index={4}
        title={CONFIDENTIALITE_SECTIONS[4].label}
      >
        <p>
          Destinataires : {SITE_LEGAL_INFO.brandName} uniquement. Aucune revente
          de données. L&apos;hébergement du site statique est assuré par{" "}
          {LEGAL_HOSTS.name} ({LEGAL_HOSTS.service}), situé aux États-Unis ;
          le cas échéant, le transfert s&apos;appuie sur les mécanismes
          applicables (clauses contractuelles types / cadre de protection des
          données en vigueur).
        </p>
      </LegalSection>

      <LegalSection
        id="droits"
        index={5}
        title={CONFIDENTIALITE_SECTIONS[5].label}
      >
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <LegalBulletList
          items={[
            "accès, rectification, effacement ;",
            "opposition, limitation du traitement ;",
            "portabilité, lorsque applicable.",
          ]}
        />
        <p>
          Pour les exercer : {SITE_LEGAL_INFO.contactEmail}. Vous pouvez
          également introduire une réclamation auprès de la CNIL (
          <a
            href={SITE_LEGAL_INFO.cnilUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral-800 underline-offset-2 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
          >
            cnil.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection
        id="cookies"
        index={6}
        title={CONFIDENTIALITE_SECTIONS[6].label}
      >
        <p>
          Aucun cookie de suivi n&apos;est utilisé par l&apos;éditeur sur ce
          site vitrine statique à ce jour.
        </p>
      </LegalSection>

      <LegalSection
        id="securite"
        index={7}
        title={CONFIDENTIALITE_SECTIONS[7].label}
      >
        <p>
          Des mesures raisonnables seront mises en œuvre lors de
          l&apos;activation d&apos;un envoi réel des messages. Le site est servi
          en HTTPS via {LEGAL_HOSTS.service}.
        </p>
      </LegalSection>

      <LegalSection
        id="modifications"
        index={8}
        title={CONFIDENTIALITE_SECTIONS[8].label}
      >
        <p>
          La présente politique peut être mise à jour. Dernière mise à jour :{" "}
          {SITE_LEGAL_INFO.lastUpdated}.
        </p>
      </LegalSection>
    </>
  );
}
