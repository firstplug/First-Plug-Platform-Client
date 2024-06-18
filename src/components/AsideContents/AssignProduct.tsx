"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useEffect, useState } from "react";
import { TeamMember, Product } from "@/types";
import { observer } from "mobx-react-lite";

export const AssignProduct = observer(() => {
  const {
    members: { members },
    aside: { setAside },
    products: {
      currentProduct,
      currentMember,
      reassignProduct,
      getProductForAssign,
    },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [reassignFilteredMembers, setReassignFilteredMembers] = useState<
    TeamMember[]
  >([]);
  const [assignFilteredMembers, setAssignFilteredMembers] = useState<
    TeamMember[]
  >([]);

  useEffect(() => {
    if (
      currentProduct?.assignedEmail === "" ||
      currentProduct?.assignedMember === ""
    ) {
      setAssignFilteredMembers(members);
    } else if (members && currentMember) {
      setReassignFilteredMembers(
        members.filter((member) => member.email !== currentMember.email)
      );
    }
  }, [members, currentMember, currentProduct]);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Members</span>
        <span>
          (
          {currentProduct?.assignedEmail === "" ||
          currentProduct?.assignedMember === ""
            ? assignFilteredMembers.length
            : reassignFilteredMembers.length}
          )
        </span>
      </div>

      <AddMemberForm
        selectedMember={member}
        handleSelectedMembers={handleSelectedMembers}
        members={
          currentProduct?.assignedEmail === "" ||
          currentProduct?.assignedMember === ""
            ? assignFilteredMembers
            : reassignFilteredMembers
        }
        aside={setAside}
        currentProduct={currentProduct}
        currentMember={currentMember}
      />
    </div>
  );
});
