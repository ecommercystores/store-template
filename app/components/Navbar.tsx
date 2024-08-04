import Link from "next/link";
import CartIcon from "./cart/cart-icon";
import { getStoreDetails } from "@/actions/store-details";

const Navbar = async () => {
  const { name } = await getStoreDetails();
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 h-[10vh] bg-background ">
        <div className=" w-full h-full flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold capitalize text-primary"
          >
            {name}
          </Link>
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navbar;
