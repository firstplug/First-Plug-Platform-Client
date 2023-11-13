import { types } from "mobx-state-tree";

import { Product, ProductModel } from "@/types";

export const ProductsStore = types
  .model({
    products: types.array(ProductModel),
  })
  .actions((store) => ({
    setProducts(products: Product[]) {
      store.products.push(...products);
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
  }));
