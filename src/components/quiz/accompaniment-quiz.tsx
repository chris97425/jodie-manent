"use client";

import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { QuizStep } from "@/components/quiz/quiz-step";
import {
  computeQuizResult,
  QUIZ_QUESTIONS,
  QUIZ_RESULTS,
} from "@/lib/content/quiz";

export function AccompanimentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const finished = step >= QUIZ_QUESTIONS.length;
  const current = QUIZ_QUESTIONS[step];

  const resultId = useMemo(
    () => (finished ? computeQuizResult(answers) : null),
    [answers, finished],
  );
  const result = resultId ? QUIZ_RESULTS[resultId] : null;

  function selectOption(optionId: string) {
    const next = [...answers.slice(0, step), optionId];
    setAnswers(next);
    setStep((currentStep) => currentStep + 1);
  }

  function restart() {
    setAnswers([]);
    setStep(0);
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-cream-200 bg-cream-50 px-4 py-5 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral-800">
          Quiz
        </p>
        <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink-700">
          Quel accompagnement pour vous ?
        </h3>
        <p className="mt-2 text-base text-ink-500">
          Quatre questions pour orienter vers l&apos;offre la plus adaptée —
          résultat indicatif, sans engagement.
        </p>
        <div className="mt-5">
          <ProgressBar
            value={Math.min(step, QUIZ_QUESTIONS.length)}
            max={QUIZ_QUESTIONS.length}
            label={
              finished
                ? "Résultat"
                : `Question ${step + 1} sur ${QUIZ_QUESTIONS.length}`
            }
          />
        </div>
      </div>

      <div className="px-4 py-7 sm:px-8 sm:py-8">
        {!finished && current ? (
          <QuizStep
            prompt={current.prompt}
            options={current.options}
            selectedId={answers[step]}
            onSelect={selectOption}
            stepLabel={`Question ${step + 1}`}
          />
        ) : null}

        {finished && result ? (
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-coral-800">
              Orientation suggérée
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-ink-700">
              {result.title}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500">
              {result.summary}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact/" size="lg" className="w-full sm:w-auto">
                Échangeons sur votre besoin
              </Button>
              <Button href={result.href} variant="secondary" className="w-full sm:w-auto">
                Voir cette offre
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={restart}
                aria-label="Rejouer le quiz"
                className="w-full sm:w-auto"
              >
                <RotateCcw aria-hidden="true" className="h-4 w-4" />
                Rejouer
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </Card>
  );
}
