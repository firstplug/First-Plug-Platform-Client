import { Shipment, ShipmentCreation } from "@/types";
import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export class ShipmentServices {
  static async getAllShipments() {
    return await axios.get(`${BASE_URL}/api/shipments`);
  }
  static async createShipment(data: ShipmentCreation) {
    return await axios.post(`${BASE_URL}/api/shipments`, data);
  }
  static async getShipmentById(
    shipmentId: Shipment["_id"]
  ): Promise<AxiosResponse> {
    return await axios.get(`${BASE_URL}/api/shipments/${shipmentId}`);
  }
  static async deleteShipment(
    shipmentId: Shipment["_id"]
  ): Promise<AxiosResponse> {
    return await axios.delete(`${BASE_URL}/api/shipments/${shipmentId}`);
  }
  static async updateShipment(
    shipmentId: Shipment["_id"]
  ): Promise<AxiosResponse> {
    return await axios.put(`${BASE_URL}/api/shipments/${shipmentId}`);
  }
}
