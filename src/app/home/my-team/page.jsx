import React from "react";
import Layout from "@/common/Layout";

export default function MyTeam() {
  const cardClass = "border border-border rounded-md grid place-items-center";

  return (
    <Layout>
      <div className=" grid grid-cols-3 gap-2   w-full h-full">
        <div className={`${cardClass}`}>card1</div>
        <div className={`${cardClass}`}>card1</div>
        <div className={` ${cardClass}`}>card1</div>
        <div className={`${cardClass}`}>card1</div>
        <div className={`${cardClass}`}>card1</div>
        <div className={` ${cardClass}`}>card1</div>
      </div>
    </Layout>
  );
}
