"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fragment, ReactNode, useState } from "react";

type TableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  subComponent?: ReactNode;
  getRowCanExpand?: () => boolean;
};

export const Table = function <T>({
  columns,
  data,
  getRowCanExpand,
  subComponent,
}: TableProps<T>) {
  const [tableData, setTableData] = useState(() => [...data]);

  const table = useReactTable({
    data: tableData,
    columns,
    getRowCanExpand,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  return (
    <table className="w-full relative border rounded-md ">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border-b-2  border-gray-200 bg-light-grey "
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                style={{ width: `${header.getSize()}px` }}
                className={` py-3 px-4 border-r  text-start  text-black font-semibold   `}
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
              className={` text-black border-b  border-gray-200 text-left  ${
                row.getIsExpanded() && "border-l-2 border-l-black bg-hoverBlue"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className=" p-2  px-4 ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {row.getIsExpanded() && (
              <tr className="border-l-2 border-l-black">
                <td colSpan={row.getVisibleCells().length}>{subComponent}</td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};
