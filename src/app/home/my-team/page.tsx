"use client";
import { Layout } from "@/common";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";

export default function MyTeam() {
  const {
    members: { members },
  } = useStore();
  return (
    <Layout className="border shadow-sm border-border rounded-md flex-grow grid place-items-center  ">
      {members.length ? <DataTeam /> : <EmptyTeam />}
    </Layout>
  );
}
