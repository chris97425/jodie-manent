import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { SocialLinks } from "@/components/contact/social-links";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Jodie Manent pour un coaching, un bilan de compétences ou une formation — formulaire démo et liens réseaux.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Échangeons"
        description="Décrivez votre besoin. Réponse sur devis — formulaire en mode démo pour cette vitrine."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <ContactForm />
            <div className="space-y-6">
              <ContactInfo />
              <SocialLinks />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
