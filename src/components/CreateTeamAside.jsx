import Button from "@/common/Button";
import Input from "@/common/Input";
import SearchInput from "@/common/SearchInput";
import React from "react";
import AddMemberForm from "./AddMemberForm";

export default function CreateTeamAside({ className = "", teams, members }) {
  return (
    <div className={` ${className} flex flex-col justify-between h-full `}>
      <div className="flex flex-col gap-2   h-[60vh] overflow-y-auto">
        <div className="flex flex-col">
          <span className="text-dark-grey">Team Name</span>
          <input
            type="text"
            className=" border-2 rounded-xl p-2 flex-grow w-full"
          />
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Members</span>
            <span>({members.length})</span>
          </div>

          <AddMemberForm members={members} />
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="secondary" size="big" className="flex-grow rounded-md">
          Cancel
        </Button>
        <Button variant="primary" size="big" className="flex-grow rounded-md">
          Save
        </Button>
      </div>
    </div>
  );
}
