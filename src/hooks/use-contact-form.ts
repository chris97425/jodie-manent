"use client";

import { useState, type FormEvent } from "react";
import {
  EMPTY_CONTACT_FORM,
  sanitizeContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";
import { createBrowserClient } from "@/lib/supabase/client";

type Status = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function updateField<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      setStatusMessage("Merci de corriger les champs indiqués.");
      return;
    }

    setStatus("submitting");
    setStatusMessage("");

    const payload = sanitizeContactForm(values);
    const client = createBrowserClient();

    await client.from("contact_messages").insert(payload);
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    setStatusMessage(
      "Message enregistré en mode démo. Aucun envoi réel n'a été effectué.",
    );
    setValues(EMPTY_CONTACT_FORM);
  }

  function resetStatus() {
    setStatus("idle");
    setStatusMessage("");
  }

  return {
    values,
    errors,
    status,
    statusMessage,
    updateField,
    handleSubmit,
    resetStatus,
  };
}
