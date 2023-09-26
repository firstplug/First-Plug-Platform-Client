"use client";
import React from "react";
import CustomLink from "@/common/CustomLink";
import Button from "@/common/Button";

export default function Header({ selectedTab }) {
  return (
    <header className="flex gap-5 border-b-4 border-gray-300">
      <CustomLink
        href="/home/orders/equipment"
        className={`border-b-4 ${
          selectedTab === "Equipment"
            ? "border-blue text-blue"
            : "border-gray-300 text-dark-grey"
        } relative top-1 pb-2`}
      >
        <Button
          body="Equipment"
          className={`border-0 font-inter text-xl font-bold ${
            selectedTab === "Equipment" ? "text-blue" : ""
          }`}
        />
      </CustomLink>
      <CustomLink
        href="/home/orders/logistics"
        className={`border-b-4 ${
          selectedTab === "Logistics"
            ? "border-blue text-blue"
            : "border-gray-300 text-dark-grey"
        } relative top-1 pb-2`}
      >
        <Button
          body="Logistics"
          className={`border-0 font-inter text-xl font-bold ${
            selectedTab === "Logistics" ? "text-blue" : ""
          }`}
        />
      </CustomLink>
    </header>
  );
}
