import Button from "@/common/Button";
import Layout from "@/common/Layout";
import React from "react";

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
              body="Load Stock"
              variant={"secondary"}
              className={"p-3 "}
            />
          </div>
          <div>
            <Button body="Load Stock" variant={"primary"} className={"p-3 "} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
