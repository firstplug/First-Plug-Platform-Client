"use client";

import { Team } from "@/types";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";

interface TeamCardProps {
  team?: Team | string;
  className?: string;
}

const TEAM_COLORS = [
  "bg-team1",
  "bg-team2",
  "bg-team3",
  "bg-team4",
  "bg-team5",
  "bg-team6",
  "bg-team7",
  "bg-team8",
  "bg-team9",
  "bg-team10",
];

const getTeamColor = (team: string) => {
  if (!team) return "bg-lightRed";
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
  const teamName =
    typeof team === "string" ? team : team?.name || "Not Assigned";
  const teamColor = useMemo(
    () => (teamName ? getTeamColor(teamName) : "bg-lightRed"),
    [teamName]
  );
  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-2 rounded  text-black font-medium ${teamColor}`}
    >
      {teamName}
    </span>
  );
});
