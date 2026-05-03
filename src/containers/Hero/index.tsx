"use client";
import Typewriter from "@/components/TypeWriter";
import { ProfileType } from "@/interfaces/sanity";
import { scrolltoHash } from "@/helpers/scrollHash";
import { motion } from "framer-motion";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

const GREETINGS = [
  "Hello",
  "سلام",
  "Bonjour",
  "Hola",
  "Ciao",
  "नमस्ते",
  "Olá",
  "مرحبا",
];

function Hero({ profile }: { profile: ProfileType }) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-ink-50 dark:bg-ink-950"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-light bg-grid dark:bg-grid-dark"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-radial from-transparent via-ink-50/80 to-ink-50 dark:via-ink-950/80 dark:to-ink-950"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 animate-blob rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 animate-blob rounded-full bg-ink-300/40 blur-3xl dark:bg-ink-800/40"
        style={{ animationDelay: "4s" }}
      />

      <div className="container relative mx-auto pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-500 dark:text-ink-400">
            Available for new projects
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="mt-8 max-w-5xl font-heading text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tightest text-ink-950 dark:text-ink-50"
        >
          <span className="inline-flex items-center gap-3 align-baseline rounded-full bg-ink-950 px-4 py-1 text-[clamp(1rem,2vw,1.5rem)] font-medium text-white dark:bg-white dark:text-ink-950">
            <Typewriter
              words={GREETINGS}
              loop
              cursor
              cursorBlinking
              cursorStyle="|"
            />
          </span>
          <br />
          {profile.headline || `I'm ${profile.firstName}, a frontend engineer.`}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-600 dark:text-ink-400"
        >
          {profile.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:r.salikimtiaz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-accent btn-lg">
              Let&apos;s talk
              <HiArrowUpRight aria-hidden />
            </button>
          </a>
          <button
            className="btn btn-ghost btn-lg"
            onClick={() => scrolltoHash("projects")}
          >
            View my work
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 flex items-center justify-between md:mt-32"
        >
          <button
            onClick={() => scrolltoHash("about")}
            className="group flex cursor-pointer items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-ink-500 transition-colors duration-200 hover:text-ink-950 dark:text-ink-400 dark:hover:text-ink-50"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-300 transition-all duration-300 group-hover:translate-y-0.5 group-hover:border-ink-950 dark:border-ink-700 dark:group-hover:border-ink-50">
              <HiArrowDown aria-hidden />
            </span>
            Scroll to explore
          </button>

          <p className="hidden font-mono text-xs text-ink-500 md:block">
            {profile.location || "Based remotely"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
