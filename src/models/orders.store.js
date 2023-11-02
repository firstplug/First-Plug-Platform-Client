const { types } = require("mobx-state-tree");

const Orders = types.model({
  _id: types.string,
  teamMember: types.optional(types.array(types.string), []),
  status: types.optional(types.string, ""),
  date: types.string,
  totalPrice: types.optional(types.string, ""),
  products: types.optional(types.array(types.string), []),
  // products: types.optional(types.array(Products), []),
});

export const OrderStore = types
  .model({
    orders: types.array(Orders),
    selectedOrder: types.optional(types.string, ""),
  })
  .actions((store) => ({
    setOrders(orders) {
      store.orders = orders;
    },
    setSelectedOrder(orderId) {
      console.log("ENTRA AL SELECTED ID ORDER: ", orderId);
      store.selectedOrder = orderId;
    },
  }))
  .views((store) => ({
    oneOrder() {
      return store.orders.filter(
        (order) => order._id === store.selectedOrder
      )[0];
    },
  }));
