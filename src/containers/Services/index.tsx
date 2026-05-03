"use client";
import getIcon from "@/helpers/getIcon";
import { ProfileType, serviceTypes } from "@/interfaces/sanity";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

function Services({ profile }: { profile: ProfileType }) {
  return (
    <section
      id="services"
      className="section border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Services</p>
            <h2 className="section-title">{profile.serviceTitle}</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            From design systems to interactive interfaces, I help teams ship
            polished products that feel as good as they look.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {profile.services?.map((service: serviceTypes, idx: number) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink-200 bg-ink-50 p-8 transition-all duration-300 hover:border-ink-950 hover:shadow-card dark:border-ink-800 dark:bg-ink-950 dark:hover:border-ink-50"
            >
              <div className="flex items-start justify-between">
                <span
                  className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-2xl text-white transition-transform duration-300 group-hover:rotate-6 dark:bg-ink-50 dark:text-ink-950"
                  aria-hidden
                >
                  {getIcon(service.title)}
                </span>
                <span className="font-mono text-xs text-ink-400">
                  / 0{idx + 1}
                </span>
              </div>

              <h3 className="mt-8 font-heading text-2xl font-semibold tracking-tight text-ink-950 dark:text-ink-50">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                {service.subtitle}
              </p>

              <span className="mt-8 inline-flex items-center gap-1.5 text-xs font-medium text-ink-500 transition-colors duration-200 group-hover:text-ink-950 dark:group-hover:text-ink-50">
                Learn more
                <HiArrowUpRight
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
