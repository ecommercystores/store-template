import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { EmailForm } from "./email-form";
import { getStoreDetails } from "@/actions/store-details";

const Footer = async () => {
  const { socialMediaLinks, name } = await getStoreDetails();

  function generateIcon(platform: string) {
    if (platform === "facebook") return <Facebook />;
    if (platform === "twitter") return <Twitter />;
    return <Instagram />;
  }
  const socialLinks: {
    link: string;
    icon: React.ReactElement;
  }[] = socialMediaLinks?.map((item) => ({
    link: item.url,
    icon: generateIcon(item.platform),
  }));

  return (
    <footer className=" border-t">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            {/* <div className="flex justify-start items-center relative mr-5">
              <Image src={logo} alt="logo" />
            </div> */}
            <EmailForm />

            <ul className="flex mt-8 space-x-6 text-primary">
              {socialLinks?.map((item, i) => (
                <Link key={i} href={item.link || ""} target="_blank">
                  {item.icon}
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-primary">Helpful Links</p>
            <nav className="flex flex-col mt-4 space-y-2 text-sm text-primary">
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
        <p className="mt-8 text-xs text-primary">
          &copy; {new Date().getFullYear()} {name}, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
