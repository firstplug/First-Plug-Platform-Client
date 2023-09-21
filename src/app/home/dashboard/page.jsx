import React from "react";
import Layout from "@/common/Layout";

export default function page() {
  const cardClass = "border border-border rounded-md grid place-items-center";
  return (
    <Layout>
      <div className=" grid gap-2   w-full h-full">
        <div className="grid grid-cols-2  gap-2   ">
          <div className={`${cardClass}`}>card1</div>
          <div className={`${cardClass}`}>card1</div>
        </div>
        <div className={`grid- ${cardClass}`}>card1</div>
      </div>
    </Layout>
  );
}
