"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { observer } from "mobx-react-lite";

export default observer(function MyTeam() {
  const {
    members: { members },
  } = useStore();

  return (
    <PageLayout>{members.length ? <DataTeam /> : <EmptyTeam />}</PageLayout>
  );
});
