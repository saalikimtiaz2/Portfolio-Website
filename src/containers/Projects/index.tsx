"use client";
import Card from "@/components/ProjectCard";
import * as sanity from "@/interfaces/sanity";

const Projects = async ({
  projects,
  featured,
}: {
  projects: sanity.projectTypes[];
  featured?: boolean;
}) => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <div className="grid grid-cols-12">
        {projects.map((project: sanity.projectTypes) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
