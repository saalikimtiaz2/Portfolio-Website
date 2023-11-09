import { BiUser } from "react-icons/bi";
import { defineField } from "sanity";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(50),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "text",
      description: "brief description about you",
      validation: (rule) => rule.required(),
    }),
    {
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      description: "Add your social media links:",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name",
              type: "string",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "serviceTitle",
      title: "Services Title",
      type: "string",
    },
    {
      name: "services",
      title: "Services",
      type: "array",
      description: "List of services that you provide",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Service Name",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Service Subtitle",
              type: "string",
            },
          ],
        },
      ],
    },

    {
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      description: "List of your tech stack",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Technology Name",
              type: "string",
            },
            {
              name: "logo",
              title: "Technology Logo",
              type: "image",
              description: "Upload a technology logo",
              options: { hotspot: true },
            },
          ],
        },
      ],
    },
    {
      name: "projectsHeading",
      title: "Projects Heading",
      type: "string",
    },
  ],
};

export default profile;
