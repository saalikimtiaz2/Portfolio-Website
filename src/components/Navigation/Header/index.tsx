"use client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 66) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className={`fixed lg: w-full z-[1000] top-0 bg-opacity-70 flex items-center justify-between py-2 xs:px-4 lg:px-24 text-black dark:text-white transition-all ease-in-out duration-500 ${
        colorChange
          ? "bg-white dark:bg-black dark:bg-opacity-70 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <p>SALIK</p>
      <ul className="items-center gap-x-4 xs:hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">
            <button className="btn btn-primary btn-sm rounded-full">
              Contacts
            </button>
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
}

export default Header;
