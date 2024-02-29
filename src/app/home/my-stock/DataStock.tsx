"use client";
import { Table } from "@/components";
import { Button } from "@/common";
import { ArrowRight, ShopIcon, UpLoadIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { Product } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

const productsColumns: ColumnDef<Product>[] = [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 100,
    cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.model,
    header: "Model",
    size: 0,
    cell: (info) => info.getValue(),
  },
  {
    accessorFn: (row) => row.stock,
    header: "Quantity",
    size: 2,
    cell: (info) => info.getValue<string>(),
  },
  {
    id: "expander",
    header: () => null,
    size: 2,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div className=" flex justify-end">
            <Button
              variant="text"
              onClick={() => row.getToggleExpandedHandler()}
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
    cell: ({ row, getValue }) => <div>{getValue<string>()}</div>,
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.name,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Currently with</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.status,
    header: "Status",
    cell: ({ getValue }) => (
      <span className={`p-1 bg-lightYellow rounded-md text-sm`}>
        {getValue<string>().toString()}
      </span>
    ),
  },
];

export default observer(function DataStock() {
  const router = useRouter();
  const {
    products: { products },
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
        <Table
          data={products}
          columns={productsColumns}
          getRowCanExpand={() => true}
          subComponent={
            <Table data={products} columns={InternalProductsColumns} />
          }
        />
      </div>
    </div>
  );
});
