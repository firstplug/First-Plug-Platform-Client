"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState } from "react";
import { TeamMember, Product } from "@/types";
import { observer } from "mobx-react-lite";

export const AssignProduct = observer(() => {
  const {
    members: { members, selectedMemberEmail },
    aside: { setAside },
    products: { currentProduct, currentMember, reassignProduct },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  const handleSave = async (data: Partial<Product>) => {
    try {
      await reassignProduct(currentProduct?._id, data);
      setAside(undefined);
    } catch (error) {
      console.error("Failed to reassign product", error);
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
        members={members}
        aside={setAside}
        currentProduct={currentProduct}
        currentMember={currentMember}
        // handleSave={handleSave}
      />
    </div>
  );
});
