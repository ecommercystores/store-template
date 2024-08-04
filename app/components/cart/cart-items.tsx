"use client";

import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import CartItem from "./cart-item";

const CartItems = () => {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="lg:col-span-7">
      {cart.items.length === 0 && (
        <p className="text-neutral-500">No items added to cart.</p>
      )}
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
export default CartItems;
