import React from "react";
import Layout from "@/common/Layout";
import Card from "@/components/Card";
import girl from "../../../../public/girl.svg";
import office from "../../../../public/office.svg";
import alert from "../../../../public/alert.svg";

import { ShopIcon, AddIcon } from "../../../common/Icons";
export default function page() {
  return (
    <Layout>
      <div className=" flex flex-col gap-2  w-full h-full ">
        <div className="flex-1 h-full">
          <Card
            Title={"My Team"}
            titleButton="Add Team Member"
            imageBottom={girl}
            icon={<AddIcon />}
            paragraph={"You haven't loaded any employees yet."}
            className={"h-full"}
          />
        </div>
        <div className="flex-1 grid grid-cols-2   gap-2  ">
          <Card
            Title={"My Stock"}
            titleButton="Shop Now"
            imageBottom={office}
            icon={<ShopIcon />}
            paragraph={"You dont't have any items."}
            className={"h-full"}
          />
          <Card
            Title={"Notifications"}
            titleButton="Shop Now"
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
