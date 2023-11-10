import Link from "next/link";

function Footer() {
  return (
    <div className="bg-black text-white md:flex items-center justify-between px-4 md:px-32 py-4">
      <h3>SALIK</h3>
      <ul className="items-center gap-x-4 xs:hidden md:flex">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
