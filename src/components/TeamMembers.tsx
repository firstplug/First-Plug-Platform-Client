"use client";
import { observer } from "mobx-react-lite";
import TableTeam from "@/components/TableTeam";
import GridTeam from "./GridTeam";
import { useStore } from "@/models/root.store";

interface TeamMembersProps {
  display?: string,
}

interface MemberProps {
  _id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  joiningDate: string;
  teams: string[]; 
  jobPosition: string; 
  shimentsDetails?: string;
}

export default observer(function TeamMembers({ display } : TeamMembersProps) {
  const store = useStore();

  const members: MemberProps[] = store.members.map((member) => ({
    _id: member._id,
    firstName: member.firstName,
    lastName: member.lastName,
    dateOfBirth: member.dateOfBirth,
    phone: member.phone,
    email: member.email,
    jobPosition: member.jobPosition,
    city: member.city,
    zipCode: member.zipCode,
    address: member.address,
    appartment: member.appartment,
    joiningDate: member.joiningDate,
    timeSlotForDelivery: member.timeSlotForDelivery,
    additionalInfo: member.additionalInfo,
    teams: member.teams,
  }));

  return (
    <section className="flex flex-col gap-4">
      {display === "grid" ? (
        <GridTeam members={members} />
      ) : (
        <TableTeam members={members} />
      )}
    </section>
  );
});
