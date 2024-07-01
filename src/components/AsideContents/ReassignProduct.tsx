"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useEffect, useState } from "react";
import { TeamMember, Product } from "@/types";
import { observer } from "mobx-react-lite";

export const ReassignProduct = observer(() => {
  const {
    members: { members },
    products: { currentProduct, currentMember, getProductForReassign },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>([]);
  const [showNoneOption, setShowNoneOption] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!currentProduct || !currentProduct._id) return;
      setLoading(true);
      setError(null);
      try {
        await getProductForReassign(currentProduct._id);
      } catch (err) {
        console.error("Failed to get product for reassign", err);
        setError("Failed to load product data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [getProductForReassign, currentProduct]);

  useEffect(() => {
    if (members.length > 0 && currentProduct) {
      if (currentProduct.assignedEmail && !currentMember) {
        setFilteredMembers(members);
        setShowNoneOption(true);
      } else {
        const reassignFilteredMembers = members.filter(
          (member) => member.email !== currentMember?.email
        );
        setFilteredMembers(reassignFilteredMembers);
        setShowNoneOption(true);
      }
    }
  }, [members, currentMember, currentProduct]);

  const handleSelectedMembers = (selectedMember: TeamMember | null) => {
    setMember(selectedMember);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-2 h-full">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <AddMemberForm
          selectedMember={member}
          handleSelectedMembers={handleSelectedMembers}
          members={filteredMembers}
          currentProduct={currentProduct}
          currentMember={currentMember}
          showNoneOption={showNoneOption}
        />
      )}
    </div>
  );
});
