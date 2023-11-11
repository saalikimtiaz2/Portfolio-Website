import { MdReviews } from "react-icons/md";
import { defineField } from "sanity";

const Testimonials = {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  icon: MdReviews,
  fields: [
    defineField({
      name: "name",
      title: "User Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    {
      name: "company",
      title: "Company",
      type: "string",
    },
    {
      name: "review",
      title: "Review",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Photo",
      type: "image",
      description: "Upload a user photo",
      options: { hotspot: true },
    },
  ],
};

export default Testimonials;
