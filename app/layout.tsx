import "./globals.css";
import type { Metadata } from "next";
import Providers from "./components/Provider";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Shop",
    template: `%s | Shop`,
  },
  description: " The place for all your purchases.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("bg-[#f8f8f8] font-sans antialiased", fontSans.variable)}
      >
        <Providers>
          {children}
          <Toaster />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
