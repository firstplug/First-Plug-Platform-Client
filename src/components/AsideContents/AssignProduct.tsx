"use client";

import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState } from "react";
import { TeamMember } from "@/types";

export function AssignProduct() {
  const {
    members: { members, selectedMemberEmail },
  } = useStore();
  const [member, setMember] = useState<TeamMember>();

  const handleSelectedMembers = (member: TeamMember) => {
    setMember(member);
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
}
