"use client";
import { useState } from "react";

import TableLogistics from "@/components/TableLogistics";

import Layout from "@/common/Layout";
import Header from "@/common/Header";

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
