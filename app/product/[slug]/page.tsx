import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ProductPage from "@/app/components/product-details";
import { Navbar } from "@/app/components";

export const revalidate = 0;

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await client.fetch(
    groq`*[_type == "product" && slug.current == "${params.slug}"]`
  );
  const product = products.find(
    (product: any) => product.slug.current == params.slug
  );

  return (
    <>
      <Navbar />

      <ProductPage product={product} />
    </>
  );
};

export default Page;
