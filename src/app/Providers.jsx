"use client";

import { RootStoreContext, RootStore } from "@/models/root.store";
import { SessionProvider } from "next-auth/react";
import { AuthServices } from "@/services/auth.services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";

import { TeamMemberServices } from "@/services/teamMember.services";

import { ProductServices } from "@/services/product.services";

export default function Providers({ children }) {
  const store = RootStore.create({
    users: [],
    products: [],
    orders: [],
    shipments: [],
    teams: [],
    members: [],
  });

  const router = useRouter();
  const pathname = usePathname();

  const checkUserSession = useCallback(async () => {
    if (pathname === "/") router.push("/login");

    const token = localStorage.getItem("token");
    if (!token && (pathname === "/login" || pathname === "/register")) return;
    if (!token) return router.push("/login");

    await AuthServices.me(token);

    TeamMemberServices.getAllMembers().then((res) => {
      store.setMembers(res.data);
    });
    ProductServices.getAllProducts().then((res) => {
      store.setProducts(res);
    });
  }, [pathname, router, store]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <RootStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </RootStoreContext.Provider>
  );
}
