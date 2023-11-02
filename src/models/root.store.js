"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";
import { AsideStore } from "./aside.store";
import { MemberStore } from "./member.store";
import { ProductsStore } from "./products.store";
import { TeamStore } from "./teams.store";
import { ShipmentStore } from "./shipment.store";
import { OrderStore } from "./orders.store";

export const RootStore = types.model({
  orders: types.late(() => OrderStore),
  shipments: types.late(() => ShipmentStore),
  teams: types.late(() => TeamStore),
  products: types.late(() => ProductsStore),
  members: types.late(() => MemberStore),
  aside: types.late(() => AsideStore),
});

export const RootStoreContext = createContext(RootStore);
export const useStore = () => useContext(RootStoreContext);
