import React from "react";
import SearchInput from "@/common/SearchInput";
import { useStore } from "@/models/root.store";

interface Member {
  _id: string;
  firstName: string;
  lastName: string;
}

interface AddMemberFormProps {
  handleSelectedMembers: (member: Member) => void;
  members: string[];
}

export default function AddMemberForm({ handleSelectedMembers }: AddMemberFormProps) {
  const store = useStore();

  return (
    <section>
      <SearchInput placeholder="Search Member" />
      <div className="flex flex-col gap-3 mt-3">
        {store.members.map((member: Member) => (
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
}