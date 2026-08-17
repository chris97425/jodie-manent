import { TestimonialsBlock } from "@/components/testimonials/testimonials-block";
import { HOME_TESTIMONIALS } from "@/lib/content/testimonials";

export function SocialProof() {
  return (
    <TestimonialsBlock
      items={HOME_TESTIMONIALS}
      rotating
      title="Ce que disent les personnes accompagnées."
    />
  );
}
