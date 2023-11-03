import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export class OrderServices {
  static async getAllOrders() {
    const response = await axios.get(`${BASE_URL}/orders`);
    return response.data;
  }

  static async createOrder(data) {
    const response = await axios.post(`${BASE_URL}/orders`, data);
    return response.data;
  }
  static async updateOrder(id, data) {
    const response = await axios.put(`${BASE_URL}/orders/${id}`, data);
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await axios.delete(`${BASE_URL}/orders/${id}`);
    return response.data;
  }

  static async getOneOrder(orderId) {
    const response = await axios.get(`${BASE_URL}/orders/${orderId}`);
    return response.data;
  }
}
