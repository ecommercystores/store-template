import Summary from "../components/cart/summary";
import { Navbar } from "../components";
import CartItems from "../components/cart/cart-items";
import { getStoreDetails } from "@/actions/store-details";

const CartPage = async () => {
  const { phoneNo } = await getStoreDetails();

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-10 lg:px-20 md:my-4">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <CartItems />
            <Summary phoneNo={phoneNo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
