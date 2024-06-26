"use client";
import { ReactNode } from "react";
import { Navbar, Sidebar } from "@/components";
import { Layout } from "@/common";
import DataProvider from "./DataProvider";
import { Aside } from "@/components/Aside";
import AlertProvider from "@/components/Alerts/AlertProvider";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { LayoutLoader } from "@/components/Loader";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const { mainLoader } = useStore();
  return (
    <DataProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <section className="flex flex-col w-[90%] flex-grow   h-[100vh] max-h-[100vh]  ">
          <Navbar />
          <Layout>{mainLoader ? <LayoutLoader /> : children}</Layout>
        </section>
        <Aside />
        <AlertProvider />
      </div>
    </DataProvider>
  );
});
