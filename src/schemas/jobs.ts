import { MdWorkOutline } from "react-icons/md";
import { defineField } from "sanity";

const Jobs = {
  name: "jobs",
  title: "Jobs",
  type: "document",
  icon: MdWorkOutline,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "startedDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endingDate",
      title: "Ending Date",
      type: "date",
    },
    {
      name: "stillWorking",
      title: "Still Working There?",
      type: "boolean",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
      description: "Upload a user photo",
      options: { hotspot: true },
    },
  ],
};

export default Jobs;
