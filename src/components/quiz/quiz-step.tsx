import { cx } from "@/lib/cx";
import type { QuizOption } from "@/lib/content/quiz";

type QuizStepProps = {
  prompt: string;
  options: QuizOption[];
  selectedId?: string;
  onSelect: (optionId: string) => void;
  stepLabel: string;
};

export function QuizStep({
  prompt,
  options,
  selectedId,
  onSelect,
  stepLabel,
}: QuizStepProps) {
  return (
    <fieldset>
      <legend className="sr-only">{stepLabel}</legend>
      <p className="text-xl font-bold tracking-tight text-ink-700 sm:text-2xl">
        {prompt}
      </p>
      <div className="mt-5 grid gap-3" role="radiogroup" aria-label={prompt}>
        {options.map((option) => {
          const selected = selectedId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelect(option.id)}
              className={cx(
                "min-h-12 w-full rounded-xl border px-4 py-3 text-left text-base font-medium transition-[border-color,background-color,transform,color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800 active:scale-[0.99]",
                selected
                  ? "border-coral-500 bg-coral-50 text-coral-900"
                  : "border-cream-200 bg-white text-ink-700 hover:border-coral-300 hover:bg-cream-50",
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
