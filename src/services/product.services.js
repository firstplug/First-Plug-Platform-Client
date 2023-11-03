import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class ProductServices {
  static async getAllProducts() {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData) {
    const response = await axios.post(`${BASE_URL}/apí/products`, productData);
    return response.data;
  }

  static async updateProduct(id, newData) {
    const response = await axios.put(`${BASE_URL}/api/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axios.delete(`${BASE_URL}/api/products/${id}`);
    return response.data;
  }
}
