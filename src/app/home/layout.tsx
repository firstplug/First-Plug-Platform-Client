"use client";
import { ReactNode, useEffect, useState } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import {
  Memberservices,
  OrderServices,
  ProductServices,
  ShipmentServices,
} from "@/services";
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
    products: { setProducts },
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
        OrderServices.getAllOrders().then((res) => {
          setOrders(res);
        });
        ShipmentServices.getAllShipments().then((res) => {
          setShipments(res.data);
        });
        ProductServices.getAllProducts().then((res) => {
          setProducts(res);
        });
        OrderServices.getAllOrders().then((res) => {
          setOrders(res);
        });
        ShipmentServices.getAllShipments().then((res) => {
          setShipments(res.data);
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
      <div className="flex flex-col justify-center items-center  h-[100vh] gap-8 mx-[40px] my-[32px] border border-boder rounded-lg shadow-md">
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
