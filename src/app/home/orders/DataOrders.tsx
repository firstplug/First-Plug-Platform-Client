"use client";
import { useState } from "react";
import { Table } from "@/components";
import { HeaderOrders, OrderState, Tabs } from "@/common";
import { useDate } from "@/hooks/useDate";
import { useStore } from "@/models";
import {
  Order,
  OrderStatus,
  Product,
  ShipmentByMonthTable,
  TeamMember,
} from "@/types";
import { ColumnDef } from "@tanstack/react-table";
const { DMY_Date } = useDate();
const ordersLogisticColumns: ColumnDef<ShipmentByMonthTable>[] = [
  {
    accessorKey: "month",
    header: "Month",
    cell: ({ getValue }) => getValue(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "shipments",
    header: "Shipmetns Quantity",
    cell: ({ getValue }) => getValue<number>(),
  },
  {
    accessorKey: "price",
    header: "Total",
    cell: ({ getValue }) => <b> $USD {getValue<number>()} </b>,
  },
];
const ordersEquipmentColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ getValue }) => (
      <b className="uppercase">#{getValue<string>().slice(0, 5)}</b>
    ),
  },
  {
    accessorKey: "teamMember",
    header: "Team Member",
    cell: ({ getValue }) => getValue<TeamMember>(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: ({ getValue }) => DMY_Date(getValue<string>()),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <OrderState status={getValue<OrderStatus>()} />,
  },
  {
    accessorKey: "products",
    header: "Total",
    cell: ({ getValue }) => (
      <b>
        USD
        {getValue<Product[]>().reduce((a, b) => parseInt(b.price) + a, 0)}
      </b>
    ),
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
