"use client";
import { useEffect, useState } from "react";
import { TableEquipment, TableLogistics } from "@/components";
import { Layout, HeaderOrders, Tabs } from "@/common";
import { useStore } from "@/models";
import { OrderServices } from "@/services";
export default function DataOrders() {
    const [selectedTab, setSelectedTab] = useState<Tabs>("Equipment");
    const { orders } = useStore();

    useEffect(() => {
      OrderServices.getAllOrders().then((res) => {
        orders.setOrders(res);
      });
    }, [orders]);
    
    const handleTabClick = (tabName: Tabs) => {
      setSelectedTab(tabName);
    };

    return (
      <Layout className="flex flex-col gap-8">
        <HeaderOrders selectedTab={selectedTab} handleTab={handleTabClick} />
        {selectedTab === "Logistics" ? 
    
        <TableLogistics />
        :<TableEquipment />
        }
      </Layout>
    );
}
