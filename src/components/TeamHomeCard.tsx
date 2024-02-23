"use client";
import { AddIcon } from "@/common/Icons";
import { JoinerRow, CustomLink, CircleMemberImg } from "@/common";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { MyTeamHeader } from "./MyTeamHeader";

interface TeamCardProps {
  className?: string;
}

export const TeamHomeCard = observer(function ({
  className = "",
}: TeamCardProps) {
  const {
    members: { members },
  } = useStore();
  return (
    <div className={`flex gap-2 p-2 w-full h-full  ${className}  `}>
      <section className="  flex flex-col justify-between  w-1/3  p-4 rounded-lg bg-light-grey ">
        <MyTeamHeader />
        <div className="flex gap-4 items-center w-1/3 ">
          <h1 className="text-[4rem] font-bold text-black font-montserrat">
            {members.length}
          </h1>
          <span className="text-dark-grey  text-2xl">Team members</span>
        </div>
        <CustomLink
          href={"/home/addTeam"}
          size={"small"}
          className={
            " flex justify-center items-center rounded-md w-full   text-xl py-4  border border-blue text-blue "
          }
        >
          <AddIcon strokeWidth={1.5} /> Add Team Member
        </CustomLink>
      </section>
      <section className="   flex flex-col justify-top  w-2/3">
        <h2 className="text-2xl text-black font-semibold">New Joiners</h2>

        <div className="flex flex-col overflow-y-auto max-h-1/2 min-h-1/2 ">
          {members.map((member) => (
            <JoinerRow key={member._id} joiner={member} />
          ))}
        </div>
      </section>
    </div>
  );
});
