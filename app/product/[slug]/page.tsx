import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import ProductPage from "@/app/components/product-details";
import { Navbar } from "@/app/components";
import NoProducts from "@/components/no-products";

export const revalidate = 0;

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await client.fetch(
    groq`*[_type == "product" && slug.current == "${params.slug}"]`
  );

  const product = products.find(
    (product: any) => product.slug.current == params.slug
  );
  if (!product) return <NoProducts />;

  return (
    <>
      <Navbar />

      <ProductPage product={product} />
    </>
  );
};

export default Page;
