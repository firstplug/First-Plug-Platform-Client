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
  } = useStore();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setFetchMembers(true);
        console.log("Fetching data...");

        const { members: membersResponse, teams: teamsResponse } =
          await Memberservices.getAllMembers();

        console.log("Members response:", membersResponse);
        console.log("Teams response:", teamsResponse);

        const transformedMembers = membersResponse.map((member) => ({
          ...member,
          team:
            typeof member.team === "object" && member.team._id
              ? member.team._id
              : member.team,
        }));

        console.log("Transformed members:", transformedMembers);

        setMembers(transformedMembers);
        setTeams(teamsResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setFetchMembers(false);
        console.log("Fetching completed.");
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
