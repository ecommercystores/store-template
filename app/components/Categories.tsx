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
  if (!categories || categories.length === 0) return null;
  return (
    <div id="categories" className="flex gap-2 flex-wrap p-4  ">
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
        category ? "bg-primary" : " hover:bg-primary/20 bg-white"
      }`}
    >
      <p
        className={`text-sm capitalize ${
          category ? "text-white" : " hover:text-primary  text-primary"
        }`}
      >
        {name}
      </p>
    </Link>
  );
}
