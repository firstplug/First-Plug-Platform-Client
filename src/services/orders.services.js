import axios from "axios";

export class OrderServices {
  static async getAllOrders() {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/orders`
    );
    return response.data;
  }

  static async createOrder(data) {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/orders`,
      data
    );
    return response.data;
  }
  static async updateOrder(id, data) {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`,
      data
    );
    return response.data;
  }

  static async deleteOrder(id) {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`
    );
    return response.data;
  }

  static async getOneOrder(orderId) {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`
    );
    return response.data;
  }
}
