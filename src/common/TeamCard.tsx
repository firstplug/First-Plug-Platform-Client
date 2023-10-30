import React from "react";

interface TeamCardProps {
  team?: string;
  className?: string;
}

export default function TeamCard({ team, className } : TeamCardProps) {
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
      } py-0.5 px-1 rounded text-md text-black font-medium border ${
        team && colors_role[team] ? colors_role[team] : "bg-grey"
      } `}
    >
      {team || "Assing to a Team"}
    </span>
  );
}
