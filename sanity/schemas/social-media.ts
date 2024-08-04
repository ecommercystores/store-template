import { defineField, defineType } from "sanity";

export const socialMediaLink = defineType({
  name: "socialMediaLink",
  title: "Social Media Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Twitter", value: "twitter" },
          { title: "Instagram", value: "instagram" },
        ],
        layout: "radio",
      },
    }),
    {
      name: "url",
      title: "URL",
      type: "url",
      hidden: ({ parent }) => !parent.platform, // Hide URL field if no platform is selected
    },
  ],
});
