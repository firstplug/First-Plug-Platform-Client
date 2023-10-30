import axios, { AxiosResponse } from "axios";
const apiUrl = "http://localhost:3001/api";

export class OrderServices {
  static async getAllOrders(): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiUrl}/orders`);
    return response.data;
  }

  static async createOrder(data: any): Promise<any> {
    const response: AxiosResponse = await axios.post(`${apiUrl}/orders`, data);
    return response.data;
  }
  static async updateOrder(id: string, data: any): Promise<any> {
    const response: AxiosResponse = await axios.put(`${apiUrl}/orders/${id}`, data);
    return response.data;
  }

  static async deleteOrder(id: string): Promise<any> {
    const response: AxiosResponse = await axios.delete(`${apiUrl}/orders/${id}`);
    return response.data;
  }

  static async getOneOrder(orderId: string): Promise<any> {
    const response: AxiosResponse = await axios.get(`${apiUrl}/orders/${orderId}`);
    return response.data;
  }
}
