import React from "react";

export default function TeamCard({ team, className }) {
  const colors_role = {
    desing: "bg-desing",
    hr: "bg-hr",
    sales: "bg-sales",
    dev: "bg-dev",
    finance: "bg-finance",
  };
  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-1 rounded text-md text-black font-medium ${
        team ? colors_role[team.toLowerCase()] : "bg-light-grey"
      } `}
    >
      {team || "Assing to a Team"}
    </span>
  );
}
