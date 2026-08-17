import type { ContactFormValues } from "@/lib/validation";

export type ContactEndpointConfig = {
  endpoint: string;
  accessKey: string;
  configured: boolean;
};

export function getContactEndpointConfig(): ContactEndpointConfig {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT?.trim() ?? "";
  const accessKey = process.env.NEXT_PUBLIC_CONTACT_ACCESS_KEY?.trim() ?? "";
  return {
    endpoint,
    accessKey,
    configured: endpoint.length > 0,
  };
}

export function buildContactPayload(
  values: ContactFormValues,
  accessKey: string,
): Record<string, string> {
  const payload: Record<string, string> = {
    name: values.name,
    company: values.company,
    email: values.email,
    phone: values.phone,
    needType: values.needType,
    message: values.message,
    subject: `Demande de contact — ${values.needType || "site vitrine"}`,
  };
  if (accessKey) {
    payload.access_key = accessKey;
  }
  return payload;
}
