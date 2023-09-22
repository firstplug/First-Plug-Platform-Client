import React from "react";
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
import SearchInput from "@/common/SearchInput";

const teams = ["Finance", "HR", "Dev", "Finance", "Design", "Sales"];
const array = [
  {
    name: "Francisco",
    lastName: "Villanueva",
    jobPosition: "Junior Dev",
    products: ["mac", "phone"],
    shimentsDetails: "incomplete",
    team: "dev",
  },
  {
    name: "Esteban",
    lastName: "Rodriguez",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "complete",
    team: "dev",
  },

  {
    name: "Agustin",
    lastName: "Sandoval",
    jobPosition: "Sernio Dev",
    products: ["mac", "phone"],
    shimentsDetails: "complete",
    team: "finance",
  },

  {
    name: "Braian",
    lastName: "Barrientos",
    jobPosition: "Desing",
    products: ["mac", "phone", "monitor"],
    shimentsDetails: "incomplete",
    team: "desing",
  },
];
export default function MyTeam() {
  return (
    <Layout className="flex flex-col gap-2">
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
        <Dropdown body={"Filter"} className="rounded-md border font-medium">
          <div className="absolute bg-white w-[20vw] p-4 border-2 rounded-md">
            <SearchInput />
            <div className="p-3">
              {teams.map((m) => (
                <div className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">{m}</label>
                </div>
              ))}
            </div>
          </div>
        </Dropdown>
        <div className="flex gap-2 items-center">
          <Button
            body={"Create Team"}
            variant={"text"}
            icon={<AddIcon className={"w-[1rem]"} />}
            className={"p-1 text-sm"}
          />
          <Button
            body={"Edit Team"}
            variant={"text"}
            icon={<PenIcon className={"w-[1rem]"} />}
            className={"p-1 text-sm"}
          />
          <span className="text-gray-400"> |</span>

          <div className="flex gap-2">
            <GridLayoutIcon className={"text-black hover:shadow-md"} />
            <TableDisplayIcon className={"text-black hover:shadow-md"} />
          </div>
        </div>
      </div>
      <div className="grid w-full grid-cols-3 gap-2  ">
        {array.map((m) => (
          <ColaboratorCard {...m} className={"w-full shadow-md"} />
        ))}
      </div>
    </Layout>
  );
}
