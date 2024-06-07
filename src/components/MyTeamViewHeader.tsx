import { AddIcon, Button, CustomLink, UploadIcon } from "@/common";
import React from "react";

export function MyTeamViewHeader() {
  return (
    <div className="w-full flex  h-[6%]  justify-end gap-2 ">
      <CustomLink
        className={"rounded-md text-sm p-2 flex items-center gap-2"}
        variant={"secondary"}
        href="/home/my-team/addTeam"
      >
        <AddIcon /> Add Team Member
      </CustomLink>

      <Button
        body={"Load Team Member"}
        icon={<UploadIcon />}
        className={"rounded-md text-sm p-2"}
        variant={"primary"}
      />
    </div>
  );
}
