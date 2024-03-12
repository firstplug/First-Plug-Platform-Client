"use client";
import React, { useState } from "react";

import { MyTeamActions, MyTeamViewHeader, TeamMembers } from "@/components";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { DisplayView } from "@/types";
export default observer(function DataTeam() {
  const {
    aside: { setAside },
    teams: { teams },
  } = useStore();
  const [display, setDisplay] = useState<DisplayView>("grid");

  const toggleView = () =>
    setDisplay((prev) => (prev === "grid" ? "table" : "grid"));
  return (
    <div className="flex flex-col gap-4 w-full h-full  relative">
      <MyTeamViewHeader />
      <hr />
      <MyTeamActions toggleView={toggleView} display={display} />
      <TeamMembers display={display} />
    </div>
  );
});
