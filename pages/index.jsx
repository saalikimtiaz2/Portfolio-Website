import React, { useState, useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Cards";
import {
  Linkedin,
  Github,
  Facebook,
  Instagram,
  Twitter,
  UIUX,
  Developer,
} from "../components/SvgIcons";
import Contact from "../containers/Contact";
import { icons } from "../models";
import Projects from "../models/projects";
import Styles from "../styles/home.module.scss";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // states
  const [hoverUIUX, setHoverUIUX] = useState(false);
  const [hoverDeveloper, setHoverDeveloper] = useState(false);

  // Ref's
  const contactRef = useRef();

  // Ref's Function
  const handleContactScroll = () => {
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Head>
        <title>Salik Imtiaz | Frotend Engineer (React)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section id="home">
          <div className="xs:px-4 lg:px-20 pt-4 ">
            <div className="grid grid-cols-12 xs:gap-y-10 lg:gap-10 ">
              <div className="xs:col-span-12 lg:col-span-8 relative flex xs:flex-col lg:flex-row lg:items-end">
                <img
                  src="/assets/hero.svg"
                  alt=""
                  className={Styles.heroImage}
                />
                <h2 className={Styles.title}>
                  Salik Imtiaz
                  <img
                    src="/assets/icons/right-arrow.svg"
                    alt=""
                    className="xs:h-12 lg:h-20"
                  />
                </h2>
              </div>
              <div className="xs:col-span-12 lg:col-span-4 xs:pt-0 lg:pt-10 flex flex-col justify-between gap-y-20">
                <div>
                  <h3>/ This is me</h3>
                  <h2 className="max-w-20">
                    Experienced frontend engineer remotly from Islamabad,
                    Pakistan.
                  </h2>
                  <p className="max-w-35 mt-8 text-16 text-gray">
                    Proficient in various platforms, languages, and design
                    systems. Experienced with the latest cutting-edge
                    development tools and procedures. Able to effectively
                    self-manage during independent projects, as well as
                    collaborate as part of a productive team.
                  </p>
                  <button
                    onClick={handleContactScroll}
                    className="text-24 text-primary flex items-center gap-4 mt-4 btn btn-right"
                  >
                    Hire Me
                    <img
                      src="/assets/icons/right-arrow.svg"
                      alt=""
                      className="h-4"
                    />
                  </button>
                </div>
                <div className="mx-auto">
                  <ul className="flex items-center">
                    <li className="mr-4">
                      <Linkedin />
                    </li>
                    <li className="mr-4">
                      <Github />
                    </li>
                    <li className="mr-4">
                      <Facebook />
                    </li>
                    <li className="mr-4">
                      <Instagram />
                    </li>
                    <li>
                      <Twitter />
                    </li>
                  </ul>
                  <h3
                    className={`${
                      darkMode ? "text-darkGray" : "text-gray"
                    } font-bold normal-case text-center mt-2 mb-0 `}
                  >
                    scroll for more
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`pb-24 ${darkMode ? "bg-darkCard" : "bg-grayBg"}`}>
          <div
            className="xs:px-4 lg:px-0 lg:container lg:mx-auto pt-24"
            id="about"
          >
            <div className="grid grid-cols-12 xs:gap-y-20 lg:gap-6 mb-10">
              <div className="xs:col-span-12 lg:col-span-6 relative">
                <h2
                  className={`stylishHeading -rotate-10 text-center ${
                    darkMode ? "text-darkGray" : "text-gray"
                  }`}
                >
                  About.
                </h2>
                <div className="flex items-center justify-evenly mt-4">
                  <div>
                    <h2 className="text-40 text-primary mb-2">3+</h2>
                    <h2 className="text-20 max-w-15">Years of experience.</h2>
                  </div>
                  <div>
                    <h2 className="text-40 text-primary mb-2">30+</h2>
                    <h2 className="text-20 max-w-10">Satisfied clients.</h2>
                  </div>
                </div>
              </div>
              <div className="xs:col-span-12 lg:col-span-6">
                <h3>/ problem solver</h3>
                <h2 className="max-w-45">
                  Experienced Frontend Engineer adept in bringing forth
                  expertise in web systems.
                </h2>
                <h4 className="mt-8 text-20">Professional Experience</h4>
                <h5 className="max-w-55 mt-2 text-secondary">
                  Frontend Engineer, Code Huddle, Islamabad
                </h5>
                <p className="max-w-55 font-light text-14">
                  FEBRUARY 2022 - Present
                </p>
                <h5 className="max-w-55 mt-2 text-secondary">
                  Frontend Engineer, The Web Agency, Islamabad
                </h5>
                <p className="max-w-55 font-light text-14">
                  APRIL 2022 - JANUARY 2022
                </p>
                <a href="/assets/Salik-Resume.pdf" download>
                  <button className="text-24 text-primary flex items-center gap-4 mt-4 btn~ btn-down">
                    Download Resume
                    <img
                      src="/assets/icons/right-arrow.svg"
                      alt=""
                      className="h-3 rotate-90"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div id="techStack" className="py-16">
            <h2
              className={`stylishHeading text-center mt-20 ${
                darkMode ? "text-darkGray" : "text-gray"
              }`}
            >
              Tech Stack.
            </h2>
            <p className="max-w-55 text-center text-gray mx-auto mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quae
              nemo saepe quas modi excepturi autem.
            </p>
            <div className="lg:container lg:mx-auto flex items-center flex-wrap justify-center xs:gap-10 lg:gap-x-20 mt-20">
              {icons.map((icon) => (
                <div
                  className={`${
                    darkMode
                      ? "hover:bg-darkCard hover:shadow-xl"
                      : "hover:shadow-md"
                  } px-6 py-4 gap-4 rounded-md xs:h-32 xs:w-32
                   lg:h-36 lg:w-36 flex flex-col items-center trasition duration-700 ${
                     Styles.techCard
                   }`}
                  key={icon.name}
                >
                  {darkMode ? (
                    <img
                      src={icon.darkImage}
                      alt=""
                      className="xs:h-[3rem] lg:h-16"
                    />
                  ) : (
                    <img
                      src={icon.image}
                      alt=""
                      className="xs:h-[3rem] lg:h-16"
                    />
                  )}
                  <p className="text-gray xs:text-12 lg:text-14 text-center pb-0">
                    {icon.name}
                  </p>
                  <span className="border-b-2 border-primary" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:container lg:mx-auto" id="services">
            <div className="grid grid-cols-12 mt-20 xs:gap-4 lg:gap-10 items-center">
              <div className="xs:col-span-12 lg:col-span-5 p-4">
                <h2
                  className={`stylishHeading -rotate-10 text-center  ${
                    darkMode ? "text-darkGray" : "text-gray"
                  }`}
                >
                  Services.
                </h2>
                <p className="max-w-55 text-gray mt-6 xs:text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quae nemo saepe quas modi excepturi autem.
                </p>
              </div>
              <div className="xs:col-span-12 lg:col-span-7 flex flex-wrap items-center gap-6 xs:justify-center lg:justify-end">
                <div
                  className={`${
                    Styles.card
                  } shadow-md hover:shadow-xl hover:text-white ${
                    darkMode ? "bg-darkBg" : "bg-white"
                  }`}
                  onMouseEnter={() => setHoverUIUX(true)}
                  onMouseLeave={() => setHoverUIUX(false)}
                >
                  <div>
                    <UIUX isHover={hoverUIUX} />
                    <h2 className="xs:text-16 lg:text-20 max-w-10 mt-16">
                      UI/UX Designing
                    </h2>
                    <p
                      className={`${
                        hoverUIUX ? "text-white" : "text-gray"
                      } text-12 mt-8 transition duration-500`}
                    >
                      110+ Projects
                    </p>
                  </div>
                </div>
                <div
                  className={`${
                    Styles.card
                  } shadow-md hover:shadow-xl hover:text-white ${
                    darkMode ? "bg-darkBg" : "bg-white"
                  }`}
                  onMouseEnter={() => setHoverDeveloper(true)}
                  onMouseLeave={() => setHoverDeveloper(false)}
                >
                  <div>
                    <Developer isHover={hoverDeveloper} />
                    <h2 className="xs:text-16 lg:text-20 max-w-10 mt-16">
                      Frontend Developement
                    </h2>
                    <p
                      className={`${
                        hoverDeveloper ? "text-white" : "text-gray"
                      } text-12 mt-8 transition duration-500`}
                    >
                      110+ Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work">
          <div className="lg:container lg:mx-auto xs:px-4 lg:px-0">
            <div className="grid grid-cols-12 items-end">
              <div className="xs:col-span-12 lg:col-span-5">
                <h3>/ works</h3>
                <h2 className="max-w-15">Selected work client projects.</h2>
                <p className="max-w-40 mt-8 text-14 text-gray">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                  quae nemo saepe quas modi excepturi autem.
                </p>
              </div>
              <div className="xs:col-span-12 lg:col-span-7">
                <h2
                  className={`stylishHeading -rotate-10 xs:text-center lg:text-left ${
                    darkMode ? "text-darkGray" : "text-gray"
                  }`}
                >
                  Work & code.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 xs:mt-10 lg:mt-32 mb-6">
              {Projects.map((project) => (
                <div
                  key={project.name}
                  className="xs:col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-2"
                >
                  <Card project={project} />{" "}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className={`lg:py-32 ${darkMode ? "bg-darkCard" : "bg-grayBg"}`}
          ref={contactRef}
          id="contact"
        >
          <Contact />
        </section>
      </Layout>
    </div>
  );
}

export default Home;
