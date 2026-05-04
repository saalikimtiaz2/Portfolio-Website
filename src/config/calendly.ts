const DEFAULT_CALENDLY_URL = "https://calendly.com/r-salikimtiaz/30min";

/** Event URL (Calendly → Share → “Add to Website”). Override via NEXT_PUBLIC_CALENDLY_URL if you change types. */
export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL;

export const CALENDLY_IFRAME_TITLE = "Book a meeting with Salik Imtiaz";

/** Embed / popup styling (hex without `#`, per Calendly API) */
export const CALENDLY_PAGE_SETTINGS = {
  backgroundColor: "09090b",
  hideLandingPageDetails: true,
  hideEventTypeDetails: false,
  hideGdprBanner: false,
  primaryColor: "2563eb",
  textColor: "fafafa",
} as const;
