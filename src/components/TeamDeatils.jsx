"use client";
import Button from "@/common/Button";
import { AddIcon, DropDownArrow, TrashIcon } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import React, { useState } from "react";
import TeamInfo from "./TeamInfo";

export default function TeamDeatils({ team, className = "", members }) {
  const [showDeatils, setShowDeatils] = useState(false);

  const filterMembembers = members.filter(
    (member) => member.team.toLowerCase() === team.toLowerCase()
  );
  return (
    <section className={` ${className} border rounded-md p-3 `}>
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <input type="checkbox" />
          <TeamCard team={team} />
        </div>

        <Button
          className={"cursor-pointer ${}"}
          onClick={() => setShowDeatils(!showDeatils)}
        >
          <DropDownArrow
            className={`${
              showDeatils ? "rotate-180 " : " rotate-360"
            } transition-all duration-300`}
          />
        </Button>
      </div>

      {showDeatils && (
        <TeamInfo
          filterMembembers={filterMembembers}
          members={members}
          team={team}
        />
      )}
    </section>
  );
}
