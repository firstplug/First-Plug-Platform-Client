"use client";
import Button from "@/common/Button";
import { AddIcon, IconX, TrashIcon } from "@/common/Icons";
import { useState } from "react";
import AddMemberForm from "./AddMemberForm";

export default function TeamInfo({ members, team, filterMembembers }) {
  const [showAddMember, setShowAddMember] = useState(false);
  return (
    <article className="flex flex-col justify-between  gap-4   w-[95%]  m-auto mt-2">
      <header className="flex flex-col gap-2  flex-grow ">
        <span className="text-grey">Team Name</span>
        <input
          type="text"
          value={team}
          className=" border-2 rounded-xl p-2 flex-grow w-full"
        />
      </header>

      <hr className="my-2 " />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Members</span>
          <span>({filterMembembers.length})</span>
        </div>
        {filterMembembers.map((member) => (
          <div
            className="border p-3  flex justify-between rounded-xl"
            key={member.id}
          >
            <div className="flex gap-2">
              <p className="text-black font-semibold">
                {member.name} {member.lastName}
              </p>
              <span className="text-dark-grey">{member.id}</span>
            </div>

            <TrashIcon className={"w-[1.2rem] text-error"} />
          </div>
        ))}
      </div>

      <hr className="my-2 " />

      <Button
        className="flex rounded-md  justify-between font-normal p-2 "
        onClick={() => setShowAddMember(!showAddMember)}
      >
        Add Members {!showAddMember ? <AddIcon /> : <IconX />}
      </Button>

      {showAddMember && <AddMemberForm members={members} />}
    </article>
  );
}
