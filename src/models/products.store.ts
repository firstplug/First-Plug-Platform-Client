import { types } from "mobx-state-tree";
import { Product, ProductModel } from "@/types";

export const ProductsStore = types
  .model({
    selectedProductId: types.maybe(types.string),
    products: types.array(ProductModel),
  })
  .views((store) => ({
    get productCount() {
      return store.products.length;
    },

    get selectedProduct() {
      return store.products.find(
        (product) => product._id === store.selectedProductId
      );
    },
  }))
  .actions((store) => ({
    setProducts(products: Product[]) {
      store.products.push(...products);
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
  }));
