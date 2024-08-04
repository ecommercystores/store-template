import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const getHeroDetails = async () => {
  const data: Details = await client.fetch(
    groq`*[_type == "hero"][0]{
  title,
  description,
  images
}`
  );
  // console.log(data);

  return data;
};

interface Details {
  title: string;
  description: string;
  images: any[];
}
