"use client";

import { PropsWithChildren, useState } from "react";
import { AppContext } from "../context/AppContext";
import { CartProvider } from "../context/CartContext";

const Providers = ({ children }: PropsWithChildren) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <CartProvider>
        <AppContext.Provider value={{ showCart, setShowCart }}>
          {children}
        </AppContext.Provider>
      </CartProvider>
    </>
  );
};

export default Providers;
