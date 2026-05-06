import type { socialLinkTypes } from "@/interfaces/sanity";

/** Canonical social profiles when Sanity has no social links configured. */
export const SITE_SOCIAL_LINKS: socialLinkTypes[] = [
  { name: "GitHub", url: "https://github.com/saalikimtiaz2" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/salikimtiaz/" },
  { name: "X", url: "https://x.com/salik__imtiaz" },
  { name: "Instagram", url: "https://www.instagram.com/saalik.imtiaz" },
  { name: "Buy me a coffee", url: "https://buymeacoffee.com/salikimtiazx" },
];

export function resolveSocialLinks(
  fromCms: socialLinkTypes[] | undefined | null,
): socialLinkTypes[] {
  return fromCms?.length ? fromCms : SITE_SOCIAL_LINKS;
}
