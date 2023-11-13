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
  if (featured)
    return (
      <div style={{ paddingTop: "4rem" }}>
        <div className="grid grid-cols-12">
          {projects.map((project: sanity.projectTypes) => {
            if (project.featured) {
              return <Card project={project} />;
            }
          })}
        </div>
      </div>
    );

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
