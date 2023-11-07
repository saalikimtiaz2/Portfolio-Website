import { PortableTextBlock } from "sanity";

export type serviceTypes = {
  title: string;
  subtitle: string;
};

export interface ProfileType {
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
  fullBio: string;
  location: string;
  resumeURL: string;
  serviceTitle: string;
  services: serviceTypes[];
  socialLinks: string[];
}
