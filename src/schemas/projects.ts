import { GoProjectSymlink } from "react-icons/go";
import { defineField } from "sanity";

const Projects = {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: GoProjectSymlink,
  fields: [
    defineField({
      name: "title",
      title: "Project Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
    },
    {
      name: "personal",
      title: "Personal Project",
      type: "boolean",
    },
    {
      name: "bgImage",
      title: "Background Image",
      type: "image",
      description: "Upload a background image",
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
      name: "url",
      title: "Project URL",
      type: "url",
    },
    {
      name: "color",
      title: "Primary Color Used",
      type: "string",
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      description: "Add list of technologies used in this project:",
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload a logo",
      options: { hotspot: true },
    },
    {
      name: "screenshot",
      title: "Project Screenshot",
      type: "image",
      description: "Upload a screenshot",
      options: { hotspot: true },
    },
    {
      name: "deliverables",
      title: "Deliverables Used",
      type: "array",
      description: "Add list of deliverables",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
};

export default Projects;
