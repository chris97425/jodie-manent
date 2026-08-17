import { z } from "zod";
import { NEED_TYPES, type NeedType } from "@/lib/content/contact";

export type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  needType: NeedType | "";
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

export const EMPTY_CONTACT_FORM: ContactFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  needType: "",
  message: "",
};

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(120, "Le nom est trop long."),
  company: z.string().trim().max(160, "Le nom d'entreprise est trop long."),
  email: z
    .string()
    .trim()
    .min(1, "L'email est requis.")
    .email("Veuillez saisir un email valide.")
    .max(254, "L'email est trop long."),
  phone: z.string().trim().max(40, "Le téléphone est trop long."),
  needType: z
    .string()
    .min(1, "Veuillez indiquer le type de besoin.")
    .refine(
      (value): value is NeedType =>
        (NEED_TYPES as readonly string[]).includes(value),
      "Veuillez indiquer le type de besoin.",
    ),
  message: z
    .string()
    .trim()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(4000, "Le message est trop long."),
});

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const parsed = contactFormSchema.safeParse(values);
  if (parsed.success) return {};

  const errors: ContactFormErrors = {};
  for (const issue of parsed.error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in errors)) {
      errors[key as keyof ContactFormValues] = issue.message;
    }
  }
  return errors;
}

export function sanitizeContactForm(
  values: ContactFormValues,
): ContactFormValues {
  const parsed = contactFormSchema.safeParse(values);
  if (parsed.success) {
    return parsed.data;
  }
  return {
    name: values.name.trim().slice(0, 120),
    company: values.company.trim().slice(0, 160),
    email: values.email.trim().slice(0, 254),
    phone: values.phone.trim().slice(0, 40),
    needType: (NEED_TYPES as readonly string[]).includes(values.needType)
      ? (values.needType as NeedType)
      : "",
    message: values.message.trim().slice(0, 4000),
  };
}
