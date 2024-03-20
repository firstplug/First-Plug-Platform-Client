"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { TableProducts } from "@/components/Tables";

export default observer(function ShipmentDetailsRow() {
  const {
    shipments: { selectedShipment },
  } = useStore();

  return (
    <div>
      {selectedShipment && (
        <TableProducts products={selectedShipment.products} />
      )}
    </div>
  );
});
