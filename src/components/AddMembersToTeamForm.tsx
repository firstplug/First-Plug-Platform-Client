"use client";
import React, { useState, useEffect } from "react";
import { SearchInput } from "@/common";
import { TeamMember } from "@/types";
import { observer } from "mobx-react-lite";

interface AddMembersToTeamFormProps {
  members: TeamMember[];
  selectedMembers: TeamMember[];
  handleSelectedMembers: (member: TeamMember[]) => void;
}

export const AddMembersToTeamForm = observer(function ({
  members = [],
  selectedMembers = [],
  handleSelectedMembers,
}: AddMembersToTeamFormProps) {
  const [searchedMembers, setSearchedMembers] = useState<TeamMember[]>(members);

  useEffect(() => {
    setSearchedMembers(members);
  }, [members]);

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

  const toggleMemberSelection = (member: TeamMember) => {
    const isSelected = selectedMembers.some(
      (selected) => selected._id === member._id
    );
    let updatedSelectedMembers;
    if (isSelected) {
      updatedSelectedMembers = selectedMembers.filter(
        (selected) => selected._id !== member._id
      );
    } else {
      updatedSelectedMembers = [...selectedMembers, member];
    }
    handleSelectedMembers(updatedSelectedMembers);
  };

  return (
    <section className="flex flex-col gap-6 h-full">
      <SearchInput placeholder="Search Member" onSearch={handleSearch} />
      <div className="flex flex-col gap-3 mt-3 flex-grow overflow-y-auto">
        {searchedMembers.map((member) => {
          const isSelected = selectedMembers.some(
            (selected) => selected._id === member._id
          );
          return (
            <div
              className={`flex gap-2 items-center py-2 px-4 border cursor-pointer rounded-md transition-all duration-300 hover:bg-hoverBlue ${
                isSelected && "bg-hoverBlue"
              }`}
              key={member._id}
              onClick={() => toggleMemberSelection(member)}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggleMemberSelection(member)}
                className="form-checkbox"
              />
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
          );
        })}
      </div>
    </section>
  );
});
