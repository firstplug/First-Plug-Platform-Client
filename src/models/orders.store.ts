import { Instance, types } from "mobx-state-tree";

const Order = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.optional(types.string, ""),
  date: types.string,
  totalPrice: types.optional(types.string, ""),
  products: types.optional(types.array(types.string), []),
});

export type Order = Instance<typeof Order>;

export const OrderStore = types
  .model({
    orders: types.array(Order),
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
    setSelectedOrder(orderId) {
      store.orderSelected = orderId;
    },
  }));
