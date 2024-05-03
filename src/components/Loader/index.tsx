"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

function Loader() {
  const loaderMain = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (loaderMain.current) {
      gsap.to(loaderMain.current, {
        rotate: 360,
      });

      const circleElement = loaderMain.current.querySelector(".circle");
      if (circleElement) {
        gsap.to(circleElement, {
          x: 100,
        });
      }
    }
  }, []);

  return (
    <div
      className="absolute top-0 left-0 right-0 h-screen bg-primary z-[999]"
      ref={loaderMain}
    >
      hello
    </div>
  );
}

export default Loader;
