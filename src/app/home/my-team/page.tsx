"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { observer } from "mobx-react-lite";
import { BarLoader } from "@/components/Loader/BarLoader";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

export default observer(function MyTeam() {
  const {
    members: { members, fetchingMembers },
  } = useStore();
  const { fetchMembers } = useFetch();
  useEffect(() => {
    fetchMembers();
  }, []);
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
