"use client";

import { MessageSquare, PhoneCall, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useOrigin } from "@/hooks/use-origin";
import { formatCurrency } from "@/lib/utils";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: any;
  phoneNo?: string;
}

const Info: React.FC<InfoProps> = ({ data, phoneNo }) => {
  const origin = useOrigin();
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  const message = `Hi am interested in ${
    data.name
  }. Link: ${origin}/product/${JSON.stringify(data.slug)}`;
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="flex justify-between items-center w-full text-2xl text-gray-900">
          <p className=" font-bold text-gray-800">
            {data.offer
              ? formatCurrency(data.discountedPrice)
              : formatCurrency(data.price)}
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-5 items-start">
        <p className="w-full min-h-[3rem] text-md">{data?.description}</p>
      </div>
      <div className="mt-5 w-full flex flex-col gap-4 items-start ">
        <Button
          disabled={phoneNo === undefined}
          onClick={() =>
            window.open(`https://wa.me/${phoneNo}?text=${message}`, "_blank")
          }
          className="flex text-white bg-green-500 w-full items-center gap-x-2 py-[1.5rem]"
        >
          Enquire on whatsapp
          <MessageSquare size={20} />
        </Button>
        <Button
          disabled={phoneNo === undefined}
          variant="outline"
          onClick={() => window.open(`tel:${phoneNo}`, "_blank")}
          className="flex items-center w-full border border-gray-800  gap-x-2 py-[1.5rem]"
        >
          Call Now
          <PhoneCall size={20} />
        </Button>
        <Button
          onClick={onAddToCart}
          className="flex text-white bg-gray-800 w-full items-center gap-x-2 py-[1.5rem]"
        >
          Add To Cart
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
