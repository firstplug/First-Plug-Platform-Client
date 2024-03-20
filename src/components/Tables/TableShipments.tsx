"use client";
import { Table } from "../Table";
import { Product, Shipment, ShipmentTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DMY_Date } from "@/utils";
import { ArrowRight, Button, CustomLink } from "@/common";
import { useStore } from "@/models";
import { TableProducts } from "./TableProducts";
import { observer } from "mobx-react-lite";
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
    cell: ({ getValue }) => DMY_Date(getValue<string>()),
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
          <div
            className=" flex   "
            onClick={() => handleSelect(row.original.orderId)}
          >
            <Button
              onClick={row.getToggleExpandedHandler()}
              variant="text"
              className="p-2 rounded-lg cursor-pointer w-full "
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
interface TableShipmentsProps {
  shipments: ShipmentTable[];
}
export const TableShipments = observer(function ({
  shipments,
}: TableShipmentsProps) {
  const {
    shipments: { setSelectedShipmentId, selectedShipment },
  } = useStore();

  const handleSelectShipment = (shipmentId: Shipment["_id"]) =>
    setSelectedShipmentId(shipmentId);

  return (
    <Table<ShipmentTable>
      columns={shipmentsColumns(handleSelectShipment)}
      data={shipments}
      getRowCanExpand={() => true}
      subComponent={
        selectedShipment ? (
          <TableProducts products={selectedShipment.products} />
        ) : null
      }
    />
  );
});
