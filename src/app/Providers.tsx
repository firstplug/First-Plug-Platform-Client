"use client";

import { RootStore, RootStoreContext } from "@/models";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import { ProductServices, TeamMemberServices } from "@/services";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    orders: {},
    shipments: {},
    products: {},
    teams: {},
    members: {},
    aside: {},
  });

  useEffect(() => {
    (async () => {
      TeamMemberServices.getAllMembers().then((res) => {
        store.members.setMembers(res);
      });
      ProductServices.getAllProducts().then((res) => {
        store.products.setProducts(res);
      });
    })()
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </RootStoreContext.Provider>
  );
}
