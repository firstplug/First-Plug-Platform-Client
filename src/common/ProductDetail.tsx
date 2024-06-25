"use client";
import React, { useState } from "react";
import { Product, TeamMember } from "@/types";
import { ProductImage } from "./ProductImage";
import PrdouctModelDetail from "./PrdouctModelDetail";
import { useStore } from "@/models";
import { SearchInput } from "./SearchInput";
import { Button } from "./Button";
import { ArrowDown } from "lucide-react";

interface ProductDetailProps {
  product: Product;
  className?: string;
  isChecked?: boolean;
  isRelocating?: boolean;
  handleSelect?: (productId: Product) => void;
}
function MembersList({ product }: { product: Product }) {
  const {
    members: { members },
  } = useStore();
  const [selectedMember, setSelectedMember] = useState<TeamMember>();
  const [searchedMembers, setSearchedMembers] = useState<TeamMember[]>(members);
  const handleSearch = (query: string) => {
    setSearchedMembers(
      members.filter(
        (member) =>
          member.firstName.toLowerCase().includes(query.toLowerCase()) ||
          member.lastName.toLowerCase().includes(query.toLowerCase()) ||
          member.email.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleRelocate = () => {};
  return (
    <section className="flex flex-col gap-2 ">
      <SearchInput placeholder="Search Member" onSearch={handleSearch} />

      <div className="flex flex-col gap-2 ">
        {members.map((member) => (
          <div
            className={`flex gap-2 items-center py-2 px-4 border cursor-pointer rounded-md transition-all duration-300 hover:bg-hoverBlue `}
            key={member._id}
            onClick={handleRelocate}
          >
            <div className="flex gap-2">
              <p className="text-black font-bold">
                {member.firstName} {member.lastName}
              </p>
              <span className="text-dark-grey">
                {typeof member.team === "string"
                  ? member.team
                  : member.team?.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductDetail({
  product,
  className = "",
  handleSelect,
  isChecked = false,
  isRelocating = false,
}: ProductDetailProps) {
  const [showList, setShowList] = useState(false);
  const toggleList = () => setShowList(!showList);
  return (
    <div
      className={`relative flex flex-col gap-2 border rounded-sm p-2 mr-2 text-black mb-2 ${className} `}
    >
      <div className="flex items-center  gap-2 ">
        {handleSelect && (
          <input
            type="checkbox"
            onChange={() => handleSelect(product)}
            checked={isChecked}
          />
        )}
        <section className="flex gap-2 items-start">
          <div className="flex gap-2 items-start">
            <ProductImage category={product.category} />
            <span className="font-semibold">{product.category}</span>
          </div>

          <hr />

          <div className="flex gap-2 items-center">
            <PrdouctModelDetail product={product} />
          </div>
        </section>
        {isRelocating && (
          <Button
            variant="outline"
            onClick={toggleList}
            className="text-black absolute right-0"
          >
            <ArrowDown
              className={`${
                showList ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
            />
          </Button>
        )}
      </div>
      {isRelocating && showList && <MembersList product={product} />}
    </div>
  );
}
