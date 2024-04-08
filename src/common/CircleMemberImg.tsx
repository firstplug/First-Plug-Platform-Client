import { TeamMember } from "@/types";
import Image from "next/image";
import React from "react";
import memberPhoto from "public/member.png";

interface CircleImgProps {
  member: TeamMember;
}
export function CircleMemberImg({ member }: CircleImgProps) {
  return (
    <div className="relative  h-[3rem] w-[3rem]  rounded-full -ml-[1.75rem]">
      <Image
        src={member.img ? member.img : memberPhoto}
        className="rounded-full"
        alt={member.firstName}
        fill
      />
    </div>
  );
}
