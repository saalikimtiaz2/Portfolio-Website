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
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      serviceTitle,
      services,
      techStack
    }` // Add [0] to select the first matching profile (if there are multiple profiles)
  );
}
