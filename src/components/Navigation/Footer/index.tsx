"use client";
import { Logo } from "@/components/SvgIcons";
import { scrolltoHash } from "@/helpers/scrollHash";

function Footer() {
  return (
    <div className="bg-black text-white md:flex items-center justify-between px-4 md:px-32 py-4">
      <Logo height="52px" />
      <ul className="items-center gap-x-4 xs:hidden md:flex">
        <li>
          <button className="nav-lick" onClick={() => scrolltoHash("home")}>
            Home
          </button>
        </li>
        <li>
          <button className="nav-lick" onClick={() => scrolltoHash("about")}>
            About
          </button>
        </li>
        <li>
          <button className="nav-lick" onClick={() => scrolltoHash("services")}>
            Services
          </button>
        </li>
        <li>
          <button className="nav-lick" onClick={() => scrolltoHash("projects")}>
            Work
          </button>
        </li>
        <li>
          <button className="nav-lick" onClick={() => scrolltoHash("contact")}>
            Contacts
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
