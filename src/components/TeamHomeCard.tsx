"use client";
import { AddIcon } from "@/common/Icons";
import { JoinerRow, CustomLink } from "@/common";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { MyTeamHeader } from "./MyTeamHeader";

export const TeamHomeCard = observer(function () {
  const {
    members: { members },
  } = useStore();
  return (
    <div className={`flex gap-2 p-2 w-full h-full border rounded-lg   `}>
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
          <AddIcon /> Add Team Member
        </CustomLink>
      </section>
      <section className="  flex   w-2/3 h-full  relative ">
        <div className=" flex flex-col gap-2 h-full w-full absolute">
          <h2 className="text-xl text-black font-semibold h-[10%]  p-0 m-0">
            New Joiners
          </h2>

          <div className="flex flex-col overflow-y-auto max-h-[85%] h-[85%] w-full   gap-1  bottom-0">
            {members.map((member) => (
              <JoinerRow key={member._id} joiner={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});
