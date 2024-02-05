import { Product } from "@/types";
import axios from "@/config/axios.config";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type CreationProduct = Omit<Omit<Product, "_id">, "__v">;

export class ProductServices {
  static async getAllProducts(): Promise<Product[]> {
    const response = await axios.get(`${BASE_URL}/api/products`);
    return response.data;
  }

  static async getProductById(id: Product["_id"]): Promise<Product> {
    const response = await axios.get(`${BASE_URL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData: CreationProduct): Promise<Product> {
    const response = await axios.post(`${BASE_URL}/apí/products`, productData);
    return response.data;
  }

  static async updateProduct(
    id: Product["_id"],
    newData: Product
  ): Promise<Product> {
    const response = await axios.put(`${BASE_URL}/api/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id: Product["_id"]): Promise<Product> {
    const response = await axios.delete(`${BASE_URL}/api/products/${id}`);
    return response.data;
  }
}
