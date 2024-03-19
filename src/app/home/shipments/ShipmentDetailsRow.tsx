"use client";

import { Table } from "@/components";
import { useStore } from "@/models";
import { Product } from "@/types";
import { observer } from "mobx-react-lite";
import { prodcutColumns } from "../my-stock/DataStock";

export default observer(function ShipmentDetailsRow() {
  const {
    shipments: { selectedShipment, setSelectedShipmentId, selectedShipmentId },
  } = useStore();

  return (
    <div>
      {selectedShipment && (
        <Table<Product>
          columns={prodcutColumns({ serial: true })}
          data={selectedShipment.products}
        />
      )}
    </div>
  );
});
