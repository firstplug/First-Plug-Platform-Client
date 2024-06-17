"use client";
import { AddIcon, Button, PenIcon, TeamCard } from "@/common";
import { FilterModal } from "./FilterModal";
import { useStore } from "@/models";
import { AsideType } from "@/types";
import { observer } from "mobx-react-lite";
import { Table } from "@tanstack/react-table";
import { MyTeamViewHeader } from "./MyTeamViewHeader";

interface MyTeamActionsProps<TData> {
  table: Table<TData>;
}
export const MyTeamActions = observer(function <TData>({
  table,
}: MyTeamActionsProps<TData>) {
  const {
    teams: { teams },
    aside: { setAside },
    members: { teamFilterItems, filterMembersByTeam, setFilter },
  } = useStore();
  const handleAside = (type: AsideType) => {
    setAside(type);
  };

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <MyTeamViewHeader />
      <div className="w-full flex justify-between  items-center    gap-2  ">
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
              {teamFilterItems.map((team, i) => {
                return <TeamCard team={team} key={i} />;
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center ">
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
        </div>
      </div>
    </section>
  );
});
