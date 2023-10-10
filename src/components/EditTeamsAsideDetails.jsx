import React, { useState, useEffect } from "react";
import Button from "@/common/Button";
import TeamDetails from "./TeamDeatils";
import { TeamServices } from "../services/team.services";

export default function EditTeamsAsideDetails({ className = "", members }) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const teamsData = await TeamServices.getAllTeams();
        setTeams(teamsData);
      } catch (error) {
        console.error("Error obtaining teams:", error);
      }
    }

    fetchTeams();
  }, []);

  const handleDeleteTeam = async (id) => {
    try {
      await TeamServices.deleteTeam(id);
    } catch (error) {
      console.error("Failed to delete team:", error);
    }
  };

  const [selectedTeams, setSelectedTeams] = useState([]);

  const handleCheckbox = (team) => {
    setSelectedTeams((prevSelectedMembers) => {
      const isSelected = prevSelectedMembers.some(
        (selected) => selected._id === team._id
      );

      if (isSelected) {
        return prevSelectedMembers.filter(
          (selected) => selected._id !== team._id
        );
      } else {
        return [...prevSelectedMembers, team];
      }
    });
  };

  console.log(selectedTeams);
  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[70vh] overflow-y-auto">
        {teams.map((team) => (
          <TeamDetails
            key={team._id}
            team={team}
            members={members}
            handleSelectedTeams={handleCheckbox}
            onDelete={() => handleDeleteTeam(team.id)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="delete"
          disabled={selectedTeams.length === 0}
          size="big"
          className="flex-grow rounded-md"
        >
          Delete
        </Button>
        <Button variant="primary" size="big" className="flex-grow rounded-md">
          Save
        </Button>
      </div>
    </div>
  );
}
