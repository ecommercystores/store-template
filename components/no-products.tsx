import { Navbar } from "@/app/components";

const NoProducts = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full h-[85vh] items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-800">No Products</h2>
      </div>
    </>
  );
};
export default NoProducts;
