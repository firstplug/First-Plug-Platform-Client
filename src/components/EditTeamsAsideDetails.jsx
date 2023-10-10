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
        console.error("Error al obtener los equipos:", error);
      }
    }

    fetchTeams();
  }, []);

  const handleDeleteTeam = async (id) => {
    try {
      await TeamServices.deleteTeam(id);
    } catch (error) {
      console.error("Error al eliminar el equipo:", error);
    }
  };

  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[70vh] overflow-y-auto">
        {teams.map((team) => (
          <TeamDetails
            key={team.id}
            team={team}
            members={members}
            onDelete={() => handleDeleteTeam(team.id)}
          />
        ))}
      </div>

      <div className="flex gap-2">
        <Button
          variant="primary"
          disabled
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
