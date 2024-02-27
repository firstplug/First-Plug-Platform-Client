"use client";
import React, { useEffect, useState } from "react";
import { Layout, Button, DropFilter, CustomLink } from "@/common";
import {
  AddIcon,
  UpLoadIcon,
  PenIcon,
  TableDisplayIcon,
  GridLayoutIcon,
} from "@/common/Icons";
import { FilterModal, MyTeamViewHeader, TeamMembers } from "@/components";
import { observer } from "mobx-react-lite";
import { TeamServices } from "@/services";
import { useStore } from "@/models";
import { AsideType, DisplayView } from "@/types";
export default observer(function DataTeam() {
  const {
    aside: { setAside },
    teams: { setTeams, teams },
  } = useStore();
  const [display, setDisplay] = useState<DisplayView>("grid");

  useEffect(() => {
    TeamServices.getAllTeams().then((res) => {
      setTeams(res);
    });
  }, [setTeams]);

  const handleAside = (type: AsideType) => {
    setAside(type);
  };
  const toggleView = () =>
    setDisplay((prev) => (prev === "grid" ? "table" : "grid"));
  const Icon = display === "grid" ? GridLayoutIcon : TableDisplayIcon;
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      <MyTeamViewHeader />
      <hr />
      <div className="w-full flex justify-between   gap-2  ">
        <DropFilter
          body={"Filter by team:"}
          className="rounded-md border font-medium"
        >
          <FilterModal
            array={teams.map((team) => ({ id: team._id, name: team.name }))}
          />
        </DropFilter>
        <div className="flex gap-2 items-center">
          <Button
            body="Create Team"
            variant={"text"}
            icon={<AddIcon className={"w-[1rem]"} />}
            className={"p-2 text-sm rounded-md"}
            onClick={() => handleAside("NewTeam")}
          />
          <Button
            body="Edit Team"
            variant={"text"}
            disabled={teams.length === 0}
            icon={<PenIcon className={"w-[1rem]"} />}
            className={"p-2 text-sm rounded-md"}
            onClick={() => handleAside("EditTeam")}
          />
          <span className="text-gray-400"> |</span>

          <div className="flex gap-2">
            <Button onClick={toggleView} variant="text">
              <Icon className={"text-black hover:shadow-md"} />
            </Button>
          </div>
        </div>
      </div>
      <TeamMembers display={display} />
    </div>
  );
});
