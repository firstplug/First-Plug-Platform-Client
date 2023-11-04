import axios, { AxiosResponse } from "axios";
const apiUrl = "http://localhost:3001/api";

const ProductStatus = ["Available", "Delivered"] as const;
const OrderStatus = ["order confirmed", "order canceled", "confirmation pending", "payment pending"] as const;

type Product = {
  _id: string
  category: string;
  model: string;
  color: string;
  screen: string;
  keyboard: string;
  processor: string;
  ram: string;
  status: typeof ProductStatus[number];
  imgUrl: string;
  quantity: number;
}

type Order = {
  _id: string;
  teamMember: string[];
  status: typeof OrderStatus[number];
  date: Date;
  totalPrice: number;
  products: Product[];
  __v: number; 
}

type DeleteOrderResponse = {
  msg: string;
  deletedOrder: Order;
};

type CreationOrder = Omit<Omit<Product, "_id">, "__v">;

export class OrderServices {
  static async getAllOrders(): Promise<Order[]> {
    const response: AxiosResponse = await axios.get(`${apiUrl}/orders`);
    return response.data;
  }

  static async createOrder(data: CreationOrder): Promise<Order> {
    const response: AxiosResponse = await axios.post(`${apiUrl}/orders`, data);
    return response.data;
  }
  static async updateOrder(id: Order["_id"], data: Order): Promise<Order> {
    const response: AxiosResponse = await axios.put(`${apiUrl}/orders/${id}`, data);
    return response.data;
  }

  static async deleteOrder(id: Order["_id"]): Promise<DeleteOrderResponse> {
    const response: AxiosResponse = await axios.delete(`${apiUrl}/orders/${id}`);
    return response.data;
  }

  static async getOneOrder(orderId: Order["_id"]): Promise<Order> {
    const response: AxiosResponse = await axios.get(`${apiUrl}/orders/${orderId}`);
    return response.data;
  }
}
