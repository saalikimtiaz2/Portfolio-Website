export type serviceTypes = {
  title: string;
  subtitle: string;
};
export type techStackTypes = {
  title: string;
  logo: string;
};
export type socialLinkTypes = {
  name: string;
  url: string;
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
  location: string;
  resumeURL: string;
  serviceTitle: string;
  services: serviceTypes[];
  socialLinks: socialLinkTypes[];
  techStack: techStackTypes[];
  projectsHeading: string;
}

export interface projectTypes {
  _id: string;
  title: string;
  slug: string;
  subtitle: string;
  featured: boolean;
  personal: boolean;
  bgImage: {
    alt: string;
    image: string;
  };
  url: string;
  color: string;
  technologies: string[];
  logo: string;
  screenshot: string;
  deliverables: string[];
}

export interface testimonialTypes {
  _id: string;
  name: string;
  designation: string;
  company: string;
  review: any;
  image: string;
}
