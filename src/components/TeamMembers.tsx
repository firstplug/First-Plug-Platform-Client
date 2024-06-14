"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { MembersTable } from "./Tables";

export var TeamMembers = observer(function TeamMembers() {
  const {
    members: { filterMembersByTeam, teamFilterItems, members },
  } = useStore();

  return (
    <section className="flex flex-col gap-4 w-full absolute  bottom-0 left-0 overflow-auto  h-[80%] ">
      {teamFilterItems.length > 0 && (
        <MembersTable members={filterMembersByTeam} />
      )}
      {teamFilterItems.length === 0 && <MembersTable members={members} />}
    </section>
  );
});
