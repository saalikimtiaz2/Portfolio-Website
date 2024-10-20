"use client";
import Card from "@/components/ProjectCard";
import * as sanity from "@/interfaces/sanity";
import { motion } from "framer-motion";
import { useState } from "react";

const gridVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = ({ projects }: { projects: sanity.projectTypes[] }) => {
  const [featured, setFeatured] = useState(true);

  const toggleFeatured = () => {
    setFeatured((prevState) => !prevState);
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <motion.div
        className="grid grid-cols-12"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project: sanity.projectTypes) => {
          if (project.featured) {
            return <Card project={project} key={project._id} />;
          }
        })}
        {!featured &&
          projects.map((project: sanity.projectTypes) => {
            if (!project.featured) {
              return <Card project={project} key={project._id} />;
            }
          })}
      </motion.div>
      <div className="button-wrapper">
        <button onClick={toggleFeatured}>
          {featured ? "See more" : "See less"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
