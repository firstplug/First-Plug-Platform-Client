"use client";
import {
  AddIcon,
  Button,
  GridLayoutIcon,
  PenIcon,
  TableDisplayIcon,
  TeamCard,
} from "@/common";
import { FilterModal } from "./FilterModal";
import { useStore } from "@/models";
import { AsideType, DisplayView } from "@/types";
import { observer } from "mobx-react-lite";

interface MyTeamActionsProps {}
export const MyTeamActions = observer(function ({}: MyTeamActionsProps) {
  const {
    teams: { teams },
    aside: { setAside },
    members: { teamFilterItems, filterMembersByTeam, setFilter },
  } = useStore();
  const handleAside = (type: AsideType) => {
    setAside(type);
  };
  // const Icon = display === "grid" ? GridLayoutIcon : TableDisplayIcon;

  return (
    <div className="w-full flex justify-between   h-[6%]  gap-2  ">
      <div className="flex gap-2 items-center ">
        <FilterModal
          title="Filter By Teams"
          items={teams.map((t) => t.toString())}
          handleFilter={setFilter}
        />
        <div className="flex gap-4 items-center  ">
          <span className="font-semibold text-black opacity-70">
            ({filterMembersByTeam.length})
          </span>
          <div className="flex items-center gap-1  p-2 flex-grow ">
            {teamFilterItems.map((team, i) => (
              <TeamCard team={team} key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <Button
          body="Create Team"
          variant={"text"}
          icon={<AddIcon />}
          className={"p-2 text-sm rounded-md"}
          onClick={() => handleAside("NewTeam")}
        />
        <Button
          body="Edit Team"
          variant={"text"}
          disabled={teams.length === 0}
          icon={<PenIcon />}
          className={"p-2 text-sm rounded-md"}
          onClick={() => handleAside("EditTeam")}
        />
        {/* <span className="text-gray-400"> |</span>

        <div className="flex gap-2">
          <Button onClick={toggleView} variant="text">
            <Icon className={"text-black hover:shadow-md"} />
          </Button>
        </div> */}
      </div>
    </div>
  );
});
