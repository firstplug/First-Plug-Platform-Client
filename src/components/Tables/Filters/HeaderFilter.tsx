import { TableType } from "@/types";
import { Column, Table } from "@tanstack/react-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import SelectFilter from "./SelectFilter";
import { Fragment } from "react";
import { Input } from "@/components/ui/input";
interface IHeaderFilter<TData> {
  column: Column<any, unknown>;
  tableType: TableType;
  table: Table<TData>;
}

export default function HeaderFilter<TData>({
  column,
  tableType,
  table,
}: IHeaderFilter<TData>) {
  const {
    teams: { teams },
  } = useStore();
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  const handleFilterTeams = (value) => {
    if (value === "all") return table.resetColumnFilters();
    column.setFilterValue(value);
  };

  const handleSearchInput = (value) => {
    column.setFilterValue(value);
  };
  return (
    <Fragment>
      {filterVariant === "select" && (
        <SelectFilter
          tableType={tableType}
          onValueChange={handleFilterTeams}
          value={columnFilterValue?.toString()}
        />
      )}
      {filterVariant === "text" && (
        <input
          className="outline-none border px-2 py-1 rounded-md text-[11px] "
          placeholder="Search by Name"
          onChange={(e) => handleSearchInput(e.target.value)}
          value={columnFilterValue?.toString()}
        />
      )}
    </Fragment>
  );
}
