"use client";
import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";

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

      <div className="container relative mx-auto text-center">
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
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:r.salikimtiaz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-accent btn-lg group">
              r.salikimtiaz@gmail.com
              <HiArrowUpRight
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </button>
          </a>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-lg cursor-pointer border border-ink-700 text-white hover:border-white hover:bg-white hover:text-ink-950">
              Schedule a call
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
