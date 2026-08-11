import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { AccompanimentQuiz } from "@/components/quiz/accompaniment-quiz";
import { Section } from "@/components/ui/section";

export function QuizSection() {
  return (
    <Section
      className="bg-white"
      eyebrow="Orientation"
      title="Trouvez le format qui vous correspond"
      description="Un quiz court, 100 % local — pour vous orienter vers un bilan, un coaching ou une formation."
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-3xl">
          <AccompanimentQuiz />
        </div>
      </RevealOnScroll>
    </Section>
  );
}
