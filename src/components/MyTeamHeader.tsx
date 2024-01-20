"use client";
import { CircleMemberImg } from "@/common";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import React from "react";

export const MyTeamHeader = observer(function () {
  const {
    members: { members },
  } = useStore();
  return (
    <header className="flex justify-between items-center  ">
      <h1 className="text-2xl text-black font-semibold">My Team</h1>
      <div className="flex">
        {members.slice(0, 3).map((member) => (
          <CircleMemberImg member={member} key={member._id} />
        ))}
        {members.length > 2 && (
          <div className="h-[3rem] w-[3rem] grid place-items-center bg-white rounded-full -ml-[1.75rem] border-white border z-20 ">
            <p className="text-black font-medium">
              + {members.slice(3).length}
            </p>
          </div>
        )}
      </div>
    </header>
  );
});
