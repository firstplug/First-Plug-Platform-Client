import axios from "axios";

export class ProductServices {
  static async getAllProducts() {
    const response = await axios.get(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/products`
    );
    return response.data;
  }

  static async getProductById(id) {
    const response = await axios.get(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
    );
    return response.data;
  }

  static async createProduct(productData) {
    const response = await axios.post(
      `${proccess.env.NEXT_PUBLIC_API_URL}/apí/products`,
      productData
    );
    return response.data;
  }

  static async updateProduct(id, newData) {
    const response = await axios.put(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
      newData
    );
    return response.data;
  }

  static async deleteProduct(id) {
    const response = await axios.delete(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
    );
    return response.data;
  }
}
