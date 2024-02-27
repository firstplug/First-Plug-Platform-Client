import { Table } from "@/components";
import { useStore } from "@/models";
import { Shipment } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
const shipmentsColumns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: ({ getValue }) => format(getValue<string>().toString(), "dd/MM/yyyy"),
  },
  {
    accessorKey: "products",
    header: "Quantity Prodcuts",
    cell: ({ getValue }) => getValue<string>().length,
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
    accessorKey: "products",
    header: "Price",
    cell: ({ getValue }) => <strong> USD {getValue<string>().length} </strong>,
  },
];
export default observer(function DataShipments() {
  const {
    shipments: { shipments },
  } = useStore();

  return (
    <div className=" overflow-y-auto">
      <Table columns={shipmentsColumns} data={shipments} />
    </div>
  );
});
