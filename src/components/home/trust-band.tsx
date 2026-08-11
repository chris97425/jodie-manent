import { Container } from "@/components/ui/container";

const ITEMS = [
  "Coach professionnelle certifiée RNCP",
  "Spécialiste des Intelligences et Natures Multiples",
  "Sainte-Marie, La Réunion",
  "Interventions Réunion & métropole",
] as const;

export function TrustBand() {
  return (
    <section className="border-y border-cream-200 bg-white py-5">
      <Container>
        <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-6 sm:gap-y-3">
          {ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm font-medium text-ink-600"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500"
              />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
