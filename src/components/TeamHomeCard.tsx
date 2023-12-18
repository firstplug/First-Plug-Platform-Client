"use client";
import { AddIcon } from "@/common/Icons";
import { JoinerRow, CustomLink, CircleMemberImg } from "@/common";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { MyTeamHeader } from "./MyTeamHeader";

interface TeamCardProps {
  className?: string;
}

export const TeamHomeCard = observer(function ({ className }: TeamCardProps) {
  const {
    members: { members },
  } = useStore();
  return (
    <div className={`flex h-full ${className || ""}`}>
      <div className=" h-full  flex flex-col justify-between w-1/3 mx-2 px-4 py-6 rounded-lg bg-light-grey">
        <MyTeamHeader />
        <div className="flex gap-2 items-center w-[30%]">
          <h1 className="text-[6rem] font-bold text-black font-montserrat">
            {members.length}
          </h1>
          <span className="text-dark-grey  text-[1.2rem]">Team members</span>
        </div>
        <div>
          <CustomLink
            href={"/home/addTeam"}
            size={"small"}
            className={
              "rounded-md w-full justify-center text-xl py-4  border border-blue text-blue flex"
            }
          >
            <AddIcon strokeWidth={1.5} /> Add Team Member
          </CustomLink>
        </div>
      </div>
      <div className=" h-full  flex flex-col justify-top  w-2/3 mx-2">
        <div>
          <h1 className="text-2xl text-black font-semibold">New Joiners</h1>
        </div>
        <div className="flex flex-col overflow-y-auto max-h-[20rem] min-h-[20rem] ">
          {members.map((member) => (
            <JoinerRow key={member._id} joiner={member} />
          ))}
        </div>
      </div>
    </div>
  );
});
