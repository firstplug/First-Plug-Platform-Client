"use client";
import React, { useState } from "react";
import { Button } from "@/common";
import { Memberservices, TeamServices } from "../services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { Team } from "@/types/teams";
import { TeamDetails } from ".";
import { TeamMember } from "@/types";

function transformData(members, teams) {
  const teamMap = teams.reduce((acc, team) => {
    acc[team._id] = team;
    return acc;
  }, {});

  const transformedMembers = members.map((member) => ({
    ...member,
    team: teamMap[member.team]?._id || undefined,
  }));

  return { members: transformedMembers, teams };
}

interface EditTeamsAsideDetailsProps {
  className?: string | "";
  members?: TeamMember[];
}

export const EditTeamsAsideDetails = observer(function ({
  className,
  members,
}: EditTeamsAsideDetailsProps) {
  const {
    teams: { setTeams, teams, updateTeam },
    alerts: { setAlert },
    members: { setMembers },
    aside: { setAside },
  } = useStore();

  const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
  const [newName, setNewName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState<TeamMember[]>([]);

  const handleCheckbox = (team: Team) => {
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

  const handleDeleteSelectedTeams = async () => {
    try {
      for (const team of selectedTeams) {
        const membersWithTeam = await Memberservices.getAllMembersByTeam(
          team._id
        );
        for (const member of membersWithTeam) {
          member.team = null;
          await Memberservices.updateMember(member._id, member);
        }
      }

      await TeamServices.bulkDeleteTeams(selectedTeams.map((team) => team._id));

      const updatedMembers = await Memberservices.getAllMembers();
      const updatedTeams = await TeamServices.getAllTeams();
      const { members: transformedMembers, teams: transformedTeams } =
        transformData(updatedMembers, updatedTeams);

      setMembers(transformedMembers);
      setTeams(transformedTeams);

      setAlert("deleteTeam");
      setSelectedTeams([]);
    } catch (error) {
      setAlert("errorDeleteTeam");
    }
  };

  const handleUpdateTeam = async () => {
    try {
      const teamToUpdate = selectedTeams[0];
      const updatedTeam = { ...teamToUpdate, name: newName };

      await TeamServices.updateTeam(updatedTeam._id, updatedTeam);
      const memberUpdates = selectedMembers.map((member) =>
        TeamServices.associateTeamToMember(updatedTeam._id, member._id)
      );
      await Promise.all(memberUpdates);

      updateTeam(updatedTeam);
      const updatedTeams = await TeamServices.getAllTeams();
      setTeams(updatedTeams);
      const updatedMembers = await Memberservices.getAllMembers();
      const { members: transformedMembers, teams: transformedTeams } =
        transformData(updatedMembers, updatedTeams);
      setMembers(transformedMembers);
      setTeams(transformedTeams);
      setAlert("updateTeam");
      setAside(undefined);
    } catch (error) {
      setAlert("errorUpdateTeam");
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
            showDetails={selectedTeams.some(
              (selected) => selected._id === team._id
            )}
            setNewName={setNewName}
            setSelectedMembers={setSelectedMembers}
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
        <Button
          variant="primary"
          size="big"
          className="flex-grow rounded-md"
          onClick={handleUpdateTeam}
        >
          Save
        </Button>
      </div>
    </div>
  );
});
