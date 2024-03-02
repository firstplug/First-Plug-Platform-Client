"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { GridTeam, Table } from "./";
import {
  DisplayView,
  Product,
  ShipmentStatus,
  TeamMember,
  TeamMemberTable,
} from "@/types";
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
const membersColumns: ColumnDef<TeamMemberTable>[] = [
  {
    accessorKey: "fullName",
    header: "FullName",
    cell: ({ getValue }) => <strong>{getValue<string>()}</strong>,
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date Of Birth",
    cell: ({ getValue }) => format(getValue<string>().toString(), "dd/MM/yyyy"),
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
    cell: ({ getValue }) => (
      <span>{useDate().DMY_Date(getValue<string>().toString())}</span>
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
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
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
    cell: (info) => (
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
export const TeamMembers = observer(function ({ display }: TeamMembersProps) {
  const {
    members: { members, membersTable },
  } = useStore();

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
