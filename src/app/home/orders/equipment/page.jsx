"use client";
import { useState } from "react";

import TableEquipment from "@/components/TableEquipment";
import Layout from "@/common/Layout";
import Header from "@/common/Header";

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
