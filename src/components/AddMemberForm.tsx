"use client";
import React from "react";
import { SearchInput } from "@/common";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { TeamMember } from "@/types";
interface AddMemberFormProps {
  handleSelectedMembers: (member: TeamMember) => void;
}

export default observer(function AddMemberForm({
  handleSelectedMembers,
}: AddMemberFormProps) {
  const {
    members: { members },
  } = useStore();

  return (
    <section>
      <SearchInput placeholder="Search Member" />
      <div className="flex flex-col gap-3 mt-3">
        {members.map((member) => (
          <div className="flex gap-2 items-center" key={member._id}>
            <input
              type="checkbox"
              onChange={() => handleSelectedMembers(member)}
            />
            <div className="flex gap-2">
              <b className="text-black">
                {member.firstName} {member.lastName}
              </b>
              <span className="text-dark-grey">{member._id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
