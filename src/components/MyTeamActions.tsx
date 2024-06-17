"use client";
import { AddIcon, Button, PenIcon, TeamCard } from "@/common";
import { FilterModal } from "./FilterModal";
import { useStore } from "@/models";
import { AsideType } from "@/types";
import { observer } from "mobx-react-lite";
import { Table } from "@tanstack/react-table";
import { MyTeamViewHeader } from "./MyTeamViewHeader";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
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

  // table.getColumn("firstName")?.setFilterValue(event.target.value);

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <MyTeamViewHeader />

      <div className="w-full flex justify-between  items-center    gap-2  ">
        <div className="flex gap-2 items-center ">
          <Select
            onValueChange={(value) => {
              if (value === "all") {
                table.getColumn("team").setFilterValue(null);
              }
              table.getColumn("team")?.setFilterValue(value);
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                {teams.map((t) => (
                  <SelectItem value={t} key={t}>
                    <TeamCard team={t} />
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
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
