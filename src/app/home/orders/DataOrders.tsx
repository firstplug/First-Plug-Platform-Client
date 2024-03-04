"use client";
import { useState } from "react";
import { HeaderOrders, Tabs } from "@/common";

import { observer } from "mobx-react-lite";
import EquipmentTable from "./EquipmentTable";
import LogisticTable from "./LogisticTable";
export default observer(function DataOrders() {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Equipment");

  const handleTabClick = (tabName: Tabs) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="flex flex-col gap-8">
      <HeaderOrders selectedTab={selectedTab} handleTab={handleTabClick} />
      {selectedTab === "Logistics" ? <LogisticTable /> : <EquipmentTable />}
    </div>
  );
});
