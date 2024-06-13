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
    selectedProduct: types.maybe(types.reference(ProductModel)),
    fetchingStock: types.optional(types.boolean, false),
  })
  .views((store) => ({
    get availableProducts() {
      // @ts-ignore
      const result: ProductTable[] = store.tableProducts
        .map((table) => ({
          category: table.category,
          products: table.products.filter((p) => p.status === "Available"),
        }))
        .filter((table) => table.products.length);

      return result;
    },
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
    setFetchStock(fetchValue: boolean) {
      store.fetchingStock = fetchValue;
    },
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
    setSelectedProduct(product: typeof ProductModel.Type) {
      store.selectedProduct = product;
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
    deleteProduct(id: string) {
      const product = store.products.find((product) => product._id === id);
      if (product) {
        product.deleted = true;
      }
    },
    updateProductAside(id: string, data: Partial<typeof ProductModel.Type>) {
      const index = store.products.findIndex((p) => p._id === id);
      if (index > -1) {
        store.products[index] = { ...store.products[index], ...data };
      }
    },
    updateProduct(product: Product) {
      const index = store.products.findIndex((p) => p._id === product._id);
      if (index > -1) {
        store.products[index] = product;
      }
    },
  }));
