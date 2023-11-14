"use client";
import Card from "@/components/ProjectCard";
import * as sanity from "@/interfaces/sanity";
import { useState } from "react";

const Projects = ({ projects }: { projects: sanity.projectTypes[] }) => {
  const [featured, setFeatured] = useState(true);

  const toggleFeatured = () => {
    setFeatured((prevState) => !prevState);
  };

  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="grid grid-cols-12">
        {projects.map((project: sanity.projectTypes) => {
          if (project.featured) {
            return <Card project={project} />;
          }
        })}
        {!featured &&
          projects.map((project: sanity.projectTypes) => {
            if (!project.featured) {
              return <Card project={project} />;
            }
          })}
      </div>
      <div className="button-wrapper">
        <button onClick={toggleFeatured}>
          {featured ? "See more" : "See less"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
