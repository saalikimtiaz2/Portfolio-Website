import React, { useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { MdOutlineContacts, MdOutlineHomeRepairService } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  const btnClasses =
    "flex items-center justify-center text-[24px] h-12 w-12 rounded-full text-white hover:bg-black hover:bg-opacity-50 trasition-all ease-in-out duration-500";

  useEffect(() => {
    console.log(router);
  }, [router]);

  return (
    <div className="fixed xs:bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-[150]  flex items-center justify-evenly gap-x-2 bg-black xs:bg-opacity-60 sm:bg-opacity-40 p-4 rounded-full backdrop-blur-sm">
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
      <Link href="/#services" passHref>
        <button
          className={`${btnClasses} ${
            router.asPath === "/#services" ? "active" : ""
          }`}
        >
          <MdOutlineHomeRepairService />
        </button>
      </Link>
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
    </div>
  );
}

export default NavBar;
