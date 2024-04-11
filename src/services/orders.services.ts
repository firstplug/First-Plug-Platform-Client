import { Product, Order } from "@/types";
import { BASE_URL, HTTPRequests } from "@/config/axios.config";

type DeleteOrderResponse = {
  msg: string;
  deletedOrder: Order;
};

type CreationOrder = Omit<Omit<Product, "_id">, "__v">;

export class OrderServices {
  static async getAllOrders(): Promise<Order[]> {
    const response = await HTTPRequests.get(`${BASE_URL}/api/orders`);
    return response.data;
  }

  static async createOrder(data: CreationOrder): Promise<Order> {
    const response = await HTTPRequests.post(`${BASE_URL}/api/orders`, data);
    return response.data;
  }
  static async updateOrder(
    id: Order["_id"],
    data: Partial<Order>
  ): Promise<Order> {
    const response = await HTTPRequests.put(
      `${BASE_URL}/api/orders/${id}`,
      data
    );
    return response.data;
  }

  static async deleteOrder(id: Order["_id"]): Promise<DeleteOrderResponse> {
    const response = await HTTPRequests.delete(`${BASE_URL}/api/orders/${id}`);
    return response.data;
  }

  static async getOneOrder(orderId: Order["_id"]): Promise<Order> {
    const response = await HTTPRequests.get(
      `${BASE_URL}/api/orders/${orderId}`
    );
    return response.data;
  }
}
