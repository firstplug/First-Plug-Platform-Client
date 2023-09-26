import Button from "@/common/Button";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import React from "react";

export default function TableTeam({ team, className }) {
  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">ID</th>
          <th className="py-3 px-3">Full Name</th>
          <th className="py-3 px-3">Date of Birth</th>
          <th className="py-3 px-3">Joining Date</th>
          <th className="py-3 px-3">Team</th>
          <th className="py-3 px-3">Job Position</th>
          <th className="py-3 px-3">Shipment Details</th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {team.map((team) => (
          <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
            <td className="  py-4 px-3 ">{team.id}</td>
            <td className="  py-4 px-3">
              <b>
                {" "}
                {team.name} {team.lastName}{" "}
              </b>
            </td>
            <td className="  py-4 px-3">{team.dateBirth}</td>
            <td className=" py-4 px-3">{team.joiningDate}</td>
            <td className=" py-4 px-3">
              <TeamCard team={team.team} className={"text-lg"} />
            </td>
            <td className=" py-4 px-3">{team.jobPosition}</td>
            <td className=" py-4 px-3 ">
              <div className="flex items-center gap-1">
                <StatusCircleIcon status={team.shimentsDetails} />

                {team.shimentsDetails}
              </div>
            </td>
            <td className=" py-4 px-3 ">
              <div className="flex gap-1">
                <Button>
                  <PenIcon className={"w-[1rem] h-[1rem]"} />
                </Button>
                <Button>
                  <TrashIcon className={"w-[1rem] h-[1rem]"} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
