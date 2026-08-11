import type { Metadata } from "next";
import {
  LegalBlock,
  LegalDocument,
} from "@/components/legal/legal-document";
import { PLACEHOLDER, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site ${SITE_NAME} — formulaire de contact et données personnelles.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <LegalDocument title="Politique de confidentialité">
        <p>
          La présente politique décrit la manière dont les données personnelles
          sont susceptibles d&apos;être traitées via le site vitrine{" "}
          {SITE_NAME}. Certaines informations restent à compléter (
          {PLACEHOLDER}).
        </p>

        <LegalBlock title="Responsable du traitement">
          <p>
            Responsable : {SITE_NAME}
            <br />
            Coordonnées : {PLACEHOLDER}
          </p>
        </LegalBlock>

        <LegalBlock title="Données collectées via le formulaire de contact">
          <p>
            Le formulaire de contact (actuellement en <strong>mode démo</strong>
            ) est conçu pour collecter :
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Nom</li>
            <li>Adresse email</li>
            <li>Contenu du message</li>
          </ul>
          <p>
            En mode démo, aucune donnée n&apos;est transmise à un serveur distant
            : la validation et le message de succès sont simulés localement dans
            le navigateur. Lorsqu&apos;un envoi réel sera activé, la finalité
            sera la réponse aux demandes de contact et de devis.
          </p>
        </LegalBlock>

        <LegalBlock title="Base légale et finalités">
          <p>
            Base légale envisagée : intérêt légitime et/ou mesures
            précontractuelles à la demande de la personne (réponse à une
            sollicitation). Finalités : traitement des demandes, suivi
            commercial léger lié aux offres de coaching, bilans, formations ou
            mentorat.
          </p>
        </LegalBlock>

        <LegalBlock title="Durée de conservation">
          <p>
            Durée de conservation des messages de contact : {PLACEHOLDER} (à
            définir, par exemple le temps nécessaire au traitement de la demande
            puis archivage limité).
          </p>
        </LegalBlock>

        <LegalBlock title="Destinataires">
          <p>
            Destinataires : {SITE_NAME} / {PLACEHOLDER}. Aucune revente de
            données. En cas d&apos;hébergement ou d&apos;outil tiers (ex.
            Supabase), les détails seront précisés ici : {PLACEHOLDER}.
          </p>
        </LegalBlock>

        <LegalBlock title="Cookies et mesure d'audience">
          <p>
            Ce site vitrine statique n&apos;utilise pas, à ce jour, de cookies
            publicitaires. Si des outils d&apos;audience sont ajoutés
            ultérieurement, cette section sera mise à jour ({PLACEHOLDER}).
          </p>
        </LegalBlock>

        <LegalBlock title="Vos droits">
          <p>
            Conformément au RGPD, vous pouvez demander l&apos;accès, la
            rectification, l&apos;effacement, la limitation, l&apos;opposition,
            ainsi que la portabilité lorsque applicable. Pour exercer vos droits
            : {PLACEHOLDER}. Vous pouvez également introduire une réclamation
            auprès de la CNIL (cnil.fr).
          </p>
        </LegalBlock>

        <LegalBlock title="Sécurité">
          <p>
            Des mesures raisonnables seront mises en œuvre pour protéger les
            données lors de l&apos;activation d&apos;un envoi réel. Détails
            techniques : {PLACEHOLDER}.
          </p>
        </LegalBlock>

        <LegalBlock title="Mise à jour">
          <p>
            Cette politique pourra être mise à jour. Dernière mise à jour du
            gabarit : août 2026.
          </p>
        </LegalBlock>
      </LegalDocument>
    </div>
  );
}
