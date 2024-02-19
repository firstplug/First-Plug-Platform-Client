import { Product } from "@/types";
import { HTTPRequests } from "@/config/axios.config";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type CreationProduct = Omit<Omit<Product, "_id">, "__v">;

export class ProductServices {
  static async getAllProducts(): Promise<Product[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/products`);
    return response.data;
  }

  static async getProductById(id: Product["_id"]): Promise<Product> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData: CreationProduct): Promise<Product> {
    const response = await HTTPRequests.post(
      `${BASE_URL}/apí/products`,
      productData
    );
    return response.data;
  }

  static async updateProduct(
    id: Product["_id"],
    data: Partial<Product>
  ): Promise<Product> {
    const response = await HTTPRequests.put(
      `${BASE_URL}/api/products/${id}`,
      data
    );
    return response.data;
  }

  static async deleteProduct(id: Product["_id"]): Promise<Product> {
    const response = await HTTPRequests.delete(
      `${BASE_URL}/api/products/${id}`
    );
    return response.data;
  }
}
