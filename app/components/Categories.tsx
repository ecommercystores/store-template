import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";

export async function Categories({ slug }: { slug: string }) {
  const categories = await client.fetch(
    groq`*[_type == "category"] {
  _id,
  name,
   "slug": slug.current,
}`
  );
  return (
    <div className="flex  gap-4 flex-wrap p-4  ">
      {categories.map((item: any) => (
        <CategoryItem
          key={item._id}
          name={item.name}
          category={item.slug === slug}
        />
      ))}
    </div>
  );
}

function CategoryItem({ category, name }: { category: boolean; name: string }) {
  return (
    <Link
      href={`/category/${name}`}
      className={`rounded-3xl flex items-center  border shadow-sm py-2 px-4 ${
        category ? "bg-gray-700" : " hover:bg-gray-500/20 bg-white"
      }`}
    >
      <p
        className={`text-sm capitalize ${
          category ? "text-white" : " hover:text-gray-700  text-gray-500"
        }`}
      >
        {name}
      </p>
    </Link>
  );
}
