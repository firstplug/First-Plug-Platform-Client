import { Order } from "@/models/orders.store";
import { Product } from "@/models/products.store";
import axios, { AxiosResponse } from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// TODO: Tipar esto y mandarlo a la store de products.
const ProductStatus = ["Available", "Delivered"] as const;
// TODO: Tipar esto y mandarlo a la store de orders.
const OrderStatus = [
  "order confirmed",
  "order canceled",
  "confirmation pending",
  "payment pending",
] as const;

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
