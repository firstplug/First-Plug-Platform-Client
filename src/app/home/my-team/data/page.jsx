"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/common/Layout";
import ColaboratorCard from "@/components/ColaboratorCard";
import Button from "@/common/Button";
import {
  AddIcon,
  UpLoadIcon,
  PenIcon,
  TableDisplayIcon,
  GridLayoutIcon,
} from "@/common/Icons";
import Dropdown from "@/common/Dropdown";
import TableTeam from "@/components/TableTeam";
import FitlerModal from "@/components/FitlerModal";

const teams = ["Finance", "HR", "Dev", "Finance", "Design", "Sales"];
const array = [
  {
    id: "#002",
    name: "Francisco",
    lastName: "Villanueva",
    jobPosition: "Junior Dev",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone"],
    shimentsDetails: "incomplete",
    team: "dev",
  },
  {
    id: "#004",
    name: "Esteban",
    lastName: "Rodriguez",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "complete",
    team: "dev",
  },

  {
    id: "#003",
    name: "Agustin",
    lastName: "Sandoval",
    jobPosition: "Sernio Dev",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone"],
    shimentsDetails: "complete",
    team: "finance",
  },

  {
    id: "#001",
    name: "Braian",
    lastName: "Barrientos",
    jobPosition: "Desing",
    dateBirth: "05/09/1998",
    joiningDate: "19/09/2023",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "incomplete",
    team: "desing",
  },
];
export default function MyTeamData() {
  const [display, setDisplay] = useState("grid");
  return (
    <Layout className="flex flex-col gap-4">
      <div className="w-full flex  justify-end gap-2 ">
        <Button
          body={"Add Team Member "}
          className={"rounded-md text-sm p-2"}
          icon={<AddIcon className={"h-4 w-4"} />}
          variant={"secondary"}
        />
        <Button
          body={"Load Team Member"}
          icon={<UpLoadIcon className={"h-4 w-4"} />}
          className={"rounded-md text-sm p-2"}
          variant={"primary"}
        />
      </div>
      <hr />

      <div className="w-full flex justify-between   gap-2  ">
        <Dropdown
          body={"Filter by team:"}
          className="rounded-md border font-medium"
        >
          <FitlerModal array={teams} />
        </Dropdown>
        <div className="flex gap-2 items-center">
          <Button
            body="Create Team"
            variant={"text"}
            icon={<AddIcon className={"w-[1rem]"} />}
            className={"p-1 text-sm"}
          />
          <Button
            body="Edit Team"
            variant={"text"}
            icon={<PenIcon className={"w-[1rem]"} />}
            className={"p-1 text-sm"}
          />
          <span className="text-gray-400"> |</span>

          <div className="flex gap-2">
            {display === "table" ? (
              <Button onClick={() => setDisplay("grid")}>
                <GridLayoutIcon className={"text-black hover:shadow-md"} />
              </Button>
            ) : (
              <Button onClick={() => setDisplay("table")}>
                <TableDisplayIcon className={"text-black hover:shadow-md"} />
              </Button>
            )}
          </div>
        </div>
      </div>
      {display === "grid" ? (
        <div className="grid w-full grid-cols-3 gap-2  ">
          {array.map((member) => (
            <ColaboratorCard
              key={member.id}
              {...member}
              className={"w-full shadow-md"}
              member={member}
            />
          ))}
        </div>
      ) : (
        <TableTeam team={array} />
      )}
    </Layout>
  );
}
