"use client";
import React from "react";
import { SearchInput } from "@/common";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TeamMember } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AddMemberFormProps {
  members: TeamMember[];
  handleSelectedMembers: (member: TeamMember) => void;
}

export const AddMemberForm = observer(function ({
  members = [],
  handleSelectedMembers,
}: AddMemberFormProps) {
  const {
    aside: { type },
  } = useStore();

  return (
    <section className="flex flex-col gap-6">
      <div>
        <SearchInput placeholder="Search Member" />
        <div className="flex flex-col gap-3 mt-3">
          {members.map((member) => (
            <div
              className="flex gap-2 items-center py-2 px-4 border cursor-pointer rounded-md transition-all duration-300 hover:bg-hoverBlue "
              key={member._id}
              onClick={() => handleSelectedMembers(member)}
            >
              <div className="flex gap-2">
                <p className="text-black font-bold">
                  {member.firstName} {member.lastName}
                </p>
                <span className="text-dark-grey">{member.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {type === "AssingProduct" && (
        <div className=" flex-col flex gap-2">
          <h2>Location</h2>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {["FP warehouse", "Our Office", "Employee"].map((location) => (
                <SelectItem value={location} key={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </section>
  );
});
