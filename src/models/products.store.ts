import { types } from "mobx-state-tree";
import { Product, ProductModel, ProductTable } from "@/types";

export const ProductsStore = types
  .model({
    selectedProductId: types.maybe(types.string),
    products: types.array(ProductModel),
  })
  .views((store) => ({
    get productsTable(): ProductTable[] {
      return store.products.map((product) => ({
        category: {
          category: product.category,
          img: product.imgUrl,
        },
        quantity: product.stock,
        model: {
          model: product.model,
          processor: product.processor,
          ram: product.ram,
          storage: product.storage,
        },
        serialNumber: product.serialNumber,
      }));
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

    productById(productId: string) {
      return store.products.find((product) => product._id === productId);
    },
  }))
  .actions((store) => ({
    setProducts(products: Product[]) {
      store.products.replace(products);
    },
    addProduct(product: Product) {
      store.products.push(product);
    },
    updateProduct(product: Product) {
      const index = store.products.findIndex(
        (item) => item._id === product._id
      );
      store.products[index] = product;
    },
    deleteProduct(productId: string) {
      const index = store.products.findIndex((item) => item._id === productId);
      store.products.splice(index, 1);
    },
  }));
// falta agregar el updateProduct y el deleteProduct