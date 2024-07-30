import { defineField, defineType } from "sanity";

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
  ],
});
