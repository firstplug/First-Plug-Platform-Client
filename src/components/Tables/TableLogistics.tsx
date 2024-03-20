import { ShipmentByMonthTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import { Table } from "../Table";
const ordersLogisticColumns: ColumnDef<ShipmentByMonthTable>[] = [
  {
    accessorKey: "month",
    header: "Month",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "shipments",
    header: "Shipmetns Quantity",
    cell: ({ getValue }) => getValue<number>(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => getValue<string>(),
  },

  {
    accessorKey: "price",
    header: "Total",
    cell: ({ getValue }) => <span> USD {getValue<number>()} </span>,
  },
];

interface TableLogisticsProps {
  shipmentsByMonth: ShipmentByMonthTable[];
}
export function TableLogistics({ shipmentsByMonth }: TableLogisticsProps) {
  return (
    <Table<ShipmentByMonthTable>
      columns={ordersLogisticColumns}
      data={shipmentsByMonth}
    />
  );
}
