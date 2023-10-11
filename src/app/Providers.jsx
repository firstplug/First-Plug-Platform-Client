"use client";

import { UsersStore, UsersStoreContext } from "@/models/users.store";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
import { TeamMemberContext, TeamMemberStore } from "@/models/teamMeber.store";
import { TeamMemberServices } from "@/services/teamMember.services";
import { ProductStore, ProductStoreContext } from "@/models/products.store";

export default function Providers({ children }) {
  const store = UsersStore.create();
  const productStore = ProductStore.create();
  const memberStore = TeamMemberStore.create({ members: [] });

  const checkUserSession = useCallback(async () => {
    TeamMemberServices.getAllMembers().then((res) => {
      memberStore.setMembers(res.data);
    });
  }, [memberStore]);

  useEffect(() => {
    productStore.getAllProducts();
  }, [productStore]);

  return (
    <UsersStoreContext.Provider value={store}>
      <ProductStoreContext.Provider value={productStore}>
        <TeamMemberContext.Provider value={memberStore}>
          <SessionProvider>{children}</SessionProvider>
        </TeamMemberContext.Provider>
      </ProductStoreContext.Provider>
    </UsersStoreContext.Provider>
  );
}
