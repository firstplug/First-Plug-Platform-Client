import { types } from "mobx-state-tree";
import {
  Product,
  ProductModel,
  ProductTable,
  ProductTableModel,
} from "@/types";

export const ProductsStore = types
  .model({
    products: types.array(ProductModel),
    tableProducts: types.array(ProductTableModel),
    selectedTableId: types.maybe(types.string),
    productToEdit: types.maybe(types.string),
  })
  .views((store) => ({
    get uniqueProducts() {
      const groupedProducts = store.products.reduce((result, product) => {
        if (!result[product.category]) {
          result[product.category] = product;
        }
        return result;
      }, {});

      return Object.values(groupedProducts) as Product[];
    },
    get selectedTableProducts() {
      return store.products.find(
        (product) => product._id === store.selectedTableId
      );
    },

    productById(productId: string) {
      return store.products.find((product) => product._id === productId);
    },
  }))
  .actions((store) => ({
    setProducts(products: Product[]) {
      store.products.replace(products);
    },
    setTable(products: ProductTable[]) {
      store.tableProducts.replace(products);
    },
    setSelectedTableId(id: string) {
      store.selectedTableId = id;
    },
    setProductIdToEdit(id: string) {
      store.productToEdit = id;
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
    updateProduct(product: Product) {
      const index = store.products.findIndex((p) => p._id === product._id);
      if (index > -1) {
        store.products[index] = product;
      }
    },
  }));
