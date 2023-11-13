import { types } from "mobx-state-tree";
import { ShimpentModel } from "@/types";

export const ShipmentStore = types.model({
  shipments: types.array(ShimpentModel),
});
