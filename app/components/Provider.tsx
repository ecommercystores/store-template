"use client";

import Script from "next/script";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      {/* <Script
        strategy="lazyOnload"
        src="https://embed.tawk.to/66ac80851601a2195b9fd0be/1i48tc2hh"
      /> */}

      {children}
    </>
  );
};

export default Providers;
