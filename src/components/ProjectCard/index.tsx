import { projectTypes } from "@/interfaces/sanity";
import hexRgb from "hex-rgb";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Card = ({ project }: { project: projectTypes }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="h-[15rem] xs:col-span-12 md:col-span-6 lg:col-span-4 :col-span-4 relative shadow-lg p-4 hover:shadow-2xl border border-neutral-100 dark:border-neutral-800 hover:border-transparent hover:text-white transition-all ease-in-out duration-500 mb-[4rem]"
      style={{
        background: isHovered
          ? `linear-gradient(to  left, ${hexRgb(project.color, {
              alpha: 0.5,
              format: "css",
            })}, ${project.color})`
          : "rgba(0,0,0,0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.bgImage.image}
        className=" absolute -right-[1px] -bottom-[1px] h-[18rem] drop-shadow-2xl"
      />
      <div className="w-1/2 flex justify-between flex-col h-full">
        <div>
          <h4 className="text-lg font-medium capitaliz" id="project-tile">
            {project.title}
          </h4>
          <p className="font-light">{project.subtitle}</p>
        </div>
        <a href={project.url} target="_blank">
          <button className="btn btn-primary btn-sm rou w-max">
            View
            <BsArrowRight />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
