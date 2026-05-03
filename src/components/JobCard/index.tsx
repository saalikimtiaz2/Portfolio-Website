import { jobTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";

function JobCard({ job }: { job: jobTypes }) {
  return (
    <div className="jobCardWrapper relative pl-12">
      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-ink-200 bg-ink-100 dark:border-ink-800 dark:bg-ink-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrlFor(job.logo).url()}
          className="h-6 w-6 object-contain"
          alt={`${job.company} logo`}
        />
      </div>

      <div className="border-l border-ink-200 pb-6 pl-6 dark:border-ink-800">
        <div className="-mt-1 mb-3 flex flex-col justify-between gap-1 md:flex-row md:items-baseline">
          <div>
            <h5 className="font-heading text-lg font-semibold text-ink-950 dark:text-ink-50">
              {job.title}
            </h5>
            <p className="text-sm text-ink-600 dark:text-ink-400">
              {job.company}
              <span className="mx-1.5 text-ink-400">·</span>
              <span>{job.location}</span>
            </p>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-500">
            {job.startedDate} — {job.stillWorking ? "Present" : job.endingDate}
          </p>
        </div>

        <div className="text-sm leading-relaxed text-ink-700 dark:text-ink-300">
          <PortableText value={job.description} />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
