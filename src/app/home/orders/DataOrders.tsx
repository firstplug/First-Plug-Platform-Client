"use client";
import { useEffect, useState } from "react";
import { TableEquipment, TableLogistics } from "@/components";
import { Layout, HeaderOrders } from "@/common";
import { useStore } from "@/models";
import { OrderServices } from "@/services";
export default function DataOrders() {
    const [selectedTab, setSelectedTab] = useState<"Logistics" | "Equipment">("Equipment");
    const { orders } = useStore();
    const handleTabClick = (tabName: "Logistics" | "Equipment") => {
      setSelectedTab(tabName);
    };
    useEffect(() => {
        OrderServices.getAllOrders().then((res) => {
          orders.setOrders(res);
        });
      }, [orders]);
  
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
