"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState, useEffect } from "react";
import { TeamMember } from "@/types";
import { Button } from "@/common";
import { observer } from "mobx-react-lite";

export const AssignProduct = observer(() => {
  const {
    members: { members, selectedMemberEmail },
    products: { selectedProduct, updateProduct },
    aside: { setAside },
  } = useStore();
  const [member, setMember] = useState<TeamMember>();

  useEffect(() => {
    if (selectedMemberEmail) {
      const currentMember = members.find(
        (member) => member.email === selectedMemberEmail
      );
      setMember(currentMember);
    }
  }, [selectedMemberEmail, members]);

  const handleSelectedMembers = (selectedMember: TeamMember) => {
    setMember(selectedMember);
  };

  const handleSave = async () => {
    if (selectedProduct) {
      await updateProduct(selectedProduct._id, {
        assignedMember: member ? `${member.firstName} ${member.lastName}` : "",
        assignedEmail: member ? member.email : "",
      });
    }
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
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="big"
          className="flex-grow rounded-md"
          onClick={() => setAside(undefined)}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          size="big"
          className="flex-grow rounded-md"
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
});
