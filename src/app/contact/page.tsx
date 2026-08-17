import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { SocialLinks } from "@/components/contact/social-links";
import { PageHero } from "@/components/ui/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Échangeons sur votre besoin. Un premier échange permet de comprendre votre contexte et d'imaginer l'accompagnement le plus juste — coaching, bilan de compétences ou formation à La Réunion.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Échangeons sur votre besoin."
        description="Un premier échange permet de comprendre votre contexte et d'imaginer l'accompagnement le plus juste."
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
