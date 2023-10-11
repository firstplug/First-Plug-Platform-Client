import axios from "axios";
const apiURL = "http://localhost:3001";

export class ProductServices {
  static async getAllProducts() {
    const response = await axios.get(`${apiURL}/api/products`);
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(`${apiURL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData) {
    const response = await axios.post(`${apiURL}/apí/products`, productData);
    return response.data;
  }

  static async updateProduct(id, newData) {
    const response = await axios.put(`${apiURL}/api/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axios.delete(`${apiURL}/api/products/${id}`);
    return response.data;
  }
}
