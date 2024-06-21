"use client";
import React, { useState } from "react";
import { AddIcon, Button, IconX } from "@/common";
import { Memberservices, TeamServices } from "../services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { Team } from "@/types/teams";
import { AddMembersToTeamForm } from "./AddMembersToTeamForm";
import { TeamDetails } from ".";
import { TeamMember } from "@/types";

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
      const memberUpdates = selectedTeams.map(async (team) => {
        const membersWithTeam = await Memberservices.getAllMembersByTeam(
          team._id
        );
        const memberUpdates = membersWithTeam.map(async (member) => {
          member.team = undefined;
          await Memberservices.updateMember(member._id, member);
        });
        await Promise.all(memberUpdates);
      });
      await Promise.all(memberUpdates);

      await Promise.all(
        selectedTeams.map((team) => TeamServices.deleteTeam(team._id))
      );

      const { members: updatedMembers } = await Memberservices.getAllMembers();
      setMembers(updatedMembers);

      const updatedTeams = await TeamServices.getAllTeams();
      setTeams(updatedTeams);
      setAlert("deleteTeam");
      setSelectedTeams([]);
    } catch (error) {
      console.error("Failed to delete teams:", error);
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
      const { members: updatedMembers } = await Memberservices.getAllMembers();
      setMembers(updatedMembers);

      setAlert("updateTeam");
      setAside(undefined);
    } catch (error) {
      console.error("Failed to update team:", error);
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
