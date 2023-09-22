import Button from "@/common/Button";
import Layout from "@/common/Layout";
import Table from "@/components/Table";
import React from "react";
import { ShopIcon, UpLoadIcon } from "@/common/Icons";

export default function MyStock() {
  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label htmlFor="" className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
        </div>

        <div className="flex  gap-2">
          <div>
            <Button
              variant={"secondary"}
              body="Load Stock"
              icon={<UpLoadIcon />}
              className={"p-3 rounded-md"}
            />
          </div>
          <div>
            <Button
              variant={"primary"}
              icon={<ShopIcon />}
              body="Shop Now"
              className={"p-3 rounded-md"}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Table />
      </div>
    </Layout>
  );
}
