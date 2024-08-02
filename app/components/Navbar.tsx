"use client";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
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
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 h-[10vh] bg-[#f8f8f8] ">
        <div className=" w-full h-full flex justify-between items-center">
          <Link href="/" className="logo">
            Shop
          </Link>
          <Button
            variant="outline"
            onClick={() => router.push("/cart")}
            className="flex items-center rounded-lg px-4 py-2"
          >
            <FiShoppingBag size={20} color="black" />
            <span className="ml-2 text-sm font-medium">
              {cart.items.length}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
