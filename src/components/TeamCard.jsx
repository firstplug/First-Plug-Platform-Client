import Button from "@/common/Button";
import { AddIcon } from "@/common/Icons";
import { Row } from "@/common/JoinerRow";
import React from "react";
import user from "../../public/UserLogo.jpeg";

import team1 from "../../public/employees/Rectangle 459.png";
import team2 from "../../public/employees/Rectangle 460.png";
import team3 from "../../public/employees/Rectangle 461.png";
import team4 from "../../public/employees/Rectangle 462.png";
import Image from "next/image";

const team = [
  {
    name: "Francisco",
    lastname: "Villanueva",
    jobPosition: "dev",
    image: user,
  },
  {
    name: "Esteban ",
    lastname: "Rodriguez",
    jobPosition: "dev",
    image: user,
  },
  {
    name: "Agustin ",
    lastname: "Sandoval",
    jobPosition: "dev",
    image: user,
  },
  {
    name: "Braian",
    lastname: "Barrientos",
    jobPosition: "design",
    image: user,
  },
];
export default function TeamCard({ className }) {
  return (
    <div className={`flex h-full ${className}`}>
      <div className=" h-full  flex flex-col justify-between w-1/3 mx-2 px-4 py-6 rounded-lg bg-light-grey">
        <header className="flex justify-between items-center  ">
          <h1 className="text-2xl text-black font-semibold">My Team</h1>
          <div className="flex">
            <Image
              src={team1}
              className="h-[3rem] w-[3rem] rounded-full -ml-[1.75rem]"
            />
            <Image
              src={team2}
              className="h-[3rem] w-[3rem] rounded-full -ml-[1.75rem]"
            />{" "}
            <Image
              src={team3}
              className="h-[3rem] w-[3rem] rounded-full -ml-[1.75rem]"
            />
            <Image
              src={team4}
              className="h-[3rem] w-[3rem] rounded-full -ml-[1.75rem]"
            />
            <div className="h-[3rem] w-[3rem] grid place-items-center bg-white rounded-full -ml-[1.75rem] border-white border ">
              <p className="text-black font-medium">+56</p>
            </div>
          </div>
        </header>
        <div className="flex gap-2 items-center w-[30%]">
          <h1 className="text-[6rem] font-bold text-black font-montserrat">
            60
          </h1>
          <span className="text-dark-grey  text-[1.2rem]">Team members</span>
        </div>
        <div>
          <Button
            body={"Add Team Member"}
            icon={<AddIcon />}
            size={"small"}
            className={
              "rounded-md w-full justify-center text-xl py-4  border border-blue text-blue"
            }
          />
        </div>
      </div>
      <div className=" h-full  flex flex-col justify-top  w-2/3 mx-2">
        <div>
          <h1 className="text-2xl text-black font-semibold">New Joiners</h1>
        </div>
        <div className="flex flex-col overflow-y-auto max-h-[20rem] min-h-[20rem] ">
          {team.map((member) => (
            <Row joiner={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
