import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Experience from "@/containers/Experience";
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
import { getYearsOfExperience } from "@/helpers/yearsOfExperience";
import { resolveSocialLinks } from "@/config/social";

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
  const yearsOfExperience = getYearsOfExperience(jobs);
  const socialLinks = resolveSocialLinks(currentProfile.socialLinks);

  return (
    <Layout socialLinks={socialLinks}>
      <Hero profile={currentProfile} />
      <About
        profile={currentProfile}
        socialLinks={socialLinks}
        yearsOfExperience={yearsOfExperience}
      />
      <Experience jobs={jobs} resumeURL={currentProfile.resumeURL} />
      <Services profile={currentProfile} />
      <TechStack profile={currentProfile} />
      <Projects projects={projects} profile={currentProfile} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </Layout>
  );
};

export default Home;
