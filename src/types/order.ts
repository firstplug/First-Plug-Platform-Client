import { Instance, types } from "mobx-state-tree";
import { ProductModel } from "./product";

export const ORDER_STATUSES = [
  "OrderConfirmed",
  "OrderCanceled",
  "ConfirmationPending",
  "PaymentPending",
] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

//TODO: Should this contain ids or the entire team members?
export const OrderModel = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.enumeration(ORDER_STATUSES),
  date: types.string,
  products: types.optional(types.array(ProductModel), []),
});
export type Order = Instance<typeof OrderModel>;
