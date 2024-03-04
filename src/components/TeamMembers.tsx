"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { GridTeam, Table } from "./";
import { DisplayView, ShipmentStatus, TeamMemberTable } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { useDate } from "@/hooks/useDate";
import {
  Button,
  PenIcon,
  ShipmentStatus as ShipmentStatusCard,
  TeamCard,
  TrashIcon,
} from "@/common";

interface TeamMembersProps {
  display?: DisplayView;
}

export const TeamMembers = observer(function ({ display }: TeamMembersProps) {
  const {
    members: { membersTable, setSelectedMember },
    aside: { setAside },
  } = useStore();
  const { DMY_Date } = useDate();
  const membersColumns: ColumnDef<TeamMemberTable>[] = [
    {
      accessorKey: "fullName",
      header: "FullName",
      cell: ({ getValue }) => <span>{getValue<string>()}</span>,
    },
    {
      accessorKey: "dateOfBirth",
      header: "Date Of Birth",
      cell: ({ getValue }) => (
        <span className="font-normal"> {DMY_Date(getValue<string>())} </span>
      ),
    },
    {
      accessorKey: "joiningDate",
      header: "Joining Date",
      cell: ({ getValue }) => (
        <span className="font-normal">
          {useDate().DMY_Date(getValue<string>().toString())}
        </span>
      ),
    },
    {
      accessorKey: "teams",
      header: "Team",
      cell: (info) => <TeamCard team={info.getValue<string[]>()[0]} />,
    },
    {
      accessorKey: "jobPosition",
      header: "Job Position",
      cell: ({ getValue }) => (
        <span className="font-normal">{getValue<string>()}</span>
      ),
    },
    {
      accessorKey: "shipmentDetails",
      header: "Shipment Details",
      cell: ({ getValue }) => (
        <ShipmentStatusCard status={getValue<ShipmentStatus>()} />
      ),
    },
    {
      accessorKey: "",
      id: "actions",
      header: () => null,
      cell: () => (
        <div className="flex gap-1">
          <Button
            variant="text"
            icon={
              <PenIcon
                strokeWidth={2}
                className="text-dark-grey w-[1.2rem] h-[1.2rem]"
              />
            }
          />
          <Button
            variant="text"
            body={
              <TrashIcon
                strokeWidth={2}
                className=" text-dark-grey w-[1.2rem] h-[1.2rem] hover:text-error"
              />
            }
          />
        </div>
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-4 w-full absolute  bottom-0 left-0 overflow-auto  h-[80%] ">
      {display === "grid" ? (
        <GridTeam />
      ) : (
        <Table<TeamMemberTable> data={membersTable} columns={membersColumns} />
      )}
    </section>
  );
});
