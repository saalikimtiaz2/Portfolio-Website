"use client";
import JobCard from "@/components/JobCard";
import { jobTypes } from "@/interfaces/sanity";
import { motion } from "framer-motion";
import { HiArrowDownTray, HiBriefcase } from "react-icons/hi2";

function Experience({
  jobs,
  resumeURL,
}: {
  jobs: jobTypes[];
  resumeURL?: string;
}) {
  if (!jobs?.length) return null;

  const positionsLabel = `${jobs.length} ${
    jobs.length === 1 ? "position" : "positions"
  }`;

  return (
    <section
      id="experience"
      className="section border-t border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950"
    >
      <div className="md:container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <p className="section-eyebrow">Experience</p>
              <h2 className="section-title max-w-md">
                A timeline of roles &amp; teams.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-600 dark:text-ink-400">
                {positionsLabel} across product-driven companies, building
                polished interfaces end-to-end &mdash; from concept and design
                systems to shipped, accessible UI.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300">
                  <HiBriefcase aria-hidden />
                  {positionsLabel}
                </span>
                {resumeURL && (
                  <a
                    href={resumeURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-ghost btn-sm">
                      Download CV
                      <HiArrowDownTray aria-hidden />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 px-8 lg:px-0"
          >
            <ol className="relative">
              {jobs.map((job, idx) => (
                <motion.li
                  key={job._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(idx * 0.06, 0.3),
                    ease: "easeOut",
                  }}
                >
                  <JobCard job={job} />
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
