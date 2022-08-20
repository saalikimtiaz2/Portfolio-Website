import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineContacts, MdOutlineHomeRepairService } from "react-icons/md";
import Link from "next/link";

function NavBar() {
  const btnClasses =
    "flex items-center justify-center text-[24px] h-14 w-14 rounded-full text-white hover:bg-black hover:bg-opacity-50";

  return (
    <div className="fixed xs:bottom-0 sm:bottom-4 xs:left-0 sm:left-1/2 sm:-translate-x-1/2 z-[150] xs:w-full sm:w-max flex items-center justify-evenly gap-x-2 bg-black xs:bg-opacity-60 sm:bg-opacity-40 p-2 xs:rounded-t-2xl sm:rounded-full backdrop-blur-sm">
      <Link href="/#home" passHref>
        <button className={btnClasses}>
          <AiOutlineHome />
        </button>
      </Link>
      <Link href="/#about" passHref>
        <button className={btnClasses}>
          <AiOutlineUser />
        </button>
      </Link>
      <Link href="/#techStack" passHref>
        <button className={btnClasses}>
          <BsFillJournalBookmarkFill />
        </button>
      </Link>
      <Link href="/#services" passHref>
        <button className={btnClasses}>
          <MdOutlineHomeRepairService />
        </button>
      </Link>
      <Link href="/#work" passHref>
        <button className={btnClasses}>
          <BiCodeAlt />
        </button>
      </Link>
      <Link href="/#contact" passHref>
        <button className={btnClasses}>
          <MdOutlineContacts />
        </button>
      </Link>
    </div>
  );
}

export default NavBar;
