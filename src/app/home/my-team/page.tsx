"use client";
import { Layout, Button, CustomLink, EmptyCard } from "@/common";
import { AddIcon, UpLoadIcon } from "@/common/Icons";
import { useStore } from "@/models/root.store";
import DataTeam from "./DataTeam";
import EmptyTeam from "./EmptyTeam";

export default function MyTeam() {
  const {
    aside: { setAside },
    members: { members },
  } = useStore();
  return (
    <Layout className="border shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      {members.length ? <DataTeam /> : <EmptyTeam />}
    </Layout>
  );
}
