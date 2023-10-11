"use client";
import Button from "@/common/Button";
import { DropDownArrow } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import { useState } from "react";
import TeamInfo from "./TeamInfo";

export default function TeamDeatils({
  team,
  className = "",
  members,
  handleSelectedTeams,
}) {
  const [showDeatils, setShowDeatils] = useState(false);
  const [selectedTeam, setSelectedTeams] = useState([]);
  const filterMembembers = members.filter(
    (member) => member.team.toLowerCase() === team.name.toLowerCase()
  );

  return (
    <section className={` ${className} border rounded-md p-3 `}>
      <div className="flex justify-between items-center ">
        <div className="flex gap-2">
          <input type="checkbox" onChange={() => handleSelectedTeams(team)} />
          <TeamCard team={team.name} />
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
