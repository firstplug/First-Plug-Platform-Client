"use client";
import { ReactNode } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();
  if (!store) return null;
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
        <Aside />
      </div>
    </div>
  );
});
