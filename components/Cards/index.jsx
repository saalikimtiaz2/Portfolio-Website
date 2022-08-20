import React from "react";
import Link from "next/link";
import Styles from "./styles.module.scss";

function Card({ project }) {
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  return (
    <div
      className={`${Styles.cardRoot} xs:h-[28rem] lg:h-[22rem] w-full relative rounded-xl overflow-hidden bg-cover bg-center hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 ease-in-out`}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(${hexToRgb(
            project.bg
          )},0) 60%,  rgba(${hexToRgb(project.bg)},0)60%,   rgba(${hexToRgb(
            project.bg
          )},0.75)75%,  rgba(${hexToRgb(project.bg)},1)100% )`,
        }}
        className={`${Styles.overlay2} bg-opacity-40 absolute overflow-hidden rounded-xl top-0 left-0 right-0 bottom-0 p-4 flex flex-col justify-end transition-all duration-500 ease-in-out `}
      >
        <img src={project.logo} alt="logo" className="w-14 mb-4" />
        <div className=" whitespace-nowrap text-white">{project.title}</div>
        <p className="text-white text-[12px] font-light">{project.subtitle}</p>
      </div>

      <div
        style={{ backgroundColor: `rgba(${hexToRgb(project.bg)},0.4)` }}
        className={`${Styles.overlay} bg-opacity-40 absolute rounded-xl top-1 left-1 right-1 bottom-1 text-center flex flex-col justify-center items-center p-4 backdrop-blur-md transition-all duration-500 ease-in-out `}
      >
        <h3 className="text-white mb-2 font-medium">{project.title}</h3>
        <p className="text-white font-light text-[14px]">
          {project.description}
        </p>
        <div className="flex items-center gap-1 flex-wrap justify-center pt-4">
          {project.tags.map((tag) => (
            <p
              className="text-white whitespace-nowrap text-[12px] p-2 border border-white "
              key={tag}
            >
              {tag}
            </p>
          ))}
        </div>
        <Link href={project.link} hrefPass>
          <button className="w-full text-white bg-black  border border-black py-2 text-14 mt-4 hover:text-black hover:bg-white hover:border-white transition-all ease-in-out duration-500">
            View
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
