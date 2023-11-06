"use client";
import Link from "next/link";
import Layout from "@/components/Layout";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";

const socialIcons = [
  {
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/salikimtiaz",
  },
  {
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/saalikimtiaz2",
  },
  {
    name: "X",
    icon: <FaXTwitter />,
    link: "https://twitter.com/salik__imtiaz",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/saalikimtiaz2",
  },
  {
    name: "Instgram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/salik.dev",
  },

  {
    name: "Buy me a Coffee",
    icon: <CiCoffeeCup />,
    link: "https://www.buymeacoffee.com/salikimtiazx",
  },
];

const wordsList = [
  "سلام",
  "Hello",
  "Bonjour",
  "As-Salaam-Alaikum",
  "Nomoshkar",
  "Hola",
  "مرحبا",
  "Olá",
  "नमस्ते",
  "Ciao",
];

export default function Home() {
  return (
    <Layout>
      <section className="flex h-[768px] z-50 relative landingArea bg-accent dark:bg-black ">
        <p className="absolute top-[10rem] left-1/2 xs:text-4xl whitespace-nowrap md:text-[72px] text-slate-500 -translate-x-1/2 z-[150] font-dm font-bold opacity-5 dark:opacity-10">
          <Typewriter words={wordsList} loop delaySpeed={3000} />
        </p>
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover py-20 flex flex-col justify-center"
          style={{ backgroundImage: `url('background/Meteor.svg')` }}
        >
          <div className="xs:px-4 lg:px-24">
            <h1 className="xs:text-3xl md:text-5xl lg:text-[84px] font-dm leading-loose">
              Crafting 🚀 Exceptional{" "}
              <span className="block xs:pl-20 md:pl-32 font-dm ">
                🔥 User Experiences
              </span>
            </h1>
            <p className="mt-4 sm:w-[50ch] text-lg">
              <span className="text-white bg-primary inline-block px-2 py-1 font-medium rounded">
                <Typewriter
                  words={wordsList}
                  loop
                  cursor
                  cursorBlinking
                  cursorStyle="|"
                />
              </span>{" "}
              and welcome to my portfolio!
              <br /> I'm thrilled to showcase my passion for crafting captiving
              and functional websites.
            </p>
            <div className="md:flex items-center gap-x-4">
              <button className="btn btn-primary rounded-full mt-4">
                👋🏻 Let&apos;s Talk
              </button>
              {/* <button className="btn mt-4 btn-sm">
                <MdOutlineDocumentScanner /> Download CV
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white dark:bg-neutral-900 pt-40 pb-8 px-4 lg:px-20 ">
        <div className="absolute hover:scale-[1.05] transition-all duration-300 ease-in-out z-[100] xs:-top-[10rem] sm:-top-[16rem] md:-top-[20rem]  right-8 sm:right-16 xl:right-48 xs:h-[300px] md:h-[450px] xl:h-[550px] xs:w-[300px] md:w-[450px] xl:w-[550px] bg-indigo-700 rounded-lg sm:rotate-6">
          <div>
            <img
              src="/images/salik.png"
              className="absolute bottom-0 right-0 rounded-lg "
            />
          </div>
        </div>
        <p>Follow Me:</p>
        <div className="mt-4 flex items-center gap-4 flex-wrap">
          {socialIcons.map((social) => (
            <Link key={social.name} href={social.link}>
              <button className="xs:h-10 sm:h-12 xs:w-10 sm:w-12 text-[1rem] sm:text-[1.5rem] flex items-center justify-center rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out">
                {social.icon}
              </button>
            </Link>
          ))}
          <span className="sm:inline-block bg-black dark:bg-white h-[2px] w-32 xs:hidden" />
        </div>
        <p className="text-center sm:w-[35ch] mx-auto text-xl sm:text-3xl mdtext-4xl mt-8">
          👋🏻Hello! I'm Salik,{" "}
          <span className="inline-block mb-1 bg-indigo-700 h-[3px] w-12 " /> a
          creative and driven web developer with 3 years of experience in the
          field. I thrive on turning imaginative ideas into digital retalities,
          constantly seeking innovative ways to blend design and technology.
        </p>
        <h1 className="xs:text-3xl md:text-5xl text-center font-dm leading-loose mx-auto w-[20ch] mt-32">
          I'm specialize in a range of 💪 Skills
        </h1>
      </section>
    </Layout>
  );
}
