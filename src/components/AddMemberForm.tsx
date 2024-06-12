"use client";
import React from "react";
import { SearchInput } from "@/common";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TeamMember } from "@/types";

interface AddMemberFormProps {
  members: TeamMember[];
  selectedMember?: TeamMember | null;
  handleSelectedMembers: (member: TeamMember | null) => void;
}

export const AddMemberForm = observer(function ({
  members = [],
  selectedMember,
  handleSelectedMembers,
}: AddMemberFormProps) {
  return (
    <section className="flex flex-col gap-6">
      <div>
        <SearchInput placeholder="Search Member" />
        <div className="flex flex-col gap-3 mt-3">
          <div
            className={`flex gap-2 items-center py-2 px-4 border cursor-pointer rounded-md transition-all duration-300 hover:bg-hoverBlue ${
              selectedMember === null ? "bg-hoverBlue" : ""
            }`}
            onClick={() => handleSelectedMembers(null)}
          >
            <div className="flex gap-2">
              <p className="text-black font-bold">None</p>
            </div>
          </div>
          {members.map((member) => (
            <div
              className={`flex gap-2 items-center py-2 px-4 border cursor-pointer rounded-md transition-all duration-300 hover:bg-hoverBlue ${
                member.email === selectedMember?.email ? "bg-hoverBlue" : ""
              } `}
              key={member._id}
              onClick={() => handleSelectedMembers(member)}
            >
              <div className="flex gap-2">
                <p className="text-black font-bold">
                  {member.firstName} {member.lastName}
                </p>
                <span className="text-dark-grey">{member.team}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
