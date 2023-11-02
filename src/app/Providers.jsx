"use client";

import { RootStoreContext, RootStore } from "@/models/root.store";
import { SessionProvider } from "next-auth/react";
import { useCallback, useEffect } from "react";
import { TeamMemberServices } from "@/services/teamMember.services";
import { ProductServices } from "@/services/product.services";
import { AsideStore } from "@/models/aside.store";

export default function Providers({ children }) {
  const store = RootStore.create({
    orders: {},
    shipments: {},
    products: {},
    teams: {},
    members: {},
    aside: {},
  });

  const setData = useCallback(async () => {
    TeamMemberServices.getAllMembers().then((res) => {
      store.members.setMembers(res.data);
    });
    ProductServices.getAllProducts().then((res) => {
      store.products.setProducts(res);
    });
  }, [store]);

  useEffect(() => {
    setData();
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </RootStoreContext.Provider>
  );
}
