"use client";
import React, { useState } from "react";
import Button from "@/common/Button";
import { AddIcon, IconX, TrashIcon } from "@/common/Icons";
import AddMemberForm from "./AddMemberForm";
import { TeamServices } from "@/services/team.services";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";

export default observer(function TeamInfo({ team, filterMembers }) {
  const store = useStore();
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showAddMember, setShowAddMember] = useState(false);

  const handleAddTeam = () => {
    selectedMembers.forEach((member) => {
      TeamServices.addToTeam(team._id, member._id).then((res) => {
        TeamServices.getAllTeams().then((res) => {
          store.setTeams(res);
        });
      });
    });
  };

  const handleDeleteMember = (member) => {
    TeamServices.deleteFromTeam(team._id, member._id).then((res) => {
      TeamServices.getAllTeams().then((res) => {
        store.setTeams(res);
      });
    });
  };

  const handleSelectedMembers = (member) => {
    setSelectedMembers((prevSelectedMember) => {
      const isSelected = prevSelectedMember.some(
        (selected) => selected._id === member._id
      );

      if (isSelected) {
        return prevSelectedMember.filter(
          (selected) => selected._id !== member._id
        );
      } else {
        return [...prevSelectedMember, member];
      }
    });
  };

  return (
    <article className="flex flex-col justify-between  gap-4   w-[95%]  m-auto mt-2">
      <header className="flex flex-col gap-2  flex-grow ">
        <span className="text-grey">Team Name</span>
        <input
          type="text"
          defaultValue={team.name}
          className=" border-2 rounded-xl p-2 flex-grow w-full"
        />
      </header>

      <hr className="my-2 " />

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <span>Members</span>
          <span>({filterMembers ? filterMembers.length : 0})</span>
        </div>
        {filterMembers &&
          filterMembers.map((member) => (
            <div
              className="border p-3 flex justify-between rounded-xl"
              key={member._id}
            >
              <div className="flex gap-2">
                <p className="text-black font-semibold">
                  {member.firstName} {member.lastName}
                </p>
                <span className="text-dark-grey">{member._id}</span>
              </div>
              <Button onClick={() => handleDeleteMember(member)}>
                <TrashIcon className={"w-[1.2rem] text-error"} />
              </Button>
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

      {showAddMember && (
        <div className="relative ">
          <AddMemberForm handleSelectedMembers={handleSelectedMembers} />
          <Button
            variant="primary"
            className="p-2 absolute right-0 bottom-0 rounded-md"
            onClick={handleAddTeam}
          >
            Add
          </Button>
        </div>
      )}
    </article>
  );
});
