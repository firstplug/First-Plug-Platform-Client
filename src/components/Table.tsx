"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, ReactNode, useState } from "react";
import {
  Order,
  Product,
  ShipmentByMonthTable,
  ShipmentTable,
  TeamMember,
} from "@/types";

type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  subComponent?: ReactNode;
  getRowCanExpand?: () => boolean;
};

export const Table = function ({
  columns,
  data,
  getRowCanExpand = () => false,
  subComponent,
}: TableProps<
  Product | ShipmentTable | Order | TeamMember | ShipmentByMonthTable
>) {
  const [tableData, setTableData] = useState(() => [...data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <table className="w-full relative ">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border-b-2  border-gray-200 bg-light-grey"
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{ width: `${header.getSize()}px` }}
                className={` py-3 px-2 border-r border-l text-start  text-black font-semibold w-[${header.getSize()}px]`}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <Fragment>
            <tr
              key={row.id}
              className="bg-white text-black border-b-2 border-gray-200 text-left  "
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" p-2 ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {row.getIsExpanded() && (
              <tr>
                <td colSpan={row.getVisibleCells().length}>{subComponent}</td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};
