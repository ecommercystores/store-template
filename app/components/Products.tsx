import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Card from "./Card";
import SectionWrapper from "./SectionWrapper";

export const Products = () => {
  return (
    <div className="w-full pb-4">
      <FeaturedProducts />
      <BestSelling />
      <NewProducts />
    </div>
  );
};

const BestSelling = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && available == true]`
  );

  return (
    <SectionWrapper title="Best Selling Product">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};
const FeaturedProducts = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && available == true && isFeatured == true]`
  );

  return (
    <SectionWrapper title="Featured Products">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};
const NewProducts = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && available == true] | order(_createdAt desc) `
  );

  return (
    <SectionWrapper title="Discover New Products">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </SectionWrapper>
  );
};
