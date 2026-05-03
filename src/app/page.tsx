import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Hero from "@/containers/Hero";
import Projects from "@/containers/Projects";
import Services from "@/containers/Services";
import TechStack from "@/containers/TechStack";
import Testimonials from "@/containers/Testimonials";
import {
  ProfileType,
  jobTypes,
  projectTypes,
  testimonialTypes,
} from "@/interfaces/sanity";
import {
  getJobs,
  getProfile,
  getProjects,
  getTestimonials,
} from "@/sanity/sanity.query";

/** Fetch Sanity on every request (no static HTML cache for this route). Refresh the browser to see Studio changes immediately. */
export const dynamic = "force-dynamic";

const Home = async () => {
  const profile: ProfileType[] = await getProfile();
  const projects: projectTypes[] = await getProjects();
  const testimonials: testimonialTypes[] = await getTestimonials();
  const jobs: jobTypes[] = await getJobs();

  if (!profile?.length) {
    return <Loader />;
  }

  const currentProfile = profile[0];

  return (
    <Layout>
      <Hero profile={currentProfile} />
      <About jobs={jobs} profile={currentProfile} />
      <Services profile={currentProfile} />
      <TechStack profile={currentProfile} />
      <Projects projects={projects} profile={currentProfile} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </Layout>
  );
};

export default Home;
