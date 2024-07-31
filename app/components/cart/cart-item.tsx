import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { blurData } from "@/lib/data";
import { urlForImage } from "@/sanity/lib/image";

interface CartItemProps {
  data: any;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  function onRemove() {
    cart.removeItem(data.slug);
  }

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={urlForImage(data?.images && data.images[0]).url()}
          alt="image"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={blurData}
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-center sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 flex flex-col gap-4 sm:pr-0">
          <div className="flex justify-between">
            <p className=" text-lg font-semibold text-primary">{data.name}</p>
          </div>

          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
