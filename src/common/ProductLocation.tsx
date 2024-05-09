import { Location } from "@/types";
import React from "react";

export function ProductLocation({ location }: { location: Location }) {
  return (
    <span
      className={`p-1 px-2  text-xs ${
        location
          ? location === "Employee"
            ? "bg-lightGreen"
            : "bg-lightBlue"
          : "bg-light-grey"
      } rounded-full `}
    >
      {location ? location : "No Location"}
    </span>
  );
}
