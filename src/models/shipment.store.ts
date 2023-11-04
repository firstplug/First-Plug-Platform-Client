const { types } = require("mobx-state-tree");

const Shipments = types.model({
  _id: types.string,
  fullname: types.optional(types.string, ""),
  date: types.Date,
  QuantityProducts: types.optional(types.string, ""),
  types: types.optional(types.string, ""),
  trackingNumber: types.optional(types.string, ""),
  trackingURL: types.optional(types.string, ""),
  price: types.optional(types.string, ""),
  orders: types.optional(types.array(types.string), []),
});

export const ShipmentStore = types.model({
  shipments: types.array(Shipments),
});
