"use client";
import { useState } from "react";
import { Table } from "@/components";
import { HeaderOrders, Tabs } from "@/common";
import { useStore } from "@/models";
import { Order, ShipmentByMonthTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
const ordersLogisticColumns: ColumnDef<ShipmentByMonthTable>[] = [
  {
    accessorKey: "month",
    header: "Month",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "shipments",
    header: "Shipmetns Quantity",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "price",
    header: "Total",
    cell: ({ getValue }) => getValue<string>(),
  },
];
const ordersEquipmentColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "month",
    header: "Order ID",
    cell: ({ getValue }) => <b>#{getValue<string>()}</b>,
  },
  {
    accessorKey: "teamMember",
    header: "Team Memer",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: (info) => info.getValue(),
  },
];
export default function DataOrders() {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Equipment");
  const {
    orders: { orders },
    shipments: { shipmentsByMonth },
  } = useStore();

  const handleTabClick = (tabName: Tabs) => {
    setSelectedTab(tabName);
  };
  return (
    <div className="flex flex-col gap-8">
      <HeaderOrders selectedTab={selectedTab} handleTab={handleTabClick} />

      {selectedTab === "Logistics" ? (
        <Table columns={ordersLogisticColumns} data={shipmentsByMonth} />
      ) : (
        <Table columns={ordersEquipmentColumns} data={orders} />
      )}
    </div>
  );
}
