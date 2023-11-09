"use client";
import Card from "@/components/Card";
import * as sanity from "@/interfaces/sanity";

const Projects = async ({
  projects,
  featured,
}: {
  projects: sanity.projectTypes[];
  featured?: boolean;
}) => {
  return (
    <div style={{ paddingTop: "8rem" }}>
      <div className="grid grid-cols-12 gap-x-10">
        {projects.map((project: sanity.projectTypes) => (
          <Card project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
