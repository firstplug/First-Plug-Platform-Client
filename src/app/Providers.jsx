"use client";

import { UsersStore, UsersStoreContext } from "@/models/users.store";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  const store = UsersStore.create();

  return (
    <UsersStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </UsersStoreContext.Provider>
  );
}
