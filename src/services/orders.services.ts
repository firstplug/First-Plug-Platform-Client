import { Product, Order } from "@/types";
import axios, { AxiosResponse } from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

type DeleteOrderResponse = {
  msg: string;
  deletedOrder: Order;
};

type CreationOrder = Omit<Omit<Product, "_id">, "__v">;

export class OrderServices {
  static async getAllOrders(): Promise<Order[]> {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  }

  static async createOrder(data: CreationOrder): Promise<Order> {
    const response: AxiosResponse = await axios.post(
      `${BASE_URL}/orders`,
      data
    );
    return response.data;
  }
  static async updateOrder(id: Order["_id"], data: Order): Promise<Order> {
    const response: AxiosResponse = await axios.put(
      `${BASE_URL}/orders/${id}`,
      data
    );
    return response.data;
  }

  static async deleteOrder(id: Order["_id"]): Promise<DeleteOrderResponse> {
    const response: AxiosResponse = await axios.delete(
      `${BASE_URL}/orders/${id}`
    );
    return response.data;
  }

  static async getOneOrder(orderId: Order["_id"]): Promise<Order> {
    const response: AxiosResponse = await axios.get(
      `${BASE_URL}/orders/${orderId}`
    );
    return response.data;
  }
}
