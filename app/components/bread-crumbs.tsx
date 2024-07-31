import { ChevronRight } from "lucide-react";
import Link from "next/link";

type Prop = {
  link: string;
  name: string;
  pageName?: string;
};
export function BreadCrumbs({ link, name, pageName }: Prop) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center space-x-1 text-gray-600 text-md">
        <Link href="/" className="hover:underline hover:text-gray-800">
          Home
        </Link>
        <span>
          <ChevronRight size={24} />
        </span>
        <Link href={link} className="hover:underline hover:text-gray-800">
          {name}
        </Link>
        <span>
          <ChevronRight size={24} />
        </span>
        <p className="font-bold">{pageName || ""}</p>
      </div>
    </div>
  );
}
