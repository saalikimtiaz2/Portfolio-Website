"use client";
import Card from "@/components/ProjectCard";
import { ProfileType, projectTypes } from "@/interfaces/sanity";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const Projects = ({
  projects,
  profile,
}: {
  projects: projectTypes[];
  profile: ProfileType;
}) => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    if (showAll) return projects;
    return projects.filter((p) => p.featured);
  }, [projects, showAll]);

  return (
    <section
      id="projects"
      className="section border-t border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-950"
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
            <p className="section-eyebrow">Selected Work</p>
            <h2 className="section-title">
              {profile.projectsHeading || "Featured projects."}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            A handpicked selection of projects spanning product design, frontend
            engineering, and design systems.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-6">
          {visibleProjects.map((project, idx) => (
            <Card
              key={project._id}
              project={project}
              featured={idx === 0 && project.featured}
            />
          ))}
        </div>

        {projects.some((p) => !p.featured) && (
          <div className="mt-12 flex justify-center">
            <button
              className="btn btn-ghost"
              onClick={() => setShowAll((s) => !s)}
            >
              {showAll ? "Show less" : `Show all (${projects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
