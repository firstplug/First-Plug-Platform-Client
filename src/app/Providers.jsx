"use client";

import { UsersStore, UsersStoreContext } from "@/models/users.store";
import { SessionProvider } from "next-auth/react";
import { AuthServices } from "@/services/auth.services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { ProductStore, ProductStoreContext } from "@/models/products.store";

export default function Providers({ children }) {
  const store = UsersStore.create();
  const productStore = ProductStore.create();

  const router = useRouter();
  const pathname = usePathname();

  const checkUserSession = useCallback(async () => {
    if (pathname === "/") router.push("/login");

    const token = localStorage.getItem("token");
    if (!token && (pathname === "/login" || pathname === "/register")) return;
    if (!token) return router.push("/login");

    await AuthServices.me(token);
  }, [pathname, router]);

  useEffect(() => {
    checkUserSession();
    productStore.getAllProducts();
  }, [checkUserSession, productStore]);

  return (
    <UsersStoreContext.Provider value={store}>
      <ProductStoreContext.Provider value={productStore}>
        <SessionProvider>{children}</SessionProvider>
      </ProductStoreContext.Provider>
    </UsersStoreContext.Provider>
  );
}
