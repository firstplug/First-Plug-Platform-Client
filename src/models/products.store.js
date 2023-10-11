"use client";
import { createContext, useContext } from "react";
import { types } from "mobx-state-tree";
import { ProductServices } from "@/services/product.services";

const Products = types.model({
  _id: types.identifier,
  category: types.string,
  model: types.string,
  color: types.optional(types.string, ""),
  screen: types.optional(types.string, ""),
  keyboard: types.optional(types.string, ""),
  processor: types.optional(types.string, ""),
  ram: types.optional(types.string, ""),
  storage: types.optional(types.string, ""),
  gpu: types.optional(types.string, ""),
  serialNumber: types.optional(types.string, ""),
  price: types.string,
  status: types.enumeration(["Avaiable, Delivered"]),
  imgUrl: types.optional(types.string, ""),
  quantity: types.number,
});

export const ProductStore = types
  .model({
    products: types.array(Products),
  })
  .actions((self) => ({
    async getAllProducts() {
      return await ProductServices.getAllProducts();
    },
  }));

export const ProductStoreContext = createContext(ProductStore);
export const useStore = () => useContext(ProductStoreContext);
