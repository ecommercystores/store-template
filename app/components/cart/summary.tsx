"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const products = items
    .map(
      (item) =>
        `${process.env.NEXT_PUBLIC_SITE_URL!}/product/${item.slug.current}`
    )
    .join(" \n ");
  const message = `Hi am interested in the following product(s): \n ${products}`;

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-primary">Order summary</h2>
      <div className="my-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-800">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        disabled={items.length === 0}
        onClick={() =>
          window.open(`https://wa.me/${254783291954}?text=${message}`, "_blank")
        }
        className="flex w-full items-center gap-x-2 py-[1.5rem]"
      >
        Order On WhatsApp
      </Button>
    </div>
  );
};

export default Summary;
