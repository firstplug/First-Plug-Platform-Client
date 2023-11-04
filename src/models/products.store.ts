import { Instance } from "mobx-state-tree";

import { types } from "mobx-state-tree";

export const Product = types.model({
  _id: types.string,
  category: types.optional(types.string, ""),
  model: types.optional(types.string, ""),
  color: types.optional(types.string, ""),
  screen: types.optional(types.string, ""),
  keyboard: types.optional(types.string, ""),
  processor: types.optional(types.string, ""),
  ram: types.optional(types.string, ""),
  storage: types.optional(types.string, ""),
  gpu: types.optional(types.string, ""),
  serialNumber: types.optional(types.string, ""),
  price: types.optional(types.string, ""),
  status: types.optional(types.string, ""),
  imgUrl: types.optional(types.string, ""),
  quantity: types.number,
});

export type Product = Instance<typeof Product>

export const ProductsStore = types
  .model({
    products: types.array(Product),
  })
  .actions((store) => ({
    setProducts(products) {
      store.products = products;
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
  }));
