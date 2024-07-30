import { defineField, defineType } from "sanity";

export const phoneNo = defineType({
  name: "phoneNo",
  title: "Phone number",
  type: "document",
  fields: [
    defineField({
      name: "phoneNo",
      title: "WhatsApp number",
      type: "string",
    }),
  ],
});
