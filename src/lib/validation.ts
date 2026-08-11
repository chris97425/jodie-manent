export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormValues, string>
>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Le nom est requis.";
  } else if (name.length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  } else if (name.length > 120) {
    errors.name = "Le nom est trop long.";
  }

  if (!email) {
    errors.email = "L'email est requis.";
  } else if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    errors.email = "Veuillez saisir un email valide.";
  }

  if (!message) {
    errors.message = "Le message est requis.";
  } else if (message.length < 10) {
    errors.message = "Le message doit contenir au moins 10 caractères.";
  } else if (message.length > 4000) {
    errors.message = "Le message est trop long.";
  }

  return errors;
}

export function sanitizeContactForm(
  values: ContactFormValues,
): ContactFormValues {
  return {
    name: values.name.trim().slice(0, 120),
    email: values.email.trim().slice(0, 254),
    message: values.message.trim().slice(0, 4000),
  };
}
