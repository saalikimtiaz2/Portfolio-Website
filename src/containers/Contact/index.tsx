"use client";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";
import { CALENDLY_URL } from "@/config/calendly";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

const MAIL = "mailto:r.salikimtiaz@gmail.com";
const MAIL_SCHEDULE_SUBJECT =
  "mailto:r.salikimtiaz@gmail.com?subject=Schedule%20a%20call";

const scheduleBtnClass =
  "btn btn-lg cursor-pointer border border-ink-700 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-ink-950";

function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-ink-950 py-32 text-white md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-dark bg-grid opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="md:container relative mx-auto px-4 md:px-0 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-ink-400"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-6 font-heading text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[1] tracking-tightest text-white"
        >
          Let&apos;s build
          <br />
          <span className="text-accent">something great.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink-400"
        >
          Have a project in mind, want to collaborate, or just say hi? My inbox
          is always open &mdash; I&apos;ll get back to you within 24 hours.
          {CALENDLY_URL ? (
            <>
              {" "}
              Prefer to talk live? Open the scheduler and pick a time that
              works.
            </>
          ) : null}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href={MAIL} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-accent btn-lg group">
              r.salikimtiaz@gmail.com
              <HiArrowUpRight
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
          </a>
          {CALENDLY_URL ? (
            <CalendlyPopupButton url={CALENDLY_URL} className={scheduleBtnClass} />
          ) : (
            <a
              href={MAIL_SCHEDULE_SUBJECT}
              target="_blank"
              rel="noopener noreferrer"
              className={scheduleBtnClass}
            >
              Schedule a call
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
