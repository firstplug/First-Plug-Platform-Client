"use client";
import React, { useState } from "react";
import Button from "@/common/Button";
import { DropDownArrow } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import TeamInfo from "./TeamInfo";

type team =  {
  name: string;
  teamMember: string[]; 
}

interface TeamDetailsProps {
  team: team
  className?: string;
  handleSelectedTeams: (selectedTeam: team) => void;
  members: string[];
  onDelete: (teamId: string) => Promise<void>; 
}

export default function TeamDetails({
  team,
  className,
  handleSelectedTeams,
} : TeamDetailsProps) {
  const [showDetails, setShowDetails] = useState<Boolean>(false);

  return (
    <section className={` ${className} border rounded-md p-3 `}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input type="checkbox" onChange={() => handleSelectedTeams(team)} />
          <TeamCard team={team.name} />
        </div>

        <Button
          className="cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          <DropDownArrow
            className={`${
              showDetails ? "rotate-180 " : " rotate-360"
            } transition-all duration-300`}
          />
        </Button>
      </div>

      {showDetails && <TeamInfo filterMembers={team.teamMember} team={team} />}
    </section>
  );
}
