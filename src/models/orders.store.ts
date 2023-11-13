import { OrderModel, Order } from "@/types";
import { types } from "mobx-state-tree";

export const OrderStore = types
  .model({
    orders: types.array(OrderModel),
    selectedOrderId: types.optional(types.string, ""),
  })
  .views((store) => ({
    get selectedOrder() {
      return store.orders.find((order) => order._id === store.selectedOrderId);
    },
  }))
  .actions((store) => ({
    setOrders(orders: Order[]) {
      // TODO: the same cuestion at product store
      // store.orders = orders;

      store.orders.push(orders);
    },
    setSelectedOrder(orderId: Order["_id"]) {
      store.selectedOrderId = orderId;
    },
  }));
