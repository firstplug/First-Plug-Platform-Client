"use client";

import { observer } from "mobx-react-lite";
import { useMemo } from "react";

interface TeamCardProps {
  team?: string;
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
  const teamColor = useMemo(
    () => (team ? getTeamColor(team) : "bg-lightRed"),
    [team]
  );

  return (
    <span
      className={`  ${
        className || ""
      } py-0.5 px-2 rounded  text-black font-medium ${teamColor}`}
    >
      {team || "Not Assigned"}
    </span>
  );
});
