import { defineField, defineType } from "sanity";
import { client } from "../lib/client";

export const details = defineType({
  name: "details",
  title: "Store Details",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Store Name",
      type: "string",
    }),

    {
      name: "phoneNo",
      title: "WhatsApp number",
      type: "string",
    },
    {
      name: "socialMediaLinks",
      title: "Social Media Links",
      type: "array",
      of: [{ type: "socialMediaLink" }],
    },
  ],
  initialValue: async () => {
    const existing = await client.fetch('*[_type == "details"][0]');
    if (existing) {
      return {
        name: existing.name,
        phoneNo: existing.phoneNo,
        socialMediaLinks: existing.socialMediaLinks,
      };
    }
    return {};
  },
  preview: {
    select: {
      title: "name",
      subtitle: "phoneNo",
      media: "socialMediaLinks[0].image", // Assuming the first social media link has an image
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? `WhatsApp: ${subtitle}` : "No WhatsApp number",
        media,
      };
    },
  },
  validation: (Rule) =>
    Rule.custom(async () => {
      const existing = await client.fetch('*[_type == "details"]');
      if (existing.length > 1) {
        return "Only one Store Details document is allowed";
      }
      return true;
    }),
});
