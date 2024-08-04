import { defineField, defineType } from "sanity";
import { client } from "../lib/client";

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
  preview: {
    select: {
      title: "title",
    },
  },
  initialValue: async () => {
    const existing = await client.fetch('*[_type == "hero"][0]');
    if (existing) {
      return {
        title: existing.title,
        description: existing.description,
        images: existing.images,
      };
    }
    return {};
  },
  validation: (Rule) =>
    Rule.custom(async (value) => {
      const existing = await client.fetch('*[_type == "hero"]');
      if (existing.length > 1) {
        return "Only one Hero document is allowed";
      }
      return true;
    }),
});
