"use client";

import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

interface TeamCardProps {
  team?: string;
  className?: string;
}

export var TeamCard = observer(function TeamCard({
  team,
  className,
}: TeamCardProps) {
  const {
    teams: { teams },
  } = useStore();

  const TEAM_COLORS = [
    "bg-hr",
    "bg-design",
    "bg-sales",
    "bg-dev",
    "bg-finance",
    "bg-grey",
  ];

  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-2 rounded text-md text-black font-medium  ${
        team ? TEAM_COLORS[[...teams].sort().indexOf(team)] : "bg-grey"
      } `}
    >
      {team || "Assing to a Team"}
    </span>
  );
});
