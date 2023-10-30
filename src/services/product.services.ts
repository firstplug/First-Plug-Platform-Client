import axios, { AxiosResponse } from "axios";
const apiURL = "http://localhost:3001";

export class ProductServices {
  static async getAllProducts(): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiURL}/api/products`);
    return response.data;
  }

  static async getProductById(id: string): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiURL}/api/products/${id}`);
    return response.data;
  }

  static async createProduct(productData: any): Promise<any> {
    const response: AxiosResponse = await axios.post(`${apiURL}/apí/products`, productData);
    return response.data;
  }

  static async updateProduct(id: string, newData: any): Promise<any> {
    const response: AxiosResponse = await axios.put(`${apiURL}/api/products/${id}`, newData);
    return response.data;
  }

  static async deleteProduct(id: string): Promise<any> {
    const response: AxiosResponse = await axios.delete(`${apiURL}/api/products/${id}`);
    return response.data;
  }
}
