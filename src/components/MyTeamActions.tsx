import {
  AddIcon,
  Button,
  DropFilter,
  GridLayoutIcon,
  PenIcon,
  TableDisplayIcon,
} from "@/common";
import React from "react";
import { FilterModal } from "./FilterModal";
import { useStore } from "@/models";
import { AsideType, DisplayView } from "@/types";

interface MyTeamActionsProps {
  toggleView: () => void;
  display: DisplayView;
}
export function MyTeamActions({ toggleView, display }: MyTeamActionsProps) {
  const {
    teams: { teams },
    aside: { setAside },
  } = useStore();
  const handleAside = (type: AsideType) => {
    setAside(type);
  };
  const Icon = display === "grid" ? GridLayoutIcon : TableDisplayIcon;

  return (
    <div className="w-full flex justify-between   h-[6%]  gap-2  ">
      <div>
        <DropFilter contentText={"Filter by team:"}>
          <FilterModal
            array={teams.map((team) => ({ id: team._id, name: team.name }))}
          />
        </DropFilter>
      </div>
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
  );
}
