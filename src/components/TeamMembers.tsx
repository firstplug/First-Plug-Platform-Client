"use client";
import { observer } from "mobx-react-lite";
import TableTeam from "@/components/TableTeam";
import GridTeam from "./GridTeam";
import { useStore } from "@/models/root.store";

interface TeamMembersProps {
  display?: "grid"
}

export default observer(function TeamMembers({ display } : TeamMembersProps) {
  const store = useStore();

  return (
    <section className="flex flex-col gap-4">
      {display === "grid" ? (
        <GridTeam members={[...store.members]} />
      ) : (
        <TableTeam members={[...store.members]} />
      )}
    </section>
  );
});
