"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { GridTeam, Table } from "./";
import {
  DisplayView,
  ShipmentStatus,
  TeamMember,
  TeamMemberTable,
} from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DMY_Date } from "@/utils";
import {
  Button,
  PenIcon,
  ShipmentStatus as ShipmentStatusCard,
  TeamCard,
  TrashIcon,
} from "@/common";
import { Memberservices } from "@/services";

interface TeamMembersProps {
  display?: DisplayView;
}
const membersColumns: (
  handleEdit: (memberId: TeamMember["_id"]) => void,
  handleDelete: (memberId: TeamMember["_id"]) => void
) => ColumnDef<TeamMemberTable>[] = (handleEdit, handleDelete) => [
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
        {DMY_Date(getValue<string>().toString())}
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
    cell: ({ row }) => (
      <div className="flex gap-1">
        <Button
          variant="text"
          onClick={() => handleEdit(row.original._id)}
          icon={
            <PenIcon
              strokeWidth={2}
              className="text-dark-grey w-[1.2rem] h-[1.2rem]"
            />
          }
        />
        <Button
          variant="text"
          onClick={() => handleDelete(row.original._id)}
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
    members: { membersTable, setSelectedMember, setMembers },
    aside: { setAside },
  } = useStore();

  const handleEdit = (memberId: TeamMember["_id"]) => {
    setSelectedMember(memberId);
    setAside("EditMember");
  };
  const handleDelete = (memberId: TeamMember["_id"]) => {
    Memberservices.deleteMember(memberId).then(() => {
      Memberservices.getAllMembers().then((res) => {
        setMembers(res);
        alert("Member has been deleted!");
      });
    });
  };

  return (
    <section className="flex flex-col gap-4 w-full absolute  bottom-0 left-0 overflow-auto  h-[80%] ">
      {display === "grid" ? (
        <GridTeam />
      ) : (
        <Table<TeamMemberTable>
          data={membersTable}
          columns={membersColumns(handleEdit, handleDelete)}
        />
      )}
    </section>
  );
});
