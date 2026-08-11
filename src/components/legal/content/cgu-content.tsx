import {
  LegalBulletList,
  LegalSection,
} from "@/components/legal";
import { CGU_SECTIONS, SITE_LEGAL_INFO } from "@/lib/legal/site-legal-info";

export function CguContent() {
  return (
    <>
      <LegalSection id="objet" index={0} title={CGU_SECTIONS[0].label}>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent
          les conditions dans lesquelles tout visiteur peut accéder et utiliser
          le site vitrine {SITE_LEGAL_INFO.brandName} (
          {SITE_LEGAL_INFO.websiteUrl} — nom de domaine à venir :{" "}
          {SITE_LEGAL_INFO.websiteDisplay}).
        </p>
      </LegalSection>

      <LegalSection id="acces" index={1} title={CGU_SECTIONS[1].label}>
        <p>
          L&apos;accès au site est gratuit. Il s&apos;agit d&apos;un site
          statique de présentation des activités de{" "}
          {SITE_LEGAL_INFO.brandName}. Aucun compte utilisateur n&apos;est
          requis pour consulter les pages publiques.
        </p>
      </LegalSection>

      <LegalSection id="contenus" index={2} title={CGU_SECTIONS[2].label}>
        <p>
          Les contenus du site sont la propriété de {SITE_LEGAL_INFO.brandName}.
          Toute utilisation est limitée à un usage personnel et non commercial.
          Toute extraction, reproduction ou redistribution sans autorisation
          préalable est interdite.
        </p>
      </LegalSection>

      <LegalSection id="liens" index={3} title={CGU_SECTIONS[3].label}>
        <p>
          Le site peut renvoyer vers des plateformes tierces (LinkedIn,
          Facebook, Instagram, Malt). {SITE_LEGAL_INFO.brandName} n&apos;est pas
          responsable des contenus, pratiques ou disponibilités de ces
          plateformes externes.
        </p>
      </LegalSection>

      <LegalSection
        id="responsabilite"
        index={4}
        title={CGU_SECTIONS[4].label}
      >
        <LegalBulletList
          items={[
            "Le site est actuellement proposé en démonstration ; sa disponibilité n'est pas garantie de manière continue.",
            "Les informations ont un caractère informatif et ne constituent pas un conseil personnalisé tant qu'un accompagnement n'a pas été formalisé.",
            `${SITE_LEGAL_INFO.brandName} ne saurait être responsable des dommages résultant d'une interruption, d'une erreur d'affichage ou d'un usage non conforme du site.`,
          ]}
        />
      </LegalSection>

      <LegalSection
        id="modifications"
        index={5}
        title={CGU_SECTIONS[5].label}
      >
        <p>
          Les CGU peuvent être modifiées à tout moment. La version applicable
          est celle publiée sur le site à la date de consultation, avec
          indication de la dernière mise à jour (
          {SITE_LEGAL_INFO.lastUpdated}).
        </p>
      </LegalSection>

      <LegalSection
        id="droit-applicable"
        index={6}
        title={CGU_SECTIONS[6].label}
      >
        <p>
          Les présentes CGU sont soumises au droit français. Tout litige relatif
          à leur interprétation ou exécution relèvera, à défaut d&apos;accord
          amiable, des juridictions compétentes, notamment celles de La Réunion,
          sous réserve des règles protectrices applicables aux consommateurs.
        </p>
      </LegalSection>
    </>
  );
}
