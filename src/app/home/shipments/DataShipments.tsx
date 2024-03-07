"use client";
import { ArrowRight, Button, CustomLink } from "@/common";
import { Table } from "@/components";
import { useStore } from "@/models";
import { Product, ProductTable, Shipment, ShipmentTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { prodcutColumns } from "../my-stock/DataStock";
const shipmentsColumns: (
  handleSelect: (shipmentId: Shipment["_id"]) => void
) => ColumnDef<ShipmentTable>[] = (handleSelect) => [
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ getValue }) => (
      <span className="uppercase text-sm"> #{getValue<string>()}</span>
    ),
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
    cell: ({ getValue }) => (
      <span className="font-semibold"> {getValue<string>()} </span>
    ),
  },
  {
    accessorKey: "trackingURL",
    header: "Track",
    cell: ({ getValue }) => (
      <CustomLink href={getValue<string>()} variant="text">
        <div className="flex items-center gap-2">
          <span>Link</span>
          <ArrowRight className="w-4" />
        </div>
      </CustomLink>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ getValue }) => <span>USD {getValue<string>()}</span>,
  },
  {
    id: "expander",
    header: () => null,

    size: 2,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div className=" flex justify-end ">
            <Button
              onClick={row.getToggleExpandedHandler()}
              variant="text"
              className="p-2 rounded-lg cursor-pointer "
            >
              <span>Details</span>
              <ArrowRight
                className={`transition-all duration-200 ${
                  row.getIsExpanded() ? "rotate-[90deg]" : "rotate-[0]"
                }`}
              />
            </Button>
          </div>
        )
      );
    },
  },
];

export default observer(function DataShipments() {
  const {
    shipments: { shipmentsTable, setSelectedShipmentId, selectedShipment },
  } = useStore();

  const handleSelectShipment = (shipmentId: Shipment["_id"]) => {
    setSelectedShipmentId(shipmentId);
  };

  return (
    <div className="  relative h-full w-full">
      <div className="overflow-y-auto absolute h-full w-full ">
        <Table<ShipmentTable>
          columns={shipmentsColumns(handleSelectShipment)}
          data={shipmentsTable}
          getRowCanExpand={() => true}
          subComponent={
            selectedShipment && (
              <Table<Product>
                columns={prodcutColumns({ serial: true })}
                data={selectedShipment.products}
              />
            )
          }
        />
      </div>
    </div>
  );
});
