import { Instance, types } from "mobx-state-tree";
import { ProductModel } from "./product";

export const ShimpentModel = types.model({
  _id: types.string,
  name: types.string,
  date: types.Date,
  types: types.optional(types.string, ""),
  trackingNumber: types.optional(types.string, ""),
  trackingURL: types.optional(types.string, ""),
  products: types.optional(types.array(ProductModel), []),
});
export type Shimpent = Instance<typeof ShimpentModel>;
