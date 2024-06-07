"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { observer } from "mobx-react-lite";
import { BarLoader } from "@/components/Loader/BarLoader";

export default observer(function MyTeam() {
  const {
    members: { members, fetchingMembers },
  } = useStore();

  return (
    <PageLayout>
      {fetchingMembers ? (
        <BarLoader />
      ) : members.length ? (
        <DataTeam />
      ) : (
        <EmptyTeam />
      )}
    </PageLayout>
  );
});
