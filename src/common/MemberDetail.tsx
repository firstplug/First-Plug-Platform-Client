import React from "react";
import { PenIcon, TrashIcon } from "./Icons";
import { Button } from "./Button";
import { TeamCard } from "./TeamCard";
import Image from "next/image";
import Photo from "../../public/employees/member.jpg";
import { dateTo_DDMMYY } from "@/utils/dateFormat";
import { useStore } from "@/models/root.store";

interface MemberDetailProps {
  className?: string;
}

export function MemberDetail({ className }: MemberDetailProps) {
  const {
    members: { selectedMember },
  } = useStore();

  if (!selectedMember) return null;

  return (
    <div className={`flex flex-col gap-4 ${className || ""}`}>
      <div className="flex gap-4">
        <div className="h-[150px] relative aspect-square">
          <Image
            src={selectedMember.picture || Photo}
            alt="member"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col w-full justify-start gap-2">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-1">
              <TeamCard team={selectedMember.team} />
            </div>
            <div className="flex text-dark-grey font-semibold gap-2">
              <Button variant="text">
                <PenIcon
                  className="h-[1rem] aspect-square text-dark-grey font-semibold"
                  strokeWidth={2}
                />
              </Button>
              <Button variant="text">
                <TrashIcon className="h-[1rem] aspect-square text-dark-grey font-semibold" />
              </Button>
            </div>
          </div>
          <b className="text-xl text-black">
            {selectedMember.firstName} {selectedMember.lastName}
          </b>
          <div className="flex items-center gap-2 text-md">
            <span className="font-semibold">Date Of Birth: </span>
            <span className="font-normal">
              {dateTo_DDMMYY(selectedMember.birthDate)}
            </span>
          </div>
          <div className="flex items-center gap-2 text-md">
            <span className="font-semibold">Joining Date: </span>
            <span className="font-normal">
              {dateTo_DDMMYY(selectedMember.startDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
