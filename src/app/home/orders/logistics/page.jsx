"use client";
import React, { useState } from "react";
import orders from "../../../../../public/orders.svg";
import Card from "@/components/Card";
import { ShopIcon } from "../../../../common/Icons";
import Button from "@/common/Button";
import Layout from "@/common/Layout";
import Header from "../Header";

export default function Logistics() {
  const [selectedTab, setSelectedTab] = useState("Logistics");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <div className="border-2 shadow-sm rounded-md h-full grid place-items-center w-full ">
        <div className="p-4">
          <Card
            imageBottom={orders}
            paragraph={"You don't have any orders."}
            className={"border-none p-0 m-0"}
          />
        </div>
        <Button
          variant={"primary"}
          icon={<ShopIcon />}
          body="Shop Now"
          className={"p-3 rounded-md"}
        />
      </div>
    </Layout>
  );
}
