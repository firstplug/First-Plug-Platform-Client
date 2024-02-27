import { ArrowRight, Button, PenIcon, TeamCard, TrashIcon } from "@/common";
import { useDate } from "@/hooks/useDate";
import {
  Order,
  Product,
  Shipment,
  ShipmentByMonthTable,
  TeamMember,
} from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

const productsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "category",
    header: "Category",
    size: 100,
    cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "model",
    header: () => "Model",
    size: 0,
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "stock",
    header: "Quantity",
    size: 2,
    cell: (info) => info.getValue<string>(),
  },
  {
    id: "expander",
    header: () => null,
    size: 2,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <div className=" flex justify-end">
          <Button
            variant="text"
            className="p-2 rounded-lg "
            {...{
              onClick: row.getToggleExpandedHandler(),
              style: { cursor: "pointer" },
            }}
          >
            <span>Details</span>
            <ArrowRight
              className={`transition-all duration-200 ${
                row.getIsExpanded() ? "rotate-[90deg]" : "rotate-[0]"
              }`}
            />
          </Button>
        </div>
      ) : null;
    },
  },
];
const InternalProductsColumns: ColumnDef<Product>[] = [
  {
    accessorKey: "serialNumber",
    header: "Serial",
    cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "name",
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Currently with</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => (
      <span className={`p-1 bg-lightYellow rounded-md text-sm`}>
        {getValue<string>().toString()}
      </span>
    ),
  },
];
const membersColumns: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date Of Birth",
    cell: ({ getValue }) => format(getValue<string>().toString(), "dd/MM/yyyy"),
  },
  {
    accessorKey: "joiningDate",
    header: "Joining Date",
    cell: ({ getValue }) => (
      <span>{useDate().DMY_Date(getValue<string>().toString())}</span>
    ),
  },
  {
    accessorKey: "teams",
    header: "Team",
    cell: (info) => <TeamCard team={info.getValue<string>()} />,
  },
  {
    accessorKey: "jobPosition",
    header: "Job Position",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "",
    id: "actions",
    header: () => null,
    cell: (info) => (
      <div className="flex gap-1">
        <Button
          variant="text"
          icon={
            <PenIcon
              strokeWidth={2}
              className="text-dark-grey w-[1.2rem] h-[1.2rem]"
            />
          }
        />
        <Button
          variant="text"
          body={
            <TrashIcon
              strokeWidth={2}
              className=" text-dark-grey w-[1.2rem] h-[1.2rem] hover:text-error"
            />
          }
        />
      </div>
    ),
  },
];
const ordersEquipmentColumns: ColumnDef<Order>[] = [
  {
    accessorKey: "month",
    header: "Order ID",
    cell: ({ getValue }) => <b>#{getValue<string>()}</b>,
  },
  {
    accessorKey: "teamMember",
    header: "Team Memer",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: (info) => info.getValue(),
  },
];
const ordersLogisticColumns: ColumnDef<ShipmentByMonthTable>[] = [
  {
    accessorKey: "month",
    header: "Month",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "shipments",
    header: "Shipmetns Quantity",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "price",
    header: "Total",
    cell: ({ getValue }) => getValue<string>(),
  },
];
const shipmentsColumns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "_id",
    header: "Order ID",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "date",
    header: "Order Date",
    cell: ({ getValue }) => format(getValue<string>().toString(), "dd/MM/yyyy"),
  },
  {
    accessorKey: "products",
    header: "Quantity Prodcuts",
    cell: ({ getValue }) => getValue<string>().length,
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "trackingURL",
    header: "Track",
    cell: ({ getValue }) => getValue<string>(),
  },
  {
    accessorKey: "products",
    header: "Price",
    cell: ({ getValue }) => <strong> USD {getValue<string>().length} </strong>,
  },
];
export const columns = {
  products: productsColumns,
  internalProducts: InternalProductsColumns,
  members: membersColumns,
  ordersEquipment: ordersEquipmentColumns,
  shipments: shipmentsColumns,
  ordersLogistic: ordersLogisticColumns,
};

export type ContentType = keyof typeof columns;
