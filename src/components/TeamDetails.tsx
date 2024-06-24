"use client";
import React, { useState } from "react";
import { Button, TeamCard } from "@/common";
import { DropDownArrow } from "@/common/Icons";
import { TeamInfo } from ".";
import { Team, TeamMember } from "@/types";

interface TeamDetailsProps {
  team: Team;
  className?: string;
  handleSelectedTeams: (selectedTeam: Team) => void;
  members: TeamMember[];
  showDetails: boolean;
  setNewName: (name: string) => void;
  setSelectedMembers: (members: TeamMember[]) => void;
}

export const TeamDetails = function ({
  team,
  className,
  handleSelectedTeams,
  showDetails,
  setNewName,
  setSelectedMembers,
}: TeamDetailsProps) {
  const [detailsVisible, setDetailsVisible] = useState(showDetails);

  return (
    <section className={` ${className} border rounded-md p-3 `}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <input
            type="checkbox"
            onChange={() => handleSelectedTeams(team)}
            onClick={(e) => e.stopPropagation()}
          />
          <TeamCard team={team} />
        </div>

        <Button
          className="cursor-pointer"
          onClick={() => setDetailsVisible(!detailsVisible)}
        >
          <DropDownArrow
            className={`${
              detailsVisible ? "rotate-180 " : " rotate-360"
            } transition-all duration-300`}
          />
        </Button>
      </div>

      {detailsVisible && (
        <TeamInfo
          team={team}
          setNewName={setNewName}
          setSelectedMembers={setSelectedMembers}
        />
      )}
    </section>
  );
};
