"use client";
import { MyTeamActions, MyTeamViewHeader, TeamMembers } from "@/components";
export default function DataTeam() {
  return (
    <div className="flex flex-col gap-4 w-full h-full  relative">
      <MyTeamViewHeader />
      <hr />
      <MyTeamActions />
      <TeamMembers display="table" />
    </div>
  );
}
