"use client";
import { Logo } from "@/components/SvgIcons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { scrolltoHash } from "@/helpers/scrollHash";
import { useEffect, useState } from "react";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 66) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <div
      className={`fixed lg: w-screen z-[150] top-0 bg-opacity-70 flex items-center justify-between py-1 xs:px-4 lg:px-24 text-black dark:text-white transition-all ease-in-out duration-500 ${
        colorChange
          ? "bg-black/10 dark:bg-white/10 backdrop-blur-sm shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <Logo height="52px" />
      <div className="flex items-center gap-x-4">
        <ul className="items-center gap-x-4 xs:hidden md:flex">
          <li>
            <button className="nav-link" onClick={() => scrolltoHash("home")}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-link" onClick={() => scrolltoHash("about")}>
              About
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrolltoHash("services")}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrolltoHash("projects")}
            >
              Work
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => scrolltoHash("contact")}
            >
              Contacts
            </button>
          </li>
        </ul>
        <a href="mailto:r.salikimtiaz@gmail.com" target="_blank">
          <button className="btn btn-primary btn-sm rounded-full">
            Hire Me
          </button>
        </a>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default Header;
