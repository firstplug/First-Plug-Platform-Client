"use client";

import { RootStoreContext, RootStore } from "@/models/root.store";
import { SessionProvider } from "next-auth/react";
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

  const setData = useCallback(async () => {
    TeamMemberServices.getAllMembers().then((res) => {
      store.setMembers(res.data);
    });
    ProductServices.getAllProducts().then((res) => {
      store.setProducts(res);
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
