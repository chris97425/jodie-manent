"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_REASSURANCE, NEED_TYPES } from "@/lib/content/contact";
import { useContactForm } from "@/hooks/use-contact-form";
import type { ContactFormValues } from "@/lib/validation";

const fieldClasses =
  "mt-2 min-h-11 w-full rounded-xl border border-cream-200 bg-white px-4 py-3 text-base text-ink-700 shadow-sm transition-[border-color,box-shadow] duration-200 placeholder:text-ink-400 hover:border-coral-300 focus:border-coral-700 focus:outline-none focus:ring-2 focus:ring-coral-800/30 disabled:cursor-not-allowed disabled:bg-cream-50 disabled:opacity-60";

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
      className="rounded-3xl border border-cream-200 bg-white p-6 shadow-sm sm:p-8"
      aria-describedby="contact-reassurance"
    >
      <p
        id="contact-reassurance"
        className="mb-6 rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-sm text-ink-600"
      >
        {CONTACT_REASSURANCE}
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
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
          <label htmlFor="company" className="text-sm font-medium text-ink-700">
            Entreprise
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={160}
            disabled={disabled}
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={fieldClasses}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="mt-2 text-sm text-coral-800">
              {errors.company}
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
          <label htmlFor="phone" className="text-sm font-medium text-ink-700">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            maxLength={40}
            disabled={disabled}
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClasses}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-2 text-sm text-coral-800">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="needType" className="text-sm font-medium text-ink-700">
            Type de besoin
          </label>
          <select
            id="needType"
            name="needType"
            required
            disabled={disabled}
            value={values.needType}
            onChange={(event) =>
              updateField(
                "needType",
                event.target.value as ContactFormValues["needType"],
              )
            }
            className={fieldClasses}
            aria-invalid={Boolean(errors.needType)}
            aria-describedby={errors.needType ? "needType-error" : undefined}
          >
            <option value="">Sélectionnez…</option>
            {NEED_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.needType ? (
            <p id="needType-error" className="mt-2 text-sm text-coral-800">
              {errors.needType}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
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
              ? "mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
              : "mt-5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-950"
          }
        >
          <p>{statusMessage}</p>
          {status === "success" ? (
            <button
              type="button"
              onClick={resetStatus}
              className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-emerald-900 underline-offset-2 transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral-800"
            >
              Envoyer un autre message
            </button>
          ) : null}
        </div>
      ) : null}

      <div className="mt-6">
        <Button type="submit" disabled={disabled} className="w-full sm:w-auto">
          {status === "submitting" ? "Envoi en cours…" : "Envoyer ma demande"}
        </Button>
      </div>
    </form>
  );
}
