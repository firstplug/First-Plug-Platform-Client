"use client";
import { ReactNode, useEffect, useState } from "react";
import { Navbar, Sidebar, Aside, DownloadStock } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { Memberservices, ProductServices } from "@/services";
import { Layout, EmptyCard, EmptyCardLayout, LoaderSpinner } from "@/common";
import { setAuthInterceptor } from "@/config/axios.config";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();

  const {
    user: { setUser },
    members: { setMembers },
    products: { setProducts, setTable },
    shipments: { setShipments },
    orders: { setOrders },
  } = store;

  useEffect(() => {
    if (session.data) {
      sessionStorage.setItem(
        "accessToken",
        session.data.backendTokens.accessToken
      );

      setUser({
        _id: session.data.user._id,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
        tenantName: session.data.user.tenantName,
      });

      if (sessionStorage.getItem("accessToken")) {
        setAuthInterceptor(sessionStorage.getItem("accessToken"));
        Memberservices.getAllMembers().then((res) => {
          setMembers(res);
        });
        ProductServices.getAllProducts().then((res) => {
          setProducts(res);
        });
        ProductServices.getTableFormat().then((res) => {
          setTable(res);
        });

        setIsLoading(false);
      }
    }
  }, [session, setUser, setMembers, setProducts, setOrders, setShipments]);

  if (!store) return null;

  const tenantNameExists = session.data?.user?.tenantName;
  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (!tenantNameExists) {
    return (
      <div className="h-[100vh] p-10">
        <EmptyCardLayout>
          <EmptyCard type="registerok" />
        </EmptyCardLayout>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <aside className="flex flex-col flex-grow  max-h-[100vh] pb-2 ">
        <Navbar />
        <Layout>{children}</Layout>
      </aside>
      <Aside />
    </div>
  );
});
