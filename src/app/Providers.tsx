"use client";

import { RootStore, RootStoreContext } from "@/models";
import { SessionProvider } from "next-auth/react";
import { ReactNode, useEffect } from "react";
import {
  ProductServices,
  Memberservices,
  ShipmentServices,
  OrderServices,
} from "@/services";

import { Shipment } from "./../types/shipment"

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  const store = RootStore.create({
    orders: {},
    shipments: {},
    products: {},
    teams: {},
    members: {},
    aside: {},
  });

  useEffect(() => {
    (async () => {

      //Members
      const membersResponse = await Memberservices.getAllMembers();
      store.members.setMembers(membersResponse)

      //Teams
      // const teamsResponse = await TeamServices.getAllTeams();
      // store.teams.setTeams(teamsResponse)
      // We dont've mock data teams from API

      //Products
      const productsResponse = await ProductServices.getAllProducts();
      store.products.setProducts(productsResponse);

      //Orders
      const ordersResponse = await OrderServices.getAllOrders();
      store.orders.setOrders(ordersResponse);

      //Shipments
      const shipmentsResponse = await ShipmentServices.getAllShipments();
      store.shipments.setShipments(shipmentsResponse.data);

    })();
  }, [store]);

  return (
    <RootStoreContext.Provider value={store}>
      <SessionProvider>{children}</SessionProvider>
    </RootStoreContext.Provider>
  );
}
