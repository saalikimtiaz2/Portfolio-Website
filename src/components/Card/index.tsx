import { projectTypes } from "@/interfaces/sanity";
import { redirect } from "next/navigation";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ project }: { project: projectTypes }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="card relative rounded-2xl hover:shadow-2xl transition-all duration-500 ease-in-out hover:-translate-y-4 mb-[10rem]"
      style={{ backgroundColor: isHovered ? project.color : "rgba(0,0,0,0)" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className="text-lg font-medium capitalize text-center">
        {project.title}
      </h4>
      <p className="font-light text-center">{project.subtitle}</p>
      <img src={project.bgImage.image} className="absolute -top-[10rem]" />
      {/* <div className="flex items-center gap-4 justify-center flex-wrap mt-4">
        {project.technologies.map((tech) => (
          <div
            key={tech}
            className="px-2 py-1 text-sm rounded border border-neutral-500"
          >
            {tech}
          </div>
        ))}
      </div> */}
      <button
        onClick={() => {
          redirect(project.url);
        }}
        className="mx-auto h-10 w-10 text-lg flex items-center justify-center mt-4 rounded-full border border-neutral-500 hover:border-primary hover:text-white hover:bg-primary hover:-rotate-45 transition-all ease-in-out duration-500"
      >
        <BsArrowRight />
      </button>
    </div>
  );
};

export default Card;
