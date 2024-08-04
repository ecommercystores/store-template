import Gallery from "@/app/components/product-details/gallery";
import Info from "@/app/components/info";

import { BreadCrumbs } from "@/app/components/bread-crumbs";
import { getStoreDetails } from "@/actions/store-details";

export interface ProductPageProps {
  product: any;
}

const ProductPage: React.FC<ProductPageProps> = async ({ product }) => {
  const { phoneNo } = await getStoreDetails();
  return (
    <div className="mx-auto max-w-7xl">
      <BreadCrumbs name={product.name} link="/" />
      <div className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} phoneNo={phoneNo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
