"use client";
import { Button, OrderState } from "@/common";
import { Table } from "@/components";
import { useDate } from "@/hooks/useDate";
import { useStore } from "@/models";
import { Order, OrderStatus, Product, TeamMember } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { observer } from "mobx-react-lite";

export default observer(function EquipmentTable() {
  const {
    orders: { orders, setSelectedOrder },
    aside: { setAside },
  } = useStore();
  const { DMY_Date } = useDate();

  const ordersEquipmentColumns: ColumnDef<Order>[] = [
    {
      accessorKey: "_id",
      header: "Order ID",
      cell: ({ getValue }) => (
        <Button
          variant="text"
          onClick={() => {
            setSelectedOrder(getValue<string>());
            setAside("OrderDetails");
          }}
        >
          #{getValue<string>().slice(0, 7)}
        </Button>
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
        <span>
          USD {getValue<Product[]>().reduce((a, b) => parseInt(b.price) + a, 0)}
        </span>
      ),
    },
  ];
  return <Table<Order> columns={ordersEquipmentColumns} data={orders} />;
});
