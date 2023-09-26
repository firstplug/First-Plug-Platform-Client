import React from "react";
import Layout from "@/common/Layout";
import Card from "@/components/Card";
import alert from "../../../../../public/alert.svg";
import { ShopIcon, AddIcon } from "@/common/Icons";
import TeamCard from "@/components/TeamCard";
import StockCard from "@/components/StockCard";

export default function page() {
  return (
    <Layout>
      <div className=" flex flex-col gap-2  w-full h-full ">
        <Card className={"flex-1 h-full"}>
          <TeamCard />
        </Card>

        <div className=" flex-1 h-full grid grid-cols-2   gap-2   ">
          <Card Title={"My Stock"} titleButton="Shop Now" icon={<ShopIcon />}>
            <StockCard className={"my-4"} />
          </Card>
          <Card
            Title={"Notifications"}
            imageBottom={alert}
            icon={<ShopIcon />}
            paragraph={"You dont't have any orders."}
            className={"h-full"}
          />
        </div>
      </div>
    </Layout>
  );
}
