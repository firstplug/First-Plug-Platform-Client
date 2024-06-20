"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { observer } from "mobx-react-lite";
import { BarLoader } from "@/components/Loader/BarLoader";
import { useEffect } from "react";
import { Memberservices, TeamServices } from "@/services";

const transformData = (members, teams) => {
  const teamMap = teams.reduce((acc, team) => {
    acc[team._id] = team;
    return acc;
  }, {});

  const transformedMembers = members.map((member) => ({
    ...member,
    team: teamMap[member.team._id]
      ? teamMap[member.team._id].name
      : member.team.name,
  }));
  return transformedMembers;
};

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

        const { members: membersResponse, teams: teamsResponse } =
          await Memberservices.getAllMembers();

        const transformedMembers = transformData(
          membersResponse,
          teamsResponse
        );

        setMembers(transformedMembers);
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
