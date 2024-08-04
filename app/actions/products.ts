import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

const getProduct = async (slug: string): Promise<any> => {
  const products = await client.fetch(
    groq`*[_type == "product" && slug.current == "${slug}"]`
  );
  return products;
};

export default getProduct;
