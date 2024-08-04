import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const getStoreDetails = async () => {
  const data: Details = await client.fetch(
    groq`*[_type == "details"][0]{
  name,
  phoneNo,
  socialMediaLinks
}
`
  );
  // console.log(data);
  return { ...data, phoneNo: `254${data.phoneNo.slice(-9)}` };
};

interface Details {
  name: string;
  phoneNo: string;
  socialMediaLinks: { platform: string; url: string }[];
}
