"use client";
import Drawer from "@/components/Drawer";
import { Logo } from "@/components/SvgIcons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { scrolltoHash } from "@/helpers/scrollHash";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";

function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [colorChange, setColorchange] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

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
          <li>
            <a href="mailto:r.salikimtiaz@gmail.com" target="_blank">
              <button className="btn btn-primary btn-sm rounded-full">
                Hire Me
              </button>
            </a>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>

        <button className="md:hidden text-3xl" onClick={toggleDrawer}>
          <RiMenuFoldFill />
        </button>
      </div>
      <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer}>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between">
              <Logo height="52px" />
              <div className="flex items-center gap-x-4">
                <ThemeSwitcher />

                <button className="text-3xl" onClick={toggleDrawer}>
                  <IoClose />
                </button>
              </div>
            </div>
            <ul className="mt-10">
              <li>
                <button
                  className="py-6 px-4 mt-6 text-5xl font-semibold font-jost capitalize"
                  onClick={() => {
                    scrolltoHash("home");
                    toggleDrawer();
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="py-6 px-4 mt-6 text-5xl font-semibold font-jost capitalize"
                  onClick={() => {
                    scrolltoHash("about");
                    toggleDrawer();
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="py-6 px-4 mt-6 text-5xl font-semibold font-jost capitalize"
                  onClick={() => {
                    scrolltoHash("services");
                    toggleDrawer();
                  }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  className="py-6 px-4 mt-6 text-5xl font-semibold font-jost capitalize"
                  onClick={() => {
                    scrolltoHash("projects");
                    toggleDrawer();
                  }}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  className="py-6 px-4 mt-6 text-5xl font-semibold font-jost capitalize"
                  onClick={() => {
                    scrolltoHash("contact");
                    toggleDrawer();
                  }}
                >
                  Contacts
                </button>
              </li>
            </ul>
          </div>
          <a href="mailto:r.salikimtiaz@gmail.com" target="_blank">
            <button
              className="btn btn-primary w-full text-3xl"
              onClick={toggleDrawer}
            >
              Hire Me
            </button>
          </a>
        </div>
      </Drawer>
    </div>
  );
}

export default Header;
