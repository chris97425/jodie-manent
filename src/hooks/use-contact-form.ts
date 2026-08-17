"use client";

import { useState, type FormEvent } from "react";
import {
  EMPTY_CONTACT_FORM,
  sanitizeContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation";
import {
  buildContactPayload,
  getContactEndpointConfig,
} from "@/lib/contact-endpoint";

type Status = "idle" | "submitting" | "success" | "error";

const SUCCESS_MESSAGE =
  "Merci, votre demande a bien été enregistrée. Je vous répondrai pour convenir d'un premier échange.";

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
    const config = getContactEndpointConfig();

    try {
      if (!config.configured) {
        console.info(
          "[contact] Endpoint non configuré — demande enregistrée localement.",
          {
            name: payload.name,
            company: payload.company,
            needType: payload.needType,
          },
        );
      } else {
        const body = buildContactPayload(payload, config.accessKey);
        const response = await fetch(config.endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
      }

      setStatus("success");
      setStatusMessage(SUCCESS_MESSAGE);
      setValues(EMPTY_CONTACT_FORM);
    } catch {
      setStatus("error");
      setStatusMessage(
        "L'envoi n'a pas abouti. Merci de réessayer dans un instant, ou de me joindre via LinkedIn.",
      );
    }
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
