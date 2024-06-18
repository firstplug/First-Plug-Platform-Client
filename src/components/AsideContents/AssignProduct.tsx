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
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [showNoneOption, setShowNoneOption] = useState(false);

  useEffect(() => {
    console.log("Current Product (AssignProduct useEffect): ", currentProduct);
    console.log("Current Member (AssignProduct useEffect): ", currentMember);
    console.log("Members (AssignProduct useEffect): ", members);

    if (currentProduct) {
      if (
        currentProduct.assignedEmail === "" &&
        currentProduct.assignedMember === ""
      ) {
        setFilteredMembers(members);
        setShowNoneOption(false);
      } else {
        if (members && currentMember) {
          const reassignFilteredMembers = members.filter(
            (member) => member.email !== currentMember.email
          );
          setFilteredMembers(reassignFilteredMembers);
          console.log(
            "Filtered Members for Reassign: ",
            reassignFilteredMembers
          );
        }
        setShowNoneOption(true);
      }
    }
  }, [members, currentMember, currentProduct]);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <span>Members</span>
        <span>{filteredMembers.length}</span>
      </div>

      <AddMemberForm
        selectedMember={member}
        handleSelectedMembers={handleSelectedMembers}
        members={filteredMembers}
        aside={setAside}
        currentProduct={currentProduct}
        currentMember={currentMember}
        showNoneOption={showNoneOption}
      />
    </div>
  );
});

{
  /* <AddMemberForm
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
        showNoneOption={
          currentProduct?.assignedEmail !== "" &&
          currentProduct?.assignedMember !== ""
        }
      /> */
}
