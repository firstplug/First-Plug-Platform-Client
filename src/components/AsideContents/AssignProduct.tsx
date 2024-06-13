"use client";
import { useStore } from "@/models";
import { AddMemberForm } from "../AddMemberForm";
import { useState, useEffect, use } from "react";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";
import { Product } from "@/types";

export const AssignProduct = observer(() => {
  const {
    members: { members, selectedMemberEmail },
    products: { productToEdit, setProductIdToEdit, productById },
    aside: { setAside },
  } = useStore();
  const [member, setMember] = useState<TeamMember | null>(null);
  const [product, setProduct] = useState<Product | null>(null);

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

  useEffect(() => {
    if (productToEdit) {
      const product = productById(productToEdit);
      if (product) {
        setProduct(product);
        console.log("Product to edit", product);
      }
    }
  }, [productToEdit, productById]);

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
        productToEdit={product}
        setAside={setAside}
      />
    </div>
  );
});
