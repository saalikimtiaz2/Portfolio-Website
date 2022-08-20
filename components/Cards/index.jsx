import React from "react";

function Card() {
  const hexToRgb = (hex) =>
    hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r, g, b) => "#" + r + r + g + g + b + b
      )
      .substring(1)
      .match(/.{2}/g)
      .map((x) => parseInt(x, 16));

  const bg = "#5AA9A4";
  return (
    <div
      className="h-[20rem] w-[14rem] relative rounded-xl overflow-hidden bg-cover bg-center hover:shadow-2xl hover:scale-[1.05] transition-all duration-500 ease-in-out"
      style={{ backgroundImage: "url(/assets/projects/tfj.jpg)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4 hover:backdrop-blur-[2px] transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `linear-gradient(rgba(${hexToRgb(
            bg
          )},0) 60%,  rgba(${hexToRgb(bg)},0)60%,   rgba(${hexToRgb(
            bg
          )},0.75)75%,  rgba(${hexToRgb(bg)},1)100% )`,
        }}
      >
        Toronto Fine Jewelry
      </div>
    </div>
  );
}

export default Card;
