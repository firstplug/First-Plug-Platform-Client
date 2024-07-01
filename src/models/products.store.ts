import { types, flow, applySnapshot } from "mobx-state-tree";
import {
  Product,
  ProductModel,
  ProductTable,
  ProductTableModel,
} from "@/types";
import { ProductServices } from "@/services";

export const ProductsStore = types
  .model({
    products: types.array(ProductModel),
    tableProducts: types.array(ProductTableModel),
    selectedTableId: types.maybe(types.string),
    productToEdit: types.maybe(types.string),
    fetchingStock: types.optional(types.boolean, false),
    onlyAvaliable: types.optional(types.boolean, false),
    members: types.array(types.frozen()),
    currentProduct: types.maybeNull(ProductModel),
    currentMember: types.maybeNull(types.frozen()),
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
    toggleStockToShow() {
      store.onlyAvaliable = !store.onlyAvaliable;
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
    addProduct(product: Product) {
      store.products.push(product);
    },
    deleteProduct(id: string) {
      const product = store.products.find((product) => product._id === id);
      if (product) {
        product.deleted = true;
      }
    },
    updateProduct(product: Product) {
      const index = store.products.findIndex((p) => p._id === product._id);
      if (index > -1) {
        store.products[index] = product;
      }
    },
    clearCurrentProduct() {
      store.currentProduct = null;
      store.currentMember = null;
      store.members.clear();
    },
    getProductForAssign: flow(function* (
      productId: string,
      fetchValue: boolean = true
    ) {
      store.fetchingStock = fetchValue;
      try {
        const response = yield ProductServices.getProductForAssign(productId);

        applySnapshot(store.members, response.options);
        store.currentProduct = response.product;
        store.currentMember = null;
      } catch (error) {
        console.error("Failed to get product for assign", error);
      } finally {
        store.fetchingStock = false;
      }
    }),
    getProductForReassign: flow(function* (
      productId: string,
      fetchValue: boolean = true
    ) {
      store.fetchingStock = fetchValue;
      try {
        const response = yield ProductServices.getProductForReassign(productId);
        applySnapshot(store.members, response.options);
        store.currentProduct = response.product;
        store.currentMember = response.currentMember;
      } catch (error) {
        console.error("Failed to get product for reassign", error);
      } finally {
        store.fetchingStock = false;
      }
    }),
    reassignProduct: flow(function* (
      productId: string,
      data: Partial<Product>,
      fetchValue: boolean = true
    ) {
      try {
        const response = yield ProductServices.updateProduct(productId, data);
        const index = store.products.findIndex((p) => p._id === response._id);
        if (index > -1) {
          store.products[index] = response;
        }
      } catch (error) {
        console.error("Failed to reassign product", error);
      }
    }),
  }));
