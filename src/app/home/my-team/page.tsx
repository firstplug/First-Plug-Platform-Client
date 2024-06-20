"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { observer } from "mobx-react-lite";
import { BarLoader } from "@/components/Loader/BarLoader";
import { useEffect } from "react";
import { Memberservices, TeamServices } from "@/services";

export default observer(function MyTeam() {
  const {
    members: {
      members,
      fetchingMembers,
      setFetchMembers,
      setMembers,
      setTeams,
    },
    teams: { fetchTeams },
  } = useStore();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setFetchMembers(true);
        const [membersResponse, teamsResponse] = await Promise.all([
          Memberservices.getAllMembers(),
          TeamServices.getAllTeams(),
        ]);

        setMembers(membersResponse.members);
        setTeams(teamsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetchMembers(false);
      }
    };

    fetchAllData();
  }, [setFetchMembers, setMembers, setTeams]);

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
