"use client";
import { RootStore, RootStoreContext } from "@/models/root.store";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  // TODO: Hydrate the store from wherever neccesary.
  // TODO: Remove mock data.
  const store = RootStore.create({ ...mockData });

  return (
    <RootStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </RootStoreContext.Provider>
  );
}

const mockData = {
  products: [
    { _id: "test", title: "Product Test", description: "Desc", price: 10 },
    { _id: "test2", title: "Product Test 2", description: "Desc 2", price: 20 },
  ],
};
