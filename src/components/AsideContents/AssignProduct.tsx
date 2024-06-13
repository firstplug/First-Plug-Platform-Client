"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState, useEffect } from "react";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";
import { Product } from "@/types";

export const AssignProduct = observer(() => {
  const {
    members: { members, selectedMemberEmail },
    products: { productToEdit },
    aside: { setAside },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (selectedMemberEmail) {
      console.log("selectedMemberEmail", selectedMemberEmail);
      const currentMember = members.find(
        (member) => member.email === selectedMemberEmail
      );
      setMember(currentMember || null);
      console.log("currentMember", currentMember);
    }
  }, [selectedMemberEmail, members]);

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
        productToEdit={productToEdit as any}
        setAside={setAside}
      />
    </div>
  );
});
