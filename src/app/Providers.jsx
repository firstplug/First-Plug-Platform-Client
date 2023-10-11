"use client";

import { UsersStore, UsersStoreContext } from "@/models/users.store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { ProductStore, ProductStoreContext } from "@/models/products.store";

export default function Providers({ children }) {
  const store = UsersStore.create();
  const productStore = ProductStore.create();

  useEffect(() => {
    productStore.getAllProducts();
  }, [productStore]);

  return (
    <UsersStoreContext.Provider value={store}>
      <ProductStoreContext.Provider value={productStore}>
        <SessionProvider>{children}</SessionProvider>
      </ProductStoreContext.Provider>
    </UsersStoreContext.Provider>
  );
}
