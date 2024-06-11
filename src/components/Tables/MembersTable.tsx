import { useStore } from "@/models";
import { Memberservices } from "@/services";
import { TeamMember, TeamMemberTable } from "@/types";
import React from "react";
import { Table } from "../Table";
import { Button, PenIcon, TeamCard, TrashIcon } from "@/common";
import { ColumnDef } from "@tanstack/react-table";
import { DeleteAction } from "../Alerts";

const formatDate = (dateString: string) => {
  if (!dateString) return "";
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

const membersColumns: (
  handleEdit: (memberId: TeamMember["_id"]) => void,
  handleDelete: (memberId: TeamMember["_id"]) => void,
  handleViewDetail: (memberId: TeamMember["_id"]) => void
) => ColumnDef<TeamMemberTable>[] = (
  handleEdit,
  handleDelete,
  handleViewDetail
) => [
  {
    accessorKey: "fullName",
    header: "Full Name",
    cell: ({ row }) => (
      <span
        className="cursor-pointer text-blue-500"
        onClick={() => handleViewDetail(row.original._id)}
      >
        {row.getValue<string>("fullName")}
      </span>
    ),
  },
  {
    accessorKey: "birthDate",
    header: "Date Of Birth",
    cell: ({ getValue }) => (
      <span className="font-normal"> {formatDate(getValue<string>())} </span>
    ),
  },
  {
    accessorKey: "startDate",
    header: "Joining Date",
    cell: ({ getValue }) => (
      <span className="font-normal">{formatDate(getValue<string>())}</span>
    ),
  },
  {
    accessorKey: "team",
    header: "Team",
    cell: (info) => <TeamCard team={info.getValue<string>()} />,
  },
  {
    accessorKey: "position",
    header: "Job Position",
    cell: ({ getValue }) => (
      <span className="font-normal">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => (
      <span className="font-semibold text-lg bg-lightPurple/25 rounded-md  h-6 w-6 px-2 grid place-items-center">
        {(row.original.products || []).length}
      </span>
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
        <DeleteAction type="member" id={row.original._id} />
      </div>
    ),
  },
];
interface TableMembersProps {
  members: TeamMemberTable[];
}
export function MembersTable({ members }: TableMembersProps) {
  const {
    members: { setSelectedMember, setMembers, setMemberToEdit },
    aside: { setAside },
  } = useStore();

  const handleEdit = (memberId: TeamMember["_id"]) => {
    setMemberToEdit(memberId);
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
  const handleViewDetail = (memberId: TeamMember["_id"]) => {
    setSelectedMember(memberId);
    setAside("MemberDetails");
  };

  return (
    <Table<TeamMemberTable>
      data={members}
      columns={membersColumns(handleEdit, handleDelete, handleViewDetail)}
    />
  );
}
