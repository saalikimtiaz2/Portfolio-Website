"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

type TooltipProps = {
  label: string;
  children: ReactNode;
  /** Extra classes on the positioning wrapper (e.g. align with flex gaps) */
  className?: string;
};

/**
 * Hover / focus-within tooltip for a single interactive child (link, button).
 * Uses a named Tailwind group so nested `group` classes on the child do not clash.
 */
export function Tooltip({ label, children, className }: TooltipProps) {
  return (
    <span
      className={clsx("group/social-tip relative inline-flex", className)}
    >
      {children}
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-[200] mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-ink-700 bg-ink-950 px-2.5 py-1.5 text-[11px] font-medium text-ink-50 opacity-0 shadow-lg transition-opacity duration-150 ease-out group-hover/social-tip:opacity-100 group-focus-within/social-tip:opacity-100 dark:border-ink-200 dark:bg-white dark:text-ink-950"
      >
        {label}
      </span>
    </span>
  );
}
