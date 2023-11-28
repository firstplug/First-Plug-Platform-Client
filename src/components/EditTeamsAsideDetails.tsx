"use client";
import React, { useState } from "react";
import { Button } from "@/common";
import { TeamDetails } from "./";
import { TeamServices } from "../services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";

interface EditTeamsAsideDetailsProps {
  className?: string | "";
  members?: string[];
}

export const EditTeamsAsideDetails = observer(function ({
  className,
  members,
}: EditTeamsAsideDetailsProps) {
  const {
    teams: { setTeams, teams },
  } = useStore();

  const [selectedTeams, setSelectedTeams] = useState<any[]>([]);

  const handleCheckbox = (team: any) => {
    setSelectedTeams((prevSelectedTeams) => {
      const isSelected = prevSelectedTeams.some(
        (selected) => selected._id === team._id
      );

      if (isSelected) {
        return prevSelectedTeams.filter(
          (selected) => selected._id !== team._id
        );
      } else {
        return [...prevSelectedTeams, team];
      }
    });
  };

  const handleDeleteSelectedTeams = async (teamId: string) => {
    try {
      await Promise.all(
        selectedTeams.map((team) => TeamServices.deleteTeam(team._id))
      );
      TeamServices.getAllTeams().then((res) => {
        setTeams(res);
      });
      setSelectedTeams([]);
    } catch (error) {
      console.error("Failed to delete teams:", error);
    }
  };

  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[70vh] overflow-y-auto">
        {teams.map((team) => (
          <TeamDetails
            key={team._id}
            team={team}
            members={members}
            handleSelectedTeams={handleCheckbox}
            onDelete={() => handleDeleteSelectedTeams(team._id)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="delete"
          disabled={selectedTeams.length === 0}
          size="big"
          className="flex-grow rounded-md"
          onClick={() => handleDeleteSelectedTeams}
        >
          Delete
        </Button>
        <Button variant="primary" size="big" className="flex-grow rounded-md">
          Save
        </Button>
      </div>
    </div>
  );
});
