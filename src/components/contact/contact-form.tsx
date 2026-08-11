"use client";

import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/use-contact-form";

const fieldClasses =
  "mt-2 w-full rounded-lg border border-cream-200 bg-white px-4 py-3 text-base text-ink-700 shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-ink-400 hover:border-coral-300 focus:border-coral-500 focus:outline-none focus:ring-2 focus:ring-coral-500/25 disabled:cursor-not-allowed disabled:bg-cream-50 disabled:opacity-60";

export function ContactForm() {
  const {
    values,
    errors,
    status,
    statusMessage,
    updateField,
    handleSubmit,
    resetStatus,
  } = useContactForm();

  const disabled = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-cream-200 bg-white p-6 shadow-[0_8px_24px_rgba(59,42,36,0.04)] sm:p-8"
      aria-describedby="contact-demo-note"
    >
      <p
        id="contact-demo-note"
        className="mb-6 rounded-lg border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-600"
      >
        Formulaire en mode <strong>démo</strong> — validation locale, succès
        simulé, aucun envoi serveur.
      </p>

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink-700">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            disabled={disabled}
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClasses}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-coral-800">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={disabled}
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClasses}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-coral-800">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-medium text-ink-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            maxLength={4000}
            disabled={disabled}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${fieldClasses} resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-coral-800">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>

      {statusMessage ? (
        <div
          role="status"
          className={
            status === "success"
              ? "mt-5 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
              : "mt-5 rounded-lg bg-amber-50 px-4 py-3 text-sm text-amber-950"
          }
        >
          <p>{statusMessage}</p>
          {status === "success" ? (
            <button
              type="button"
              onClick={resetStatus}
              className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-emerald-900 underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-600"
            >
              Envoyer un autre message
            </button>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6">
        <Button type="submit" disabled={disabled} className="w-full sm:w-auto">
          {status === "submitting" ? "Envoi en cours…" : "Envoyer le message"}
        </Button>
      </div>
    </form>
  );
}
