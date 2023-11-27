"use client";
import { useEffect, useState } from "react";
import TableEquipment from "@/components/TableEquipment";
import { Layout, Header } from "@/common";
import { OrderServices } from "@/services/orders.services";
import { useStore } from "@/models/root.store";

export default function Equipment() {
  const [selectedTab, setSelectedTab] = useState("Equipment");

  const { orders } = useStore();

  useEffect(() => {
    OrderServices.getAllOrders().then((res) => {
      orders.setOrders(res);
    });
  }, [orders]);

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <TableEquipment />
    </Layout>
  );
}
