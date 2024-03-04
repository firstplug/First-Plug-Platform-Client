"use client";
import { Table } from "@/components";
import { useDate } from "@/hooks/useDate";
import { useStore } from "@/models";
import { ShipmentByMonthTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { observer } from "mobx-react-lite";
const { getMonth } = useDate();
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
export default observer(function LogisticTable() {
  const {
    shipments: { shipmentsByMonth },
  } = useStore();
  return (
    <Table<ShipmentByMonthTable>
      columns={ordersLogisticColumns}
      data={shipmentsByMonth}
    />
  );
});
