import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { Section } from "@/components/ui/section";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { TestimonialRotator } from "@/components/testimonials/testimonial-rotator";
import type { Testimonial } from "@/lib/content/testimonials";

type TestimonialsBlockProps = {
  items: Testimonial[];
  eyebrow?: string;
  title?: string;
  description?: string;
  rotating?: boolean;
  className?: string;
};

export function TestimonialsBlock({
  items,
  eyebrow = "Témoignages",
  title = "Ce que disent les personnes accompagnées.",
  description,
  rotating = false,
  className = "border-y border-ink-700/5 bg-white/60",
}: TestimonialsBlockProps) {
  return (
    <Section
      className={className}
      eyebrow={eyebrow}
      title={title}
      description={description}
    >
      {rotating ? (
        <RevealOnScroll>
          <TestimonialRotator items={items} />
        </RevealOnScroll>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.06}>
              <div className="h-full">
                <TestimonialCard testimonial={item} />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      )}
    </Section>
  );
}
