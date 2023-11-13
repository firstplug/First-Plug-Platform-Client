import { Instance, types } from "mobx-state-tree";

export const ORDER_STATUSES = [
  "order confirmed",
  "order canceled",
  "confirmation pending",
  "payment pending",
] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const OrderModel = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.enumeration(ORDER_STATUSES),
  date: types.string,
  totalPrice: types.optional(types.string, ""),
  products: types.optional(types.array(types.string), []),
});
export type Order = Instance<typeof OrderModel>;
