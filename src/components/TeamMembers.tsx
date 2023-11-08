"use client";
import { observer } from "mobx-react-lite";
import TableTeam from "@/components/TableTeam";
import GridTeam from "./GridTeam";
import { useStore } from "@/models/root.store";

interface TeamMembersProps {
  display?: string;
}

export default observer(function TeamMembers({ display }: TeamMembersProps) {
  const {
    members: { members },
  } = useStore();
  return (
    <section className="flex flex-col gap-4">
      {display === "grid" ? <GridTeam members={members} /> : <TableTeam />}
    </section>
  );
});
