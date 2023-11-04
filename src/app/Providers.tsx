"use client";

import { RootStore, useStore, RootStoreContext} from "@/models/root.store";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useCallback, useEffect} from "react";
import { TeamMemberServices } from "@/services/teamMember.services";
import { ProductServices } from "@/services/product.services";
import { AsideStore } from "@/models/aside.store";

type ProvidersProps = {
  children: ReactNode;
}

export default function Providers({ children } : ProvidersProps) {
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
      store.members.setMembers(res);
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
