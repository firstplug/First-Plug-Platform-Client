"use client";
import React, { useState } from "react";
import orders from "../../../../../public/orders.svg";
import Card from "@/components/Card";
import { ShopIcon } from "../../../../common/Icons";
import Button from "@/common/Button";
import Layout from "@/common/Layout";
import Header from "../../../../common/Header";
import TableLogistics from "../../../../components/TableLogistics";

export default function Logistics() {
  const [selectedTab, setSelectedTab] = useState("Logistics");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <TableLogistics />
    </Layout>
  );
}
