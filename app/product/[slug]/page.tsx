import ProductPage from "@/app/components/product-details";
import { Navbar } from "@/app/components";
import NoProducts from "@/components/no-products";
import type { Metadata } from "next";
import getProduct from "@/actions/products";
import { urlForImage } from "@/sanity/lib/image";

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const products = await getProduct(params.slug);
  const product = products.find(
    (product: any) => product.slug.current == params.slug
  );
  if (!product)
    return {
      title: "Not found",
      description: "Product not available",
    };

  return {
    title: product.name,
    description: product.description,
    alternates: {
      canonical: `/product/${product.slug.current}`,
    },
    openGraph: {
      title: `${product.name}`,
      description: product.description,
      url: process.env.NEXT_PUBLIC_SITE_URL!,
      siteName: "Shop", // TODO: update
      images: [
        {
          url: `${urlForImage(product?.images && product.images[0]).url()}`,
          width: 800,
          height: 600,
          alt: `${product.name}`,
        },
        {
          url: `${urlForImage(product?.images && product.images[0]).url()}`,
          width: 1800,
          height: 1600,
          alt: `${product.name}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const products = await getProduct(params.slug);

  const product = products.find(
    (product: any) => product.slug.current == params.slug
  );
  if (!product) return <NoProducts />;

  return (
    <>
      <Navbar />

      <ProductPage product={product} />
    </>
  );
};

export default Page;
