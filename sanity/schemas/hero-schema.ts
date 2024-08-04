import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Details",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
    }),
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
});
