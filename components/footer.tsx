import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { EmailForm } from "./email-form";

const Footer = async () => {
  const contact: {
    link: string | undefined;
    active: boolean;
    icon: React.ReactElement;
  }[] = [
    {
      link: "/",
      active: true,
      icon: <Facebook />,
    },
    {
      link: "/",
      active: true,
      icon: <Twitter />,
    },
    {
      link: "/",
      active: true,
      icon: <Instagram />,
    },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            {/* <div className="flex justify-start items-center relative mr-5">
              <Image src={logo} alt="logo" />
            </div> */}
            <EmailForm />

            <ul className="flex mt-8 space-x-6 text-gray-600">
              {contact.map(
                (item, i) =>
                  item.active && (
                    <Link key={i} href={item.link || ""} target="_blank">
                      {item.icon}
                    </Link>
                  )
              )}
            </ul>
          </div>
          <div>
            <p className="font-medium">Helpful Links</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <Link className="hover:opacity-75" href="/">
                About
              </Link>
              <Link className="hover:opacity-75" href="/">
                Contact
              </Link>
              <Link className="hover:opacity-75" href="/">
                FAQs
              </Link>

              <Link className="hover:opacity-75" href="/">
                Privacy Policy
              </Link>
              <Link className="hover:opacity-75" href="/">
                Return Policy
              </Link>
              <Link className="hover:opacity-75" href="/">
                Terms &amp; Conditions
              </Link>
            </nav>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          &copy; {new Date().getFullYear()} Shop, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
