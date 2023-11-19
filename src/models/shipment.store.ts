import { types } from "mobx-state-tree";
import { ShimpentModel } from "@/types";

export const ShipmentStore = types
  .model({
    shipments: types.array(ShimpentModel),
    shipmentId: types.optional(types.string, ""),
  })
  .views((store) => ({
    get selectedShipment() {
      return store.shipments.find(
        (shipment) => shipment._id === store.shipmentId
      );
    },
    get shipmentDetails() {
      const shipment = store.shipments.find(
        (shipment) => shipment._id === store.shipmentId
      );

      return shipment.products;
    },
    shipmentByProduct(productId: string) {
      return store.shipments.filter((shipment) =>
        shipment.products.some((product) => product._id === productId)
      );
    },
  }));
