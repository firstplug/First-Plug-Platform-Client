"use client";
import { observer } from "mobx-react-lite";
import TableTeam from "@/components/TableTeam";
import GridTeam from "./GridTeam";
import { useTeamMemberStore } from "@/models/teamMeber.store";

export default observer(function TeamMembers({ display }) {
  const STORE_TEAM_MEMBERS = useTeamMemberStore();

  return (
    <section className="flex flex-col gap-4">
      {display === "grid" ? (
        <GridTeam members={STORE_TEAM_MEMBERS.members} />
      ) : (
        <TableTeam members={STORE_TEAM_MEMBERS.members} />
      )}
    </section>
  );
});
