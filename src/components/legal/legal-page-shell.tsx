import type { ReactNode } from "react";
import { LegalContactBanner } from "@/components/legal/legal-contact-banner";
import { LegalHeader } from "@/components/legal/legal-header";
import { LegalToc } from "@/components/legal/legal-toc";
import { Container } from "@/components/ui/container";
import type { LegalSectionNav } from "@/lib/legal/site-legal-info";

type LegalPageShellProps = {
  badge: string;
  title: string;
  description: string;
  sections: LegalSectionNav[];
  children: ReactNode;
  jsonLd: Record<string, unknown>;
};

export function LegalPageShell({
  badge,
  title,
  description,
  sections,
  children,
  jsonLd,
}: LegalPageShellProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalHeader badge={badge} title={title} description={description} />
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:items-start lg:gap-14">
            <div className="lg:sticky lg:top-28">
              <LegalToc sections={sections} />
            </div>
            <article className="min-w-0 space-y-10">{children}</article>
          </div>
          <LegalContactBanner />
        </Container>
      </section>
    </>
  );
}
