"use client";

import Layout from "@/common/Layout";
import Button from "@/common/Button";
import { AddIcon, UpLoadIcon } from "@/common/Icons";
import CustomLink from "@/common/CustomLink";

import EmptyCard from "@/common/EmptyCard";
import { useStore } from "@/models/root.store";

export default function MyTeam() {
  const { aside } = useStore();
  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      <EmptyCard
        imageBottom="/girl.svg"
        paragraph="You havnet't loaded any  employees yet."
        altImage="Girl"
      >
        <div className="flex gap-2 ">
          <Button
            body="Load Team Members"
            icon={<AddIcon />}
            onClick={() => {
              aside.setAside("loadStock");
              aside.openAside();
            }}
            variant="secondary"
            size="big"
            className="rounded-md"
          />
          <CustomLink
            variant="primary"
            size="big"
            className="rounded-md flex gap-2"
            href="#"
          >
            <UpLoadIcon /> Add Team Memeber
          </CustomLink>
        </div>
      </EmptyCard>
    </Layout>
  );
}
