import { jobTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
import { HiBuildingOffice2 } from "react-icons/hi2";

function formatMonth(date?: string) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function formatDuration(start?: string, end?: string, ongoing?: boolean) {
  if (!start) return "";
  const s = new Date(start);
  const e = ongoing || !end ? new Date() : new Date(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return "";

  let months =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (months < 0) return "";
  // include the start month so a single-month role reads as "1 mo"
  months += 1;

  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  const parts: string[] = [];
  if (yrs) parts.push(`${yrs} yr${yrs > 1 ? "s" : ""}`);
  if (mos) parts.push(`${mos} mo${mos > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 mo";
}

function jobLogoUrl(logo: jobTypes["logo"]): string | null {
  if (logo == null || logo === "") return null;
  try {
    return imageUrlFor(logo).url();
  } catch {
    return null;
  }
}

function JobCard({ job }: { job: jobTypes }) {
  const duration = formatDuration(
    job.startedDate,
    job.endingDate,
    job.stillWorking,
  );
  const dateRange = `${formatMonth(job.startedDate)} — ${
    job.stillWorking ? "Present" : formatMonth(job.endingDate)
  }`;

  const logoSrc = jobLogoUrl(job.logo);

  return (
    <div className="jobCardWrapper  border-l border-dashed border-ink-400 dark:border-ink-800 group relative pb-7 pl-8 md:pl-16 last:pb-0 before:absolute before:left-[1.4rem] before:top-12 before:bottom-0 before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-ink-200 before:via-ink-200 before:to-transparent last:before:hidden dark:before:from-ink-700 dark:before:via-ink-800">
      <div className="absolute -left-[25px] top-0 z-10 ">
        <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-ink-200 bg-ink-300 shadow-soft transition-colors duration-300 group-hover:border-ink-300 dark:border-ink-700 dark:bg-ink-800 dark:group-hover:border-ink-600">
          {logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element -- CMS asset URL
            <img
              src={logoSrc}
              className="h-7 w-7 object-contain"
              alt={`${job.company} logo`}
            />
          ) : (
            <HiBuildingOffice2
              className="h-7 w-7 text-white"
              aria-hidden
            />
          )}
        </div>
        {job.stillWorking && (
          <span
            aria-hidden
            className="absolute -right-0.5 -top-0.5 flex h-3 w-3"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-ink-900" />
          </span>
        )}
      </div>

      <div className="p-5 transition-all duration-300 group-hover:-translate-y-0.5 ">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <h5 className="font-heading text-base font-semibold leading-tight text-ink-950 dark:text-ink-50 md:text-lg">
              {job.title}
            </h5>
            <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">
              <span className="font-medium text-ink-800 dark:text-ink-200">
                {job.company}
              </span>
              {job.location && (
                <>
                  <span className="mx-1.5 text-ink-300 dark:text-ink-600">
                    ·
                  </span>
                  {job.location}
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 md:flex-shrink-0">
            {job.stillWorking ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-700 ring-1 ring-inset ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Current
              </span>
            ) : null}
            {duration && (
              <span className="inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ink-600 dark:border-ink-700 dark:bg-ink-800/60 dark:text-ink-300">
                {duration}
              </span>
            )}
          </div>
        </div>

        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500 dark:text-ink-400">
          {dateRange}
        </p>

        <div className="mt-4 border-t border-ink-100 pt-4 text-sm leading-relaxed text-ink-700 dark:border-ink-800 dark:text-ink-300">
          <PortableText value={job.description} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
