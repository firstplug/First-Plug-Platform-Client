import { Instance, types } from "mobx-state-tree";
import { ProductModel } from "./product";

export const SHIPMENT_STATUS = [
  "Missing Data",
  "Delivered",
  "Preparing",
  "Avaliable",
  "Shipped",
] as const;
export type ShipmentStatus = (typeof SHIPMENT_STATUS)[number];
export const SHIPMENT_TYPE = ["Courrier", "Internal"] as const;
export type ShipmentType = (typeof SHIPMENT_TYPE)[number];

export const ShimpentModel = types.model({
  _id: types.string,
  name: types.string,
  lastName: types.string,
  date: types.Date,
  status: types.enumeration(SHIPMENT_STATUS),
  type: types.enumeration(SHIPMENT_TYPE),
  trackingNumber: types.optional(types.string, ""),
  trackingURL: types.optional(types.string, ""),
  products: types.optional(types.array(ProductModel), []),
});
export type Shimpent = Instance<typeof ShimpentModel>;
