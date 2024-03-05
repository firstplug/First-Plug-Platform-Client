"use client";
import { Table } from "@/components";
import { Button, ShipmentStatusCard } from "@/common";
import { ArrowRight, ShopIcon, TrashIcon, UpLoadIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { Product, ProductTable, ShipmentStatus } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

function setAction(status: string) {
  switch (status) {
    case "Available":
      return "Assign To";
    case "Delivered":
      return "Return";
    case "Missing Data":
      return "Fill Data";
    case "Preparing":
      return "Reasign";
    case "Shipped":
      return "Track >";
  }
}
export const prodcutColumns: ({
  serial,
}: {
  serial?: boolean;
}) => ColumnDef<ProductTable>[] = ({ serial = false }) => [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 200,
    cell: ({ getValue }) => (
      <div className="flex gap-2 items-center">
        <div className="relative w-[15%]   aspect-square   ">
          <Image
            src={getValue<{ img: string }>().img}
            alt={getValue<{ category: string }>().category}
            fill
            className=" aspect-video rounded-md shadow-md "
          />
        </div>
        <span>{getValue<{ category: string }>().category}</span>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.model,
    header: "Model",
    size: 200,
    cell: ({ getValue }) => (
      <div className="flex flex-col gap-">
        <span className="text-xl">{getValue<{ model: string }>().model}</span>
        <span className=" flex gap-2 text-dark-grey text-md ">
          <div className="flex gap-1 items-center">
            <span>Proccesor </span>
            <p className="font-normal">
              {getValue<{ processor: string }>().processor}{" "}
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <span>RAM </span>
            <p className="font-normal">{getValue<{ ram: string }>().ram}</p>
          </div>
          <div className="flex gap-1 items-center">
            <span>SDD </span>

            <p className="font-normal">
              {getValue<{ storage: string }>().storage}{" "}
            </p>
          </div>
        </span>
      </div>
    ),
  },
  !serial
    ? {
        accessorFn: (row) => row.quantity,
        header: "Quantity",
        size: 200,
        cell: ({ getValue }) => <span>{getValue<number>()}</span>,
      }
    : {
        accessorFn: (row) => row.serialNumber,
        header: "Serial",
        size: 200,
        cell: ({ getValue }) => <span>{getValue<string>()}</span>,
      },
  {
    id: "expander",
    header: () => null,
    size: 10,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div className=" flex justify-end">
            <Button
              {...{
                onClick: row.getToggleExpandedHandler(),
                style: { cursor: "pointer" },
              }}
              variant="text"
              className="p-2 rounded-lg cursor-pointer "
            >
              <span>Details</span>
              <ArrowRight
                className={`transition-all duration-200 ${
                  row.getIsExpanded() ? "rotate-[90deg]" : "rotate-[0]"
                }`}
              />
            </Button>
          </div>
        )
      );
    },
  },
];
const InternalProductsColumns: ColumnDef<Product>[] = [
  {
    accessorFn: (row) => row.serialNumber,
    header: "Serial",
    cell: ({ getValue }) => <div>{getValue<string>()}</div>,
  },
  {
    accessorFn: (row) => row.name,
    header: "Currently with",
    cell: ({ getValue }) => (
      <span className="text-sm">
        Aca va nombre de la persona que tiene este producto
      </span>
    ),
  },
  {
    accessorFn: (row) => row.status,
    header: "Status",
    cell: ({ getValue }) => (
      <ShipmentStatusCard status={getValue<ShipmentStatus>()} />
    ),
  },
  {
    accessorFn: (row) => row.status,
    header: "Actions",
    cell: ({ row, getValue }) => (
      <Button variant="text">{setAction(row.original.status)}</Button>
    ),
  },
  {
    id: "actiondelete",
    header: "",
    cell: () => (
      <div className="flex justify-end">
        <Button variant="text">
          <TrashIcon color="red" strokeWidth={2} />
        </Button>
      </div>
    ),
  },
];

export default observer(function DataStock() {
  const router = useRouter();
  const {
    products: { productsTable, products },
    aside: { setAside },
  } = useStore();

  return (
    <div className="flex flex-col gap-5 overflow-auto  w-full     ">
      <aside className="flex justify-between items-center   ">
        <div className="flex gap-2">
          <input type="checkbox" />
          <label className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
        </div>

        <div className="flex gap-2   ">
          <Button
            className="rounded-md py-2 px-4"
            variant="secondary"
            body="Load Stock"
            icon={<UpLoadIcon />}
            onClick={() => setAside("LoadStock")}
          />

          <Button
            className="rounded-md py-2 px-4"
            variant="primary"
            icon={<ShopIcon />}
            body="Shop Now"
            onClick={() => {
              router.push("/shop");
            }}
          />
        </div>
      </aside>

      <div className="max-w-full  w-full overflow-x-auto ">
        <Table<ProductTable>
          data={productsTable}
          columns={prodcutColumns({ serial: false })}
          getRowCanExpand={() => true}
          subComponent={
            <Table<Product> data={products} columns={InternalProductsColumns} />
          }
        />
      </div>
    </div>
  );
});
