import Card from "@/app/components/Card";
import { Categories } from "@/app/components/Categories";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;

async function Page({ params }: { params: { slug: string } }) {
  const products = await client.fetch(
    groq`*[_type == "product" && category._ref == *[_type == "category" && name == "${params.slug}"][0]._id]`
  );
  return (
    <div className="px-4 md:px-10 lg:px-20 md:my-4">
      <div className="flex flex-col gap-2">
        <Categories slug={params.slug} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {products.map((product: any) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
