"use client";
import React, { useState } from "react";
import orders from "../../../../../public/orders.svg";
import Card from "@/components/Card";
import { ShopIcon } from "../../../../common/Icons";
import Button from "@/common/Button";
import Layout from "@/common/Layout";
import Header from "../../../../common/Header";
import TableEquipment from "@/components/TableEquipment";

export default function Equipment() {
  const [selectedTab, setSelectedTab] = useState("Equipment");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <TableEquipment />
    </Layout>
  );
}
