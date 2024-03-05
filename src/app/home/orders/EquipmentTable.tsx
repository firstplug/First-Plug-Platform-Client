"use client";
import { Button, OrderState } from "@/common";
import { Table } from "@/components";
import { DMY_Date } from "@/utils";
import { useStore } from "@/models";
import { Order, OrderStatus, Product, TeamMember } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { observer } from "mobx-react-lite";
const ordersEquipmentColumns: (
  handleClick: (orderId: Order["_id"]) => void
) => ColumnDef<Order>[] = (handleClick) => [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ getValue }) => (
      <Button
        variant="text"
        size="small"
        onClick={() => handleClick(getValue<string>())}
      >
        #{getValue<string>()}
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
export default observer(function EquipmentTable() {
  const {
    orders: { orders, setSelectedOrder },
    aside: { setAside },
  } = useStore();

  const handleClick = (orderId: Order["_id"]) => {
    setAside("OrderDetails");
    setSelectedOrder(orderId);
  };
  return (
    <Table<Order> columns={ordersEquipmentColumns(handleClick)} data={orders} />
  );
});
