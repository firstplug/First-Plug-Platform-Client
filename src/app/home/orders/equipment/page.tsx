"use client";
import { useEffect, useState } from "react";
import TableEquipment from "@/components/TableEquipment";
import Layout from "@/common/Layout";
import Header from "@/common/Header";
import Aside from "@/components/Aside";
import ProductDetail from "@/common/ProductDetail";
import Button from "@/common/Button";
import { DownloadIcon } from "@/common/Icons";
import useModal from "@/hooks/useModal";
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