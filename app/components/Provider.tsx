"use client";

import { PropsWithChildren, useState } from "react";
import { AppContext } from "../context/AppContext";

const Providers = ({ children }: PropsWithChildren) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <AppContext.Provider value={{ showCart, setShowCart }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default Providers;
