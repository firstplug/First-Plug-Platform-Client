import React from "react";
import { PenIcon, TrashIcon } from "./Icons";
import Button from "./Button";
import TeamCard from "./TeamCard";
import Image from "next/image";
import Photo from "../../public/employees/member.jpg";
import ShipmentStatus from "./ShipmentStatus";
import { dateTo_DDMMYY } from "@/utils/dateFormat";

export default function MemberDetail({
  firstName,
  lastName,
  dateOfBirth,
  joiningDate,
  shimentsDetails = "incomplete",
  team,
  className,
}) {
  return (
    <div className={`flex gap-2 ${className || ""}`}>
      <Image
        src={Photo}
        alt="member"
        className="w-1/4 object-cover rounded-md"
      />
      <div className="flex flex-col w-full  justify-start gap-2  ">
        <div className="flex w-full justify-between items-center">
          <TeamCard team={team} />

          <div className="flex gap-2">
            <Button icon={<PenIcon className={"h-[1.2rem]"} stroke={2} />} />
            <Button icon={<TrashIcon className={" h-[1.2rem]"} />} />
          </div>
        </div>

        <b className="text-xl">
          {firstName} {lastName}
        </b>
        <div className="flex  items-center justify-between  gap-1 text-[.9rem]">
          <div className="flex items-center gap-1 ">
            <span className="font-semibold "> Date Of Birth: </span>
            <span className="font-normal"> {dateTo_DDMMYY(dateOfBirth)} </span>
          </div>
          <span className="text-grey">|</span>
          <div className="flex items-center gap-1 ">
            <span className="font-semibold ">Joining Date:</span>
            <span className="font-normal">{dateTo_DDMMYY(joiningDate)}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <span className="font-normal"> Shipment Details: </span>
            <ShipmentStatus status={shimentsDetails} />
          </div>
        </div>
      </div>
    </div>
  );
}
