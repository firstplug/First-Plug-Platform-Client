import { ReactNode } from "react";
import { Navbar, Sidebar } from "@/components";
import { Layout } from "@/common";
import DataProvider from "./DataProvider";
import { Aside } from "@/components/Aside";
import AlertProvider from "@/components/Alerts/AlertProvider";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <DataProvider>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <section className="flex flex-col flex-grow  max-h-[100vh] pb-2 ">
          <Navbar />
          <Layout>{children}</Layout>
        </section>
        <Aside />
        <AlertProvider />
      </div>
    </DataProvider>
  );
}
