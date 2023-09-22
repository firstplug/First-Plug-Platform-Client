import Button from "@/common/Button";
import Layout from "@/common/Layout";
import Table from "@/components/Table";
import React from "react";
import { ShopIcon } from "@/common/Icons";
export function UpLoadIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}
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
