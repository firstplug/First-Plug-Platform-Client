import { baseApi } from "../config/configAxios";

export class ProductServices {
  static async getAllProducts() {
    const response = await baseApi.get(`/products`);
    return response.data;
  }

  static async getProductById(id) {
    const response = await baseApi.get(`/products/${id}`);
    return response.data;
  }

  static async createProduct(productData) {
    const response = await baseApi.post(`/products`, productData);
    return response.data;
  }

  static async updateProduct(id, newData) {
    const response = await baseApi.put(`/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await baseApi.delete(`/products/${id}`);
    return response.data;
  }
}
