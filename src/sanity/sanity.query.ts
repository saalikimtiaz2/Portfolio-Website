import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      firstName,
      lastName,
      headline,
      subtitle,
      profileImage {alt, "image": asset->url},
      location,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      serviceTitle,
      services,
      techStack,
      projectsHeading
    }` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "projects"]{
      _id,
      title,
      slug,
      subtitle,
      featured,
      personal,
      bgImage {alt, "image": asset->url},
      url,
      color,
      technologies,
      "logo": logo.asset->url,
      "screenshot": screenshot.asset->url,
      deliverables
    }` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonials"]{
      _id,
      name,
      designation,
      company,
      review,
      image
    }` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}

export async function getJobs() {
  return client.fetch(
    groq`*[_type == "jobs"]{
      _id,
      title,
      company,
      location,
      startedDate,
      endingDate,
      stillWorking,
      description,
      logo
    }` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}
