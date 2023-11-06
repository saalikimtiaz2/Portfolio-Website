import { PortableTextBlock } from "sanity";

export type ProfileType = {
  _id: string;
  firstName: string;
  lastName: string;
  headline: string;
  subtitle: string;
  profileImage: {
    alt: string;
    image: string;
  };
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  resumeURL: string;
  socialLinks: string[];
};
