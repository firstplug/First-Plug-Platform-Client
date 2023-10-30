import axios from "axios";

export class OrderServices {
  static async getAllOrders() {
    const response = await axios.get(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/orders`
    );
    return response.data;
  }

  static async createOrder(data) {
    const response = await axios.post(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/orders`,
      data
    );
    return response.data;
  }
  static async updateOrder(id, data) {
    const response = await axios.put(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`,
      data
    );
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await axios.delete(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`
    );
    return response.data;
  }

  static async getOneOrder(orderId) {
    const response = await axios.get(
      `${proccess.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}`
    );
    return response.data;
  }
}
