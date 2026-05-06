"use client";
import { Logo } from "@/components/SvgIcons";
import { Tooltip } from "@/components/Tooltip";
import getIcon from "@/helpers/getIcon";
import { scrolltoHash } from "@/helpers/scrollHash";
import type { socialLinkTypes } from "@/interfaces/sanity";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

function Footer({ socialLinks }: { socialLinks: socialLinkTypes[] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="md:container mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo height="40px" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              Frontend engineer crafting fast, accessible, and beautifully
              animated web experiences from idea to production.
            </p>
            <a
              href="mailto:r.salikimtiaz@gmail.com"
              className="mt-6 inline-block font-heading text-2xl font-medium tracking-tight text-ink-950 underline-offset-4 hover:underline dark:text-ink-50 md:text-3xl"
            >
              r.salikimtiaz@gmail.com
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="section-eyebrow">Sitemap</p>
            <ul className="mt-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrolltoHash(item.id)}
                    className="cursor-pointer text-sm text-ink-700 transition-colors duration-200 hover:text-ink-950 dark:text-ink-300 dark:hover:text-ink-50"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="section-eyebrow">Elsewhere</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map(({ name, url }) => (
                <li key={url}>
                  <Tooltip label={name}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-950 hover:bg-ink-950 hover:text-white dark:border-ink-800 dark:text-ink-300 dark:hover:border-ink-50 dark:hover:bg-ink-50 dark:hover:text-ink-950"
                    >
                      {getIcon(name)}
                    </a>
                  </Tooltip>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs text-ink-500">Available for new projects</p>
            <span className="mt-2 inline-flex items-center gap-2 text-xs text-ink-600 dark:text-ink-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to opportunities
            </span>
          </div>
        </div>

        <div className="divider mt-16" />
        <div className="mt-6 flex flex-col items-start justify-between gap-2 text-xs text-ink-500 md:flex-row md:items-center">
          <p>© {year} Salik Imtiaz. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · Tailwind · Sanity</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
