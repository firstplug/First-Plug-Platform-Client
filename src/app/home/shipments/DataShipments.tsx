"use client";
import { ArrowRight, Button, CustomLink } from "@/common";
import { Table } from "@/components";
import { useStore } from "@/models";
import { Product, ProductTable, Shipment, ShipmentTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import Image from "next/image";
const shipmentsColumns: ColumnDef<ShipmentTable>[] = [
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: ({ getValue }) => (
      <span className="uppercase"> #{getValue<string>().slice(0, 5)}</span>
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
          <div className=" flex justify-end">
            <Button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
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
const PRODUCTS_COLUMNS: ColumnDef<ProductTable>[] = [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 100,
    cell: ({ getValue }) => (
      <div className="flex gap-2 items-center">
        <div className="relative w-[15%]   aspect-square   ">
          <Image
            src={getValue<{ img: string }>().img}
            alt={getValue<{ category: string }>().category}
            fill
            className=" aspect-video rounded-md shadow-md h-full"
          />
        </div>
        <span>{getValue<{ category: string }>().category}</span>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.model,
    header: "Model",
    size: 0,
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorFn: (row) => row.serialNumber,
    header: "Serial",
    size: 0,
    cell: ({ getValue }) => (
      <span className="  text-sm">{getValue<string>()}</span>
    ),
  },
  {
    id: "expander",
    header: () => null,
    size: 2,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div className=" flex justify-end">
            <Button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
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
    shipments: { shipmentsTable },
    products: { productsTable },
  } = useStore();
  const [selectedShipment, setSelectedShipment] = useState<Shipment>();

  return (
    <div className=" overflow-y-auto">
      <Table<ShipmentTable>
        columns={shipmentsColumns}
        data={shipmentsTable}
        getRowCanExpand={() => true}
        subComponent={
          <Table<ProductTable>
            columns={PRODUCTS_COLUMNS}
            data={productsTable}
          />
        }
      />
    </div>
  );
});
