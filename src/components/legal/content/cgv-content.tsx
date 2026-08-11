import {
  LegalBulletList,
  LegalInfoRow,
  LegalSection,
} from "@/components/legal";
import { CGV_SECTIONS, SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";

export function CgvContent() {
  return (
    <>
      <LegalSection id="objet" index={0} title={CGV_SECTIONS[0].label}>
        <p>
          Les présentes Conditions Générales de Vente (CGV) régissent les
          relations entre {SITE_LEGAL_INFO.brandName} et toute personne
          physique ou morale souhaitant bénéficier de ses prestations de
          coaching, bilans de compétences ou formations. Elles s&apos;appliquent
          à toute commande acceptée, sauf conditions particulières écrites
          convenues entre les parties.
        </p>
      </LegalSection>

      <LegalSection id="prestations" index={1} title={CGV_SECTIONS[1].label}>
        <p>Les prestations proposées peuvent notamment inclure :</p>
        <LegalBulletList
          items={[
            "Coaching professionnel — accompagnement des transitions professionnelles ;",
            "Bilans de compétences — approche des Intelligences et Natures Multiples, pour construire un projet professionnel à son image ;",
            "Formations — thèmes liés aux intelligences multiples, aux talents et aux transitions.",
          ]}
        />
        <p>
          La liste détaillée des prestations, le format (présentiel /
          distanciel), le nombre de séances et les modalités sont précisés lors
          de l&apos;échange préalable et figurent sur le devis.
        </p>
      </LegalSection>

      <LegalSection id="tarifs" index={2} title={CGV_SECTIONS[2].label}>
        <p>
          Les prestations sont proposées <strong>sur devis</strong>. Aucun tarif
          n&apos;est publié sur le site. Le devis est gratuit et sans
          engagement. Il précise le périmètre, le prix et les conditions
          particulières applicables.
        </p>
      </LegalSection>

      <LegalSection id="reservation" index={3} title={CGV_SECTIONS[3].label}>
        <p>
          La réservation devient ferme après accord écrit sur le devis et
          validation des créneaux convenus d&apos;un commun accord. Un échange
          préalable peut être nécessaire pour qualifier le besoin.
        </p>
      </LegalSection>

      <LegalSection id="paiement" index={4} title={CGV_SECTIONS[4].label}>
        <p>
          Les modalités de paiement (échéancier, moyens acceptés, acompte
          éventuel) sont convenues avec le client et rappelées sur le devis.
        </p>
        <dl>
          <LegalInfoRow label="Détails" value="[À COMPLÉTER]" />
        </dl>
      </LegalSection>

      <LegalSection id="annulation" index={5} title={CGV_SECTIONS[5].label}>
        <p>
          Les conditions d&apos;annulation et de report (délai de prévenance,
          éventuels frais) sont précisées sur le devis :{" "}
          <strong>[À COMPLÉTER]</strong>.
        </p>
      </LegalSection>

      <LegalSection id="retractation" index={6} title={CGV_SECTIONS[6].label}>
        <p>
          Conformément au Code de la consommation, le client consommateur
          dispose d&apos;un délai de quatorze (14) jours pour exercer son droit
          de rétractation, sans avoir à motiver sa décision, lorsque ce droit
          s&apos;applique.
        </p>
        <p>
          Exceptions : lorsque l&apos;exécution de la prestation a commencé
          avant la fin du délai de rétractation à la demande expresse du client,
          celui-ci peut être tenu au paiement du service fourni jusqu&apos;à la
          communication de sa décision de se rétracter, dans les conditions
          légales.
        </p>
      </LegalSection>

      <LegalSection
        id="responsabilite"
        index={7}
        title={CGV_SECTIONS[7].label}
      >
        <p>
          {SITE_LEGAL_INFO.brandName} est tenue à une obligation de moyens dans
          le cadre de ses accompagnements. Elle ne saurait garantir un résultat
          professionnel déterminé. Sa responsabilité ne pourra être engagée en
          cas de force majeure, ni pour des dommages indirects.
        </p>
      </LegalSection>

      <LegalSection id="reclamations" index={8} title={CGV_SECTIONS[8].label}>
        <p>
          Toute réclamation doit d&apos;abord être adressée à{" "}
          {SITE_LEGAL_INFO.brandName} ({SITE_LEGAL_INFO.contactEmail}). En cas
          d&apos;échec de la résolution amiable, le client consommateur peut
          recourir à un médiateur de la consommation :{" "}
          <strong>[À COMPLÉTER]</strong>.
        </p>
      </LegalSection>

      <LegalSection
        id="droit-applicable"
        index={9}
        title={CGV_SECTIONS[9].label}
      >
        <LegalBulletList
          items={[
            "Les CGV sont régies par le droit français.",
            "À défaut de règlement amiable, les litiges relèvent des juridictions compétentes, notamment celles de La Réunion, sous réserve des dispositions protectrices des consommateurs.",
          ]}
        />
      </LegalSection>
    </>
  );
}
