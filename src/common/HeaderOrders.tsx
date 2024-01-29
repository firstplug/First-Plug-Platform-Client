"use client";
import { Button } from "@/common";
export type Tabs = "Equipment" | "Logistics";

interface selectedTabProps {
  selectedTab: Tabs;
  handleTab: (e: Tabs) => void;
}
export function HeaderOrders({ selectedTab, handleTab }: selectedTabProps) {
  return (
    <header className="flex">
      <Button
        variant="text"
        onClick={() => handleTab("Equipment")}
        body="Equipment"
        className={` font-inter text-xl font-bold p-4 rounded-none  ${
          selectedTab === "Equipment"
            ? "text-blue  border-b-4 border-blue "
            : "bg-none"
        }`}
      />

      <Button
        variant="text"
        onClick={() => handleTab("Logistics")}
        body="Logistics"
        className={` font-inter text-xl font-bold p-4 rounded-none   ${
          selectedTab === "Logistics"
            ? "text-blue  border-b-4  border-blue"
            : "bg-none"
        }`}
      />
    </header>
  );
}
