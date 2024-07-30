import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Card from "./Card";

export const Products = () => {
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
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
    <div className="container">
      <div className="-py4">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
const FeaturedProducts = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && available == true && isFeatured == true]`
  );

  return (
    <div className="container">
      <div className="-py4">
        <h2 className="text-3xl font-bold">Featured Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
const NewProducts = async () => {
  const products = await client.fetch(
    groq`*[_type == "product" && available == true] | order(_createdAt desc) `
  );

  return (
    <div className="container">
      <div className="-py4">
        <h2 className="text-3xl font-bold">Discover New Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {products.map((product: any, index: number) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
