import { Order, OrderModel } from "@/types";
import { Instance, types } from "mobx-state-tree";

export const OrderStore = types
  .model({
    orders: types.array(OrderModel),
    orderSelected: types.optional(types.string, ""),
  })
  .views((store) => ({
    get selectedOrder() {
      return store.orders.find((order) => order._id === store.orderSelected);
    },
  }))
  .actions((store) => ({
    setOrders(orders) {
      store.orders = orders;
    },
    setSelectedOrder(orderId: string) {
      store.orderSelected = orderId;
    },
  }));
