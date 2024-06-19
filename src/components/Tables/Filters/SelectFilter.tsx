import { CATEGORIES, PRODUCT_STATUSES, TableType } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
interface ISelectFilter {
  tableType: TableType;
  onValueChange: (value) => void;
  value: string;
}
export default observer(function SelectFilter({
  tableType,
  onValueChange,
  value,
}: ISelectFilter) {
  const {
    teams: { teams },
  } = useStore();

  switch (tableType) {
    case "members": {
      return (
        <Select onValueChange={(value) => onValueChange(value)} value={value}>
          <SelectTrigger className=" bg-white  text-xs ">
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
      );
    }
    case "stock": {
      return (
        <Select onValueChange={(value) => onValueChange(value)} value={value}>
          <SelectTrigger className=" bg-white  text-xs ">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent className="bg-white text-xs">
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {CATEGORIES.map((t) => (
                <SelectItem value={t} key={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    }
    case "subRow": {
      return (
        <Select onValueChange={(value) => onValueChange(value)} value={value}>
          <SelectTrigger className=" bg-white  text-xs ">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent className="bg-white text-xs">
            <SelectGroup>
              <SelectItem value="all">All</SelectItem>
              {PRODUCT_STATUSES.filter((status) => status !== "Deprecated").map(
                (t) => (
                  <SelectItem value={t} key={t}>
                    {t}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      );
    }
  }
});
