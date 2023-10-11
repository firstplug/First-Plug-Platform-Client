import axios from "axios";
const apiUrl = "http://localhost:3001/api";

export class OrderServices {
  static async getAllOrders() {
    const response = await axios.get(`${apiUrl}/orders`);
    return response.data;
  }
  static async getOneOrder(orderId) {
    const response = await axios.post(`${apiUrl}/orders`, orderId);
    return response.data;
  }

  static async createOrder(data) {
    const response = await axios.post(`${apiUrl}/orders`, data);
    return response.data;
  }
  static async updateOrder(id, data) {
    const response = await axios.put(`${apiUrl}/orders/${id}`, data);
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await axios.delete(`${apiUrl}/orders/${id}`);
    return response.data;
  }
}
