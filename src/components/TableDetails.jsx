import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import { TrashIcon } from "@/common/Icons";
import State from "@/common/State";
import React from "react";

const TableDetails = ({ details, className }) => {
  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3 ">Serial</th>
          <th className="py-3 px-3 border-l border-gray-200 ">
            Currently with
          </th>
          <th className="py-3 px-3 border-l border-gray-200 ">Status</th>
          <th className="py-3 px-3 border-l border-gray-200">Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail) => (
          <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
            <td className="  py-4 px-3 ">{detail.serial}</td>
            <td className="  py-4 px-3">
              <b>
                {" "}
                {detail.name} {detail.lastName}{" "}
              </b>
            </td>
            <td className="  py-4 px-3">
              <State message={detail.status} className="p-1" />
            </td>
            <td className=" py-4 px-3">
              <CustomLink href="" className="text-right">
                {detail.actions}
              </CustomLink>
            </td>
            <td className=" py-4 px-3 ">
              <div className="flex gap-1">
                <Button>
                  <TrashIcon className={"w-[1.5rem] h-[1.5rem]"} color="red" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableDetails;
