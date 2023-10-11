import React from "react";

export default function TeamCard({ team, className }) {
  const colors_role = {
    Designer: "bg-design",
    HR: "bg-hr",
    Sales: "bg-sales",
    Developer: "bg-dev",
    Finance: "bg-finance",
  };
  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-1 rounded text-md text-black font-medium ${
        team ? colors_role[team] : "bg-light-grey"
      } `}
    >
      {team || "Assing to a Team"}
    </span>
  );
}
