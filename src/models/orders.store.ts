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
    orderPriceById(orderId: string) {
      const order = store.orders.find((order) => order._id === orderId);

      return order.products.reduce((a, b) => parseInt(b.price) + a, 0);
    },
    orderPrice(index: number) {
      return store.orders[index].products.reduce(
        (a, b) => parseInt(b.price) + a,
        0
      );
    },
  }))

  .actions((store) => ({
    setOrders(orders: Order[]) {
      store.orders.push(orders);
    },
    setSelectedOrder(orderId: Order["_id"]) {
      store.selectedOrderId = orderId;
    },
  }));
