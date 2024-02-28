"use client";
import { PageLayout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";
import { useEffect } from "react";
import { Memberservices } from "@/services";
export default function MyTeam() {
  const {
    members: { members, setMembers },
  } = useStore();

  useEffect(() => {
    Memberservices.getAllMembers().then((res) => {
      setMembers(res);
    });
  }, []);
  return (
    <PageLayout>{members.length ? <DataTeam /> : <EmptyTeam />}</PageLayout>
  );
}
