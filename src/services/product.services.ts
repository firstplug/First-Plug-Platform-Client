import { Product } from "@/models/products.store";
import axios, { AxiosResponse } from "axios";
const apiURL = "http://localhost:3001";

const ProductStatus = ["Available", "Delivered"] as const;

type CreationProduct = Omit<Omit<Product, "_id">, "__v">;


export class ProductServices {
  static async getAllProducts(): Promise<Product[]> {
    const response: AxiosResponse = await axios.get(`${apiURL}/api/products`);
    return response.data;
  }

  static async getProductById(id: Product["_id"]): Promise<Product> {
    const response: AxiosResponse = await axios.get(`${apiURL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData: CreationProduct): Promise<Product> {
    const response: AxiosResponse = await axios.post(`${apiURL}/apí/products`, productData);
    return response.data;
  }

  static async updateProduct(id: Product["_id"], newData: Product): Promise<Product> {
    const response: AxiosResponse = await axios.put(`${apiURL}/api/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id: Product["_id"]): Promise<Product> {
    const response: AxiosResponse = await axios.delete(`${apiURL}/api/products/${id}`);
    return response.data;
  }
}
