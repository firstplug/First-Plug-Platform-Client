import {
  ShimpentModel,
  Shipment,
  ShipmentByMonth,
  ShipmentByMonthStatus,
  ShipmentByMonthTable,
  ShipmentTable,
} from "@/types";
import { types } from "mobx-state-tree";

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
    get shipmentsTable() {
      return store.shipments.map(
        (shipment): ShipmentTable => ({
          orderId: shipment._id,
          date: shipment.date,
          type: shipment.type,
          productsQuantity: shipment.products.length,
          price: shipment.products.reduce((a, b) => parseInt(b.price) + a, 0),
          trackingURL: shipment.trackingURL,
        })
      );
    },

    get shipmentsByMonth(): ShipmentByMonthTable[] {
      const months: ShipmentByMonth[] = Array.from({ length: 12 }).map(
        (m, i) => ({
          month: i,
          shipments: [] as Shipment[],
          status: "" as ShipmentByMonthStatus,
          price: 0,
        })
      );

      store.shipments.forEach((shipment) => {
        const date = new Date(shipment.date);

        const shipmentMonth = date.getUTCMonth();
        months[shipmentMonth].month = shipmentMonth;
        months[shipmentMonth].shipments.push(shipment);
        months[shipmentMonth].price = shipment.products.reduce(
          (a, b) => parseInt(b.price) + a,
          0
        );
      });
      return months.map(({ month, price, shipments, status }) => ({
        month,
        price,
        shipments: shipments.length,
        status,
      }));
    },
    get shipmentDetails() {
      const shipment = store.shipments.find(
        (shipment) => shipment._id === store.shipmentId
      );

      return shipment?.products || [];
    },

    shipmentByProduct(productId: string) {
      return store.shipments.filter((shipment) =>
        shipment.products.some((product) => product._id === productId)
      );
    },

    shipmentByMember(memberId: string) {
      const shipment = store.shipments.find(
        (shipment) => shipment.memberId === memberId
      );

      return shipment.products;
    },
  }))
  .actions((store) => ({
    setShipments(shipments: Shipment[]) {
      store.shipments.replace(shipments);
    },
  }));
