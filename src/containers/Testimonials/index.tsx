"use client";

import { testimonialTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

function Testimonials({ testimonials }: { testimonials: testimonialTypes[] }) {
  const [currReview, setCurrReview] = useState<number>(0);

  if (!testimonials?.length) return null;

  const current = testimonials[currReview];
  const goPrev = () =>
    setCurrReview((i) => (i - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setCurrReview((i) => (i + 1) % testimonials.length);

  return (
    <section className="section border-t border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <p className="section-eyebrow">Testimonials</p>
            <h2 className="section-title">Kind words from people I&apos;ve worked with.</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white dark:border-ink-800 dark:text-ink-300 dark:hover:border-ink-50 dark:hover:bg-ink-50 dark:hover:text-ink-950"
            >
              <HiArrowLeft aria-hidden />
            </button>
            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-all duration-300 hover:border-ink-950 hover:bg-ink-950 hover:text-white dark:border-ink-800 dark:text-ink-300 dark:hover:border-ink-50 dark:hover:bg-ink-50 dark:hover:text-ink-950"
            >
              <HiArrowRight aria-hidden />
            </button>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 shadow-card dark:border-ink-800 dark:bg-ink-900 md:p-12">
              <span
                className="pointer-events-none absolute -top-6 -left-2 select-none font-heading text-[10rem] leading-none text-ink-100 dark:text-ink-800"
                aria-hidden
              >
                &ldquo;
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`review-${currReview}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="testimonial-body relative z-10"
                >
                  <PortableText value={[...current.review]} />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`user-${currReview}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, delay: 0.05, ease: "easeOut" }}
                  className="relative z-10 mt-8 flex items-center gap-4 border-t border-ink-200 pt-6 dark:border-ink-800"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrlFor(current.image).url()}
                    alt={current.name}
                    className="h-12 w-12 rounded-full border-2 border-ink-200 object-cover dark:border-ink-800"
                  />
                  <div>
                    <p className="font-heading text-base font-semibold text-ink-950 dark:text-ink-50">
                      {current.name}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400">
                      {current.designation} · {current.company}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrReview(idx)}
                  aria-label={`View testimonial ${idx + 1}`}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    idx === currReview
                      ? "w-8 bg-ink-950 dark:bg-ink-50"
                      : "w-4 bg-ink-300 hover:bg-ink-400 dark:bg-ink-700 dark:hover:bg-ink-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <p className="section-eyebrow">Reviewers</p>
            <ul className="mt-6 space-y-2">
              {testimonials.map((item, idx) => (
                <li key={item._id}>
                  <button
                    onClick={() => setCurrReview(idx)}
                    className={`flex w-full cursor-pointer items-center gap-4 rounded-2xl border p-3 text-left transition-all duration-300 ${
                      idx === currReview
                        ? "border-ink-950 bg-white shadow-soft dark:border-ink-50 dark:bg-ink-900"
                        : "border-ink-200 bg-transparent hover:border-ink-400 dark:border-ink-800 dark:hover:border-ink-600"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageUrlFor(item.image).url()}
                      alt={item.name}
                      className="h-10 w-10 shrink-0 rounded-full object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-heading text-sm font-semibold text-ink-950 dark:text-ink-50">
                        {item.name}
                      </p>
                      <p className="truncate text-xs text-ink-500 dark:text-ink-400">
                        {item.company}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
