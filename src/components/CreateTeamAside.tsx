import React, { useState, ReactNode } from "react";
import Button from "@/common/Button";
import AddMemberForm from "./AddMemberForm";
import { TeamServices } from "../services/team.services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { TeamMemberServices } from "@/services/teamMember.services";

interface CreateTeamAsideProps {
  className?: string;
  members: string[];
  closeModal: () => void;
}

export default observer(function CreateTeamAside({
  className = "",
  members,
  closeModal,
}: CreateTeamAsideProps) {
  const store = useStore();
  const [teamName, setTeamName] = useState<string>(""); 

  const [selectedMembers, setSelectedMembers] = useState<any[]>([]);

  const handleCreateTeam = async () => {
    try {
      const newTeam = {
        name: teamName,
        teamMember: selectedMembers,
      };

      TeamServices.createTeam(newTeam).then((res) => {
        TeamServices.getAllTeams().then((res) => {
          store.setTeams(res);
        });
        TeamMemberServices.getAllMembers().then((res) => {
          store.setMembers(res.data);
        });
      });

      closeModal();
    } catch (error) {
      console.error("Error creating team:", error);
    }
  };

  const handleSelectedMembers = (member: any) => {
    setSelectedMembers((prevSelectedMember) => {
      const isSelected = prevSelectedMember.some(
        (selected) => selected._id === member._id
      );

      if (isSelected) {
        return prevSelectedMember.filter(
          (selected) => selected._id !== member._id
        );
      } else {
        return [...prevSelectedMember, member];
      }
    });
  };

  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2 h-[60vh] overflow-y-auto">
        <div className="flex flex-col">
          <span className="text-dark-grey">Team Name</span>

          <input
            type="text"
            className="border-2 rounded-xl p-2 flex-grow w-full"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Members</span>
            <span>({members.length})</span>
          </div>

          <AddMemberForm
            handleSelectedMembers={handleSelectedMembers}
            members={members}
          />
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="big"
          className="flex-grow rounded-md"
          onClick={() => closeModal()}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="big"
          className="flex-grow rounded-md"
          onClick={handleCreateTeam}
        >
          Save
        </Button>
      </div>
    </div>
  );
});