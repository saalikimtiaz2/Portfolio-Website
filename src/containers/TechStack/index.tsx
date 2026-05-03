"use client";
import TechCard from "@/components/TechCard";
import { ProfileType, techStackTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import { motion } from "framer-motion";

function TechStack({ profile }: { profile: ProfileType }) {
  const stack = profile.techStack || [];
  const doubled = [...stack, ...stack];

  return (
    <section className="section border-t border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="section-eyebrow justify-center">Tech Stack</p>
          <h2 className="section-title mx-auto max-w-2xl">
            Tools I use every day to build great products.
          </h2>
        </motion.div>
      </div>

      <div className="marquee-mask relative mt-12 pt-4 overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 motion-reduce:animate-none mt-0">
          {doubled.map((tech: techStackTypes, idx: number) => (
            <TechCard
              key={`${tech.title}-${idx}`}
              url={imageUrlFor(tech.logo).url()}
              title={tech.title}
            />
          ))}
        </div>
      </div>

      <div className="marquee-mask relative pt-4 overflow-hidden">
        <div className="flex w-max animate-marquee-reverse gap-4 motion-reduce:animate-none">
          {doubled.map((tech: techStackTypes, idx: number) => (
            <TechCard
              key={`${tech.title}-rev-${idx}`}
              url={imageUrlFor(tech.logo).url()}
              title={tech.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
