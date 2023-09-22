import Button from "@/common/Button";
import Layout from "@/common/Layout";
import React from "react";
import office from "../../../../public/office.svg";
import Card from "@/components/Card";
import { ShopIcon, UpLoadIcon } from "../../../common/Icons";
import CustomLink from "@/common/CustomLink";

export default function MyStock() {
  return (
    <Layout>
      <div className="border-2 shadow-sm border-border rounded-md h-full grid place-items-center w-full ">
        <div>
          <Card
            imageBottom={office}
            paragraph={"You don't have any items."}
            className={"border-none p-0 m-0"}
          />
        </div>
        <div className="flex gap-2">
          <CustomLink href="/home/my-stock/data">
            <Button
              variant={"secondary"}
              body="Load Stock"
              icon={<UpLoadIcon />}
              className={"p-3 rounded-md"}
            />
          </CustomLink>
          <Button
            variant={"primary"}
            icon={<ShopIcon />}
            body="Shop Now"
            className={"p-3 rounded-md"}
          />
        </div>
      </div>
    </Layout>
  );
}
