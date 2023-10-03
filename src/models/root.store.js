"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";

const Product = types.model({
  _id: types.string,
  title: types.string,
  description: types.optional(types.string, ""),
  price: types.number,
});

const Order = types.model({
  _id: types.string,
  createdAt: types.Date,
  updatedAt: types.Date,
  title: types.string,
  products: types.optional(types.array(types.string), []),
});

export const RootStore = types
  .model({
    products: types.array(Product),
    orders: types.array(Order),
  })
  .views((self) => ({
    sortedProducts() {
      return self.products.sort((a, b) => a.updatedAt - b.updatedAt);
    },
    ordersWithProducts() {
      return self.orders.map((o) => ({
        ...o,
        products: o.products.map((pid) =>
          self.products.find((p) => p._id === pid)
        ),
      }));
    },
  }))
  .actions((self) => ({
    addProduct(product) {
      // self.products.set(product._id, product);
      self.products = [...self.products, product];
    },
    addOrder(order) {
      // self.orders.set(order._id, order);
    },
  }));

export const RootStoreContext = createContext(RootStore);

export const useStore = () => useContext(RootStoreContext);
