/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import {
  MdOutlineContacts,
  MdOutlineHomeRepairService,
  MdOutlineDarkMode,
  MdLightMode,
} from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  const { darkMode, toggleMode } = useContext(ThemeContext);

  const [navbar, setNavbar] = useState(false);

  const navScroll = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    navScroll();
    window.addEventListener("scroll", navScroll);
  });

  const btnClasses =
    "flex items-center justify-center text-[24px] h-10 w-10 rounded-full text-white hover:bg-black hover:bg-opacity-50 trasition-all ease-in-out duration-500";

  return (
    <div
      className={`${
        navbar ? "lg:translate-y-0" : "lg:translate-y-[100vh]"
      } fixed xs:bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-[150]  flex items-center justify-evenly gap-x-2 bg-black xs:bg-opacity-60 sm:bg-opacity-40 p-4 rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out`}
    >
      <Link href="/#home" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#home" ? "active" : ""
          }`}
        >
          <AiOutlineHome />
        </button>
      </Link>
      <Link href="/#about" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#about" ? "active" : ""
          }`}
        >
          <AiOutlineUser />
        </button>
      </Link>
      <Link href="/#techStack" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#techStack" ? "active" : ""
          }`}
        >
          <BsFillJournalBookmarkFill />
        </button>
      </Link>
      {/* <Link href="/#services" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#services" ? "active" : ""
          }`}
        >
          <MdOutlineHomeRepairService />
        </button>
      </Link> */}
      <Link href="/#work" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#work" ? "active" : ""
          }`}
        >
          <BiCodeAlt />
        </button>
      </Link>
      <Link href="/#contact" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#contact" ? "active" : ""
          }`}
        >
          <MdOutlineContacts />
        </button>
      </Link>
      <button
        onClick={toggleMode}
        className="h-10 w-10 rounded-full bg-secondary text-white flex items-center justify-center text-[24px]"
        style={{ backgroundColor: darkMode ? "" : "white !important" }}
      >
        {darkMode ? <MdLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}

export default NavBar;
