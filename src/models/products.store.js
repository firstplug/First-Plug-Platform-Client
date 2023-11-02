const { types } = require("mobx-state-tree");

export const Products = types.model({
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

export const ProductsStore = types
  .model({
    products: types.array(Products),
  })
  .actions((store) => ({
    setProducts(products) {
      store.products = products;
    },
    addProduct(product) {
      store.products = [...store.products, product];
    },
  }));
