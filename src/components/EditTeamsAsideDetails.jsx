import React, { useState, useEffect } from "react";
import Button from "@/common/Button";
import TeamDetails from "./TeamDeatils";
import { TeamServices } from "../services/team.services";

export default function EditTeamsAsideDetails({ className = "", members }) {
  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);

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

  const handleCheckbox = (team) => {
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

  const handleDeleteSelectedTeams = () => {
    try {
      selectedTeams.forEach((team) => {
        TeamServices.deleteTeam(team._id);
        setTeams((prev) => prev.filter((prev) => prev._id !== team._id));
      });
      setSelectedTeams([]);
    } catch (error) {
      console.error("Failed to delete teams:", error);
    }
  };

  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[70vh] overflow-y-auto">
        {teams.length === 0
          ? "No teams"
          : teams.map((team) => (
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
          onClick={handleDeleteSelectedTeams}
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
