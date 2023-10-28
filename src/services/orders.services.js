import { baseApi } from "../config/configAxios";

export class OrderServices {
  static async getAllOrders() {
    const response = await baseApi.get(`/orders`);
    return response.data;
  }

  static async createOrder(data) {
    const response = await baseApi.post(`/orders`, data);
    return response.data;
  }
  static async updateOrder(id, data) {
    const response = await baseApi.put(`/orders/${id}`, data);
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await baseApi.delete(`/orders/${id}`);
    return response.data;
  }

  static async getOneOrder(orderId) {
    const response = await baseApi.get(`/orders/${orderId}`);
    return response.data;
  }
}
