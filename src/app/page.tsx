import Link from "next/link";
// import { MdOutlineDocumentScanner } from "react-icons/md";
import Layout from "@/components/Layout";
import Typewriter from "@/components/TypeWriter";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Projects from "@/containers/Projects";
import Testimonials from "@/containers/Testimonials";
import getIcon from "@/helpers/getIcon";
import type {
  serviceTypes,
  socialLinkTypes,
  techStackTypes,
  testimonialTypes,
} from "@/interfaces/sanity";
import { ProfileType, jobTypes, projectTypes } from "@/interfaces/sanity";
import { imageUrlFor } from "@/sanity/sanity.client";
import {
  getJobs,
  getProfile,
  getProjects,
  getTestimonials,
} from "@/sanity/sanity.query";

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

const Home = async () => {
  const profile: ProfileType[] = await getProfile();
  const projects: projectTypes[] = await getProjects();
  const testimonials: testimonialTypes[] = await getTestimonials();
  const jobs: jobTypes[] = await getJobs();

  if (!profile) {
    return <span>Loading...</span>;
  }

  return (
    <Layout>
      <section className="flex h-[768px] z-50 relative landingArea bg-accent dark:bg-black ">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover py-20 flex flex-col justify-center"
          style={{ backgroundImage: `url('background/Meteor.svg')` }}
        >
          <div className="xs:px-4 lg:px-24">
            <h1 className="xs:text-3xl md:text-5xl lg:text-[84px] font-dm leading-loose w-[23ch]">
              {profile[0].headline}
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
              <br /> {profile[0].subtitle}
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
      <section className="relative bg-white dark:bg-neutral-900 py-40 px-4 lg:px-20 ">
        <div className="absolute hover:scale-[1.05] transition-all duration-300 ease-in-out z-[100] xs:-top-[10rem] sm:-top-[16rem] md:-top-[20rem]  right-8 sm:right-16 xl:right-48 xs:h-[300px] md:h-[450px] xl:h-[550px] xs:w-[300px] md:w-[450px] xl:w-[550px] bg-indigo-700 rounded-lg sm:rotate-6">
          <div>
            <img
              src={profile[0].profileImage.image}
              className="absolute bottom-0 right-0 rounded-lg "
            />
          </div>
        </div>
        <p>Follow Me:</p>
        <div className="mt-4 flex items-center gap-4 flex-wrap xs:justify-between sm:justify-start">
          {profile[0].socialLinks.map((social: socialLinkTypes) => (
            <Link key={social.name} href={social.url}>
              <button className="xs:h-10 sm:h-12 xs:w-10 sm:w-12 text-[1rem] sm:text-[1.5rem] flex items-center justify-center rounded-full border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 ease-in-out">
                {getIcon(social.name)}
              </button>
            </Link>
          ))}
          <span className="sm:inline-block bg-black dark:bg-white h-[2px] w-32 xs:hidden" />
        </div>
        <About jobs={jobs} />
        <h1 className="xs:text-3xl md:text-5xl text-center font-dm leading-loose mx-auto w-[20ch] mt-32">
          {profile[0].serviceTitle}
        </h1>
        <div className="lg:container mx-auto px-4 sm:px-20 pb-10 mt-20 grid grid-cols-12 gap-4 md:gap-8 lg:gap-12">
          {profile[0].services.map((service: serviceTypes, idx: number) => (
            <div
              key={service.title}
              className="xs:col-span-12 md:col-span-4 relative overflow-hidden rounded-lg px-8 py-16 text-center shadow-lg dark:border border-neutral-800 hover:border-primary hover:bg-primary hover:shadow-2xl hover:text-white transition-all duration-500 ease-in-out"
            >
              <span className="absolute top-8 font-light -left-6 text-[80px] opacity-10 inline-block">
                0{idx + 1}
              </span>
              <span className="inline-block mx-auto text-5xl">
                {getIcon(service.title)}
              </span>
              <h4 className="text-xl mt-6 mb-4">{service.title}</h4>
              <p className="text-sm w-[25ch] mx-auto">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-8 relative px-4">
        <div className="lg:container mx-auto">
          <h3 className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-4xl md:text-[84px] font-light md:tracking-widest uppercase opacity-5">
            Technologies
          </h3>
          <h4 className="text-center font-dm text-3xl md:text-5xl z-50">
            Tech Stack
          </h4>
          <div className="flex items-center justify-center gap-4 md:gap-12 flex-wrap pt-32">
            {profile[0].techStack.map((tech: techStackTypes) => (
              <div key={tech.title}>
                <div className="h-28 w-28 flex items-center p-2 justify-center rounded-full shadow-inner dark:bg-neutral-700 bg-neutral-100 backdrop-blur-sm">
                  <img
                    src={imageUrlFor(tech.logo).url()}
                    className="h-16 w-auto"
                    alt={`${tech.title}'s logo`}
                  />
                </div>
                <p className="text-center mt-4">{tech.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="min-h-screen py-20 relative px-4 md:px-32">
        <div className="lg:container mx-auto">
          <h3 className="text-center mx-auto w-[19ch] font-dm text-3xl md:text-5xl z-50 my-20 ">
            {profile[0].projectsHeading}
          </h3>
          <Projects projects={projects} />
        </div>
      </section>
      <Testimonials testimonials={testimonials} />
      <Contact />
    </Layout>
  );
};

export default Home;
