"use client";

import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { addCommaSeparator } from "@/lib/utils";
import useCart from "@/hooks/use-cart";
import { blurData } from "@/lib/data";

const Card = ({ product }: any) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(product);
  };
  return (
    <div className="border rounded-lg p-2.5 pr-1.5 shadow-sm group hover:bg-green-dark/10 bg-white flex flex-col gap-4 ">
      <Link
        href={`/product/${product.slug.current}`}
        className="aspect-h-1 aspect-w-1 w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 "
      >
        <Image
          src={urlForImage(product?.images && product.images[0]).url()}
          alt={product.slug}
          width={220}
          height={100}
          className="w-full h-80 object-cover object-center lg:w-full"
          placeholder="blur"
          blurDataURL={blurData}
        />
      </Link>
      <Link
        href={`/product/${product.slug.current}`}
        className="flex justify-between pr-1"
      >
        <h3 className="text-md uppercase font-bold text-gray-600">
          {product.name}
        </h3>
      </Link>
      <div className="flex justify-between pr-1">
        <h3 className="text-lg font-bold text-gray-700">
          KES {addCommaSeparator(Number(product.price))}
        </h3>
        <div
          onClick={onAddToCart}
          className="flex text-green-dark gap-2 items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          <p className="font-bold text-base">Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
