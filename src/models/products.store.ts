import { types } from "mobx-state-tree";

import { Product } from "@/types";

export const ProductsStore = types
  .model({
    products: types.array(Product),
  })
  .actions((store) => ({
    setProducts(products: any) {
      store.products = products;
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
  }));
