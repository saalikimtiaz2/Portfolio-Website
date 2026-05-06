import { jobTypes } from "@/interfaces/sanity";

/**
 * Compute total years of experience from the earliest job's start date to now.
 * Returns a whole-year count, floored, with a minimum of 1 if any valid job
 * is provided. Returns null when there's nothing to compute from.
 */
export function getYearsOfExperience(jobs: jobTypes[] | undefined): number | null {
  if (!jobs?.length) return null;

  const earliest = jobs.reduce<Date | null>((acc, job) => {
    if (!job.startedDate) return acc;
    const d = new Date(job.startedDate);
    if (Number.isNaN(d.getTime())) return acc;
    if (!acc || d.getTime() < acc.getTime()) return d;
    return acc;
  }, null);

  if (!earliest) return null;

  const now = new Date();
  const diffMs = now.getTime() - earliest.getTime();
  if (diffMs <= 0) return null;

  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  return Math.max(1, years);
}
