"use client";

import { RootStore, useStore, RootStoreContext} from "@/models/root.store";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useCallback, useEffect} from "react";
import { TeamMemberServices } from "@/services/teamMember.services";
import { ProductServices } from "@/services/product.services";

type ProvidersProps = {
  children: ReactNode;
}

export default function Providers({ children } : ProvidersProps) {
  const store = RootStore.create({
    users : [],
    members : [],
    products : [],
    orders : [],
    shipments : [],
    teams : [],
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
