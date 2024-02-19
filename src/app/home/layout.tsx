"use client";
import { ReactNode, useEffect } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { LoggedInUser } from "@/types";
import {
  Memberservices,
  OrderServices,
  ProductServices,
  ShipmentServices,
  TeamServices,
} from "@/services";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();

  const {
    user: { setUser },
  } = store;

  const session = useSession();

  useEffect(() => {
    if (session.data) {
      console.log("Data enviada a sessionStorage ==>", {
        session_accessToken: session.data.backendTokens.accessToken,
      });
      sessionStorage.setItem(
        "accessToken",
        session.data.backendTokens.accessToken
      );

      setUser({
        _id: session.data.user._id,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
      });

      if (sessionStorage.getItem("accessToken")) {
        Memberservices.getAllMembers().then((res) => {
          console.log("GET ALL MEMBERS => ", { res });
          store.members.setMembers(res);
        });
        // Teams;
        // const teamsResponse = await TeamServices.getAllTeams();
        // store.teams.setTeams(teamsResponse);
        // //Products
        // const productsResponse = await ProductServices.getAllProducts();
        // store.products.setProducts(productsResponse);
        // //Orders
        // const ordersResponse = await OrderServices.getAllOrders();
        // store.orders.setOrders(ordersResponse);
        // //Shipments
        // const shipmentsResponse = await ShipmentServices.getAllShipments();
        // store.shipments.setShipments(shipmentsResponse.data);
      }
    }
  }, [session]);

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
