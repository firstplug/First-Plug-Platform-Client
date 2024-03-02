import { Table } from "@/components";
import { useStore } from "@/models";
import { Product, ShipmentTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
const shipmentsColumns: ColumnDef<ShipmentTable>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: ({ getValue }) => format(getValue<string>().toString(), "dd/MM/yyyy"),
  },
  {
    accessorKey: "productsQuantity",
    header: "Quantity Prodcuts",
    cell: ({ getValue }) => getValue<Product[]>(),
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "trackingURL",
    header: "Track",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => <strong>USD {getValue<string>()}</strong>,
  },
];
const columns = {
  shipments: shipmentsColumns,
};
export default observer(function DataShipments() {
  const {
    shipments: { shipmentsTable },
  } = useStore();

  return (
    <div className=" overflow-y-auto">
      <Table<ShipmentTable> columns={columns.shipments} data={shipmentsTable} />
    </div>
  );
});
