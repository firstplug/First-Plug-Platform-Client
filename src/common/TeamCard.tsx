"use client";

import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

interface TeamCardProps {
  team?: string;
  className?: string;
}

const TEAM_COLORS = [
  "bg-hr",
  "bg-design",
  "bg-sales",
  "bg-dev",
  "bg-finance",
  "bg-grey",
];

const getTeamColor = (team: string) => {
  const hash = Array.from(team).reduce(
    (acc, char) => acc + char.charCodeAt(0),
    0
  );
  return TEAM_COLORS[hash % TEAM_COLORS.length];
};

export var TeamCard = observer(function TeamCard({
  team,
  className,
}: TeamCardProps) {
  const {
    teams: { teams },
  } = useStore();

  const teamColor = useMemo(
    () => (team ? getTeamColor(team) : "bg-grey"),
    [team]
  );

  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-2 rounded text-md text-black font-medium ${teamColor}`}
    >
      {team || "Assign to a Team"}
    </span>
  );
});
