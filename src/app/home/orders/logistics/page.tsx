"use client";
import { useState } from "react";

import TableLogistics from "@/components/TableLogistics";
import { Layout, Header } from "@/common";

export default function Logistics() {
  const [selectedTab, setSelectedTab] = useState<string>("Logistics");

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <TableLogistics />
    </Layout>
  );
}
