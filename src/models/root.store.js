"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";

const Products = types.model({
  _id: types.string,
  category: types.string,
  model: types.string,
  color: types.string,
  screen: types.string,
  keyboard: types.string,
  processor: types.string,
  ram: types.string,
  storage: types.string,
  gpu: types.string,
  serialNumber: types.string,
  price: types.string,
  status: types.string,
});

const Orders = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.string,
  orderDate: types.Date,
  totalPrice: types.string,
  products: types.optional(types.array(types.string), []),
});

const Shipments = types.model({
  _id: types.string,
  fullname: types.string,
  date: types.Date,
  QuantityProducts: types.string,
  types: types.string,
  trackingNumber: types.string,
  trackingURL: types.string,
  price: types.string,
  orders: types.optional(types.array(types.string), []),
});

const Teams = types.model({
  _id: types.string,
  name: types.string,
  teamMember: types.optional(types.array(types.string), []),
});

export const RootStore = types.model({
  products: types.array(Products),
  orders: types.array(Orders),
  shipments: types.array(Shipments),
  teams: types.array(Teams),
});

export const RootStoreContext = createContext(RootStore);
export const useStore = () => useContext(RootStoreContext);
