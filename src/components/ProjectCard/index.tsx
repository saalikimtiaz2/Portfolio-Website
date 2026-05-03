"use client";
import { projectTypes } from "@/interfaces/sanity";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const Card = ({
  project,
  featured = false,
}: {
  project: projectTypes;
  featured?: boolean;
}) => {
  const logoUrl =
    typeof project.logo === "string" ? project.logo.trim() : "";
  const hasLogo = Boolean(logoUrl);

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: "some" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative isolate flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink-200 bg-white transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lift dark:border-ink-800 dark:bg-ink-900 ${
        featured
          ? "col-span-12 lg:col-span-8 lg:row-span-2"
          : "col-span-12 md:col-span-6 lg:col-span-4"
      }`}
      style={{
        ["--accent-color" as any]: project.color || "#2563EB",
      }}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-ink-100 dark:bg-ink-950">
        {project.bgImage?.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.bgImage.image}
            alt={project.bgImage.alt || project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${
                project.color || "#2563EB"
              }33, transparent)`,
            }}
          />
        )}

        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-ink-950/0 transition-[background-color] duration-300 ease-out group-hover:bg-ink-950/85"
          aria-hidden
        >
          <div className="translate-y-2 scale-95 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
            {hasLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoUrl}
                alt=""
                className={`mx-auto max-w-[min(200px,78%)] object-contain drop-shadow-md ${
                  featured ? "max-h-24 md:max-h-28" : "max-h-16 md:max-h-20"
                }`}
              />
            ) : (
              <p
                className={`max-w-[85%] text-center font-heading font-semibold leading-tight tracking-tight text-white ${
                  featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
                }`}
              >
                {project.title}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-semibold tracking-tight text-ink-950 dark:text-ink-50">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">
                {project.subtitle}
              </p>
            )}
          </div>
          <span
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-200 text-ink-600 transition-all duration-300 group-hover:border-ink-950 group-hover:bg-ink-950 group-hover:text-white dark:border-ink-800 dark:text-ink-400 dark:group-hover:border-ink-50 dark:group-hover:bg-ink-50 dark:group-hover:text-ink-950"
            aria-hidden
          >
            <HiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>

        {project.technologies?.length ? (
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-ink-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-700 dark:bg-ink-800 dark:text-ink-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </motion.a>
  );
};

export default Card;
