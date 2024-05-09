"use client";
import { Category, Product, ProductTable, ShipmentStatus } from "@/types";
import React, { useState } from "react";
import { Table } from "../Table";
import {
  ArrowRight,
  Button,
  ProductImage,
  ShipmentStatusCard,
  TrashIcon,
} from "@/common";
import { ColumnDef } from "@tanstack/react-table";
import PrdouctModelDetail from "@/common/PrdouctModelDetail";
import MemberName from "./helpers/MemberName";

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
interface ProdcutColumnsInterface {
  handleSelectProducts: (products: Product[]) => void;
}
export const prodcutColumns: ({
  handleSelectProducts,
}: ProdcutColumnsInterface) => ColumnDef<ProductTable>[] = ({
  handleSelectProducts,
}) => [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 200,
    cell: ({ row, getValue }) => (
      <div className="flex gap-4 text-xl items-start  ">
        <ProductImage category={getValue<string>()} />
        <span className="mt-2">{getValue<string>()}</span>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.products,
    header: "Model",
    size: 200,
    cell: ({ row, getValue }) => (
      <PrdouctModelDetail product={getValue<Product[]>()[0]} />
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.products,
    header: "Quantity",
    size: 200,
    cell: ({ getValue }) => (
      <div className="flex w-full   h-full">
        <span className=" font-semibold text-xl ">
          {getValue<Product[]>().length}
        </span>
      </div>
    ),
  },

  {
    id: "expander",
    header: () => null,
    size: 10,
    cell: ({ row }) => {
      return (
        row.getCanExpand() && (
          <div
            className=" flex justify-end"
            onClick={() => handleSelectProducts(row.original.products)}
          >
            <Button
              onClick={row.getToggleExpandedHandler()}
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
    cell: ({ getValue }) => (
      <span className="text-md font-semibold">#{getValue<string>()}</span>
    ),
  },
  {
    accessorFn: (row) => row.acquisitionDate,
    header: "Acquisition Date | MM/DD/YYY",

    cell: ({ getValue }) => (
      <span className="text-md font-semibold">
        {new Date(getValue<string>()).toLocaleDateString()}
      </span>
    ),
  },
  {
    accessorFn: (row) => row.assignedEmail,
    header: "Currently with",
    cell: ({ getValue }) => (
      <span className="text-sm">
        <MemberName email={getValue<string>()} />{" "}
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

interface ProductTableProps {
  products: ProductTable[];
}
export function ProductsTable({ products }: ProductTableProps) {
  const [productsDetails, setProductsDetails] = useState<Product[]>();

  const handleSelectProducts = (products: Product[]) =>
    setProductsDetails(products);

  return (
    <Table<ProductTable>
      data={products}
      columns={prodcutColumns({ handleSelectProducts })}
      getRowCanExpand={() => true}
      subComponent={
        productsDetails ? (
          <Table<Product>
            data={productsDetails}
            columns={InternalProductsColumns}
          />
        ) : null
      }
    />
  );
}
