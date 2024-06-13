"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState, useEffect } from "react";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";

export const AssignProduct = observer(() => {
  const {
    members: { members, selectedMemberEmail },

    aside: { setAside },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Members</span>
        <span>({members.length})</span>
      </div>

      <AddMemberForm
        selectedMember={member}
        handleSelectedMembers={handleSelectedMembers}
        members={members.filter((memb) => memb.email !== selectedMemberEmail)}
      />
    </div>
  );
});
