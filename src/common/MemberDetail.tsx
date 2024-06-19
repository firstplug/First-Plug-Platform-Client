import React from "react";
import { PenIcon, TrashIcon } from "./Icons";
import { Button } from "./Button";
import { TeamCard } from "./TeamCard";
import Image from "next/image";
import Photo from "../../public/employees/member.jpg";
import { useStore } from "@/models/root.store";
import memberImage from "../../public/member.png";
import { DeleteAction } from "@/components/Alerts";
import FormatedDate from "@/components/Tables/helpers/FormatedDate";

interface MemberDetailProps {
  className?: string;
}

export function MemberDetail({ className }: MemberDetailProps) {
  const {
    members: { selectedMember },
  } = useStore();

  if (!selectedMember) return null;

  return (
    <div className={`flex flex-col gap-4   ${className || ""}`}>
      <div className="flex gap-4">
        <div className="h-[150px] relative aspect-square">
          <Image
            src={memberImage || Photo}
            alt="member"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col w-full justify-start text-md">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center gap-1">
              <TeamCard team={selectedMember.team || ""} />
            </div>
            <div className="flex text-dark-grey font-semibold gap-2">
              <Button variant="text">
                <PenIcon
                  className="w-4 text-dark-grey font-semibold"
                  strokeWidth={2}
                />
              </Button>
              <DeleteAction id={selectedMember._id} type="member" />
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold">Job Position: </span>
            <span className="font-normal">{selectedMember.position || ""}</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold">Joining Date: </span>
            <FormatedDate date={selectedMember.startDate} />
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold">Birth Date: </span>
            <FormatedDate date={selectedMember.birthDate} />
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-semibold">Email: </span>
            <span className="font-normal">{selectedMember.email || ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
