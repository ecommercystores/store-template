"use client";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
const CartIcon = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }
  return (
    <Button
      variant="outline"
      onClick={() => router.push("/cart")}
      className="flex items-center rounded-lg px-4 py-2 text-primary"
    >
      <FiShoppingBag size={20} />
      <span className="ml-2 text-sm font-medium">{cart.items.length}</span>
    </Button>
  );
};
export default CartIcon;
