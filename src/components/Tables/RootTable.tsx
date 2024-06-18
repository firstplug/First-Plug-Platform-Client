import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  useReactTable,
  RowData,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: "text" | "range" | "select";
    filterPositon?: "inline" | "bottom";
  }
}
import { Fragment, ReactNode, useState } from "react";
import { TableType } from "@/types";
import { TableActions } from "./TableActions";
import HeaderFilter from "./Filters/HeaderFilter";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  getRowCanExpand?: () => boolean;
  renderSubComponent?: (row: TData) => ReactNode;
  tableType: TableType;
}

export function RootTable<TData, TValue>({
  columns,
  data,
  getRowCanExpand,
  renderSubComponent,
  tableType,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="h-full flex flex-col gap-2 ">
      {tableType !== "subRow" && (
        <div className="   max-h-[50%] flex items-center   ">
          <TableActions table={table} type={tableType} />
        </div>
      )}
      <div className="rounded-md border    max-h-[85%] overflow-y-auto ">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b-  border-gray-200 bg-light-grey rounded-md "
              >
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className={` py-3 px-4 border-r       text-start  text-black font-semibold   `}
                  >
                    <div className="flex w-full justify-between items-center">
                      <div>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </div>

                      <div
                        className={`${
                          header.column.getCanFilter() ? "" : "hidden"
                        }`}
                      >
                        {header.column.getCanFilter() ? (
                          <HeaderFilter
                            column={header.column}
                            tableType={tableType}
                            table={table}
                          />
                        ) : null}
                      </div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <Fragment>
                  <TableRow
                    key={row.id}
                    className={` text-black border-b text-md border-gray-200 text-left  ${
                      row.getIsExpanded() &&
                      "border-l-2 border-l-black bg-hoverBlue"
                    }`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-xs">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <tr className="border-l-2 border-l-black">
                      <td colSpan={row.getVisibleCells().length}>
                        {renderSubComponent && renderSubComponent(row.original)}
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  -
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
