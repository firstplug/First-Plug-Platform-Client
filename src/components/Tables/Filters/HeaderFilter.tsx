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
interface IHeaderFilter<TData> {
  column: Column<any, unknown>;
  tableType: TableType;
  table: Table<TData>;
}

export default observer(function HeaderFilter<TData>({
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
  return filterVariant === "select" ? (
    <Select
      onValueChange={(value) => handleFilterTeams(value)}
      value={columnFilterValue?.toString()}
    >
      <SelectTrigger className="w-[110px] bg-white  text-xs ">
        <SelectValue placeholder="Filter by Team" />
      </SelectTrigger>
      <SelectContent className="bg-white text-xs">
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          {teams.map((t) => (
            <SelectItem value={t} key={t}>
              {t}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  ) : null;
});
