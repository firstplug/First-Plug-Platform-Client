"use client";
import {
  Category,
  Location,
  Product,
  ProductTable,
  ShipmentStatus,
} from "@/types";
import React, { useState } from "react";
import { Table } from "../Table";
import {
  ArrowRight,
  Button,
  PenIcon,
  ProductImage,
  ProductLocation,
  ShipmentStatusCard,
} from "@/common";
import { ColumnDef } from "@tanstack/react-table";
import PrdouctModelDetail from "@/common/PrdouctModelDetail";
import MemberName from "./helpers/MemberName";
import { ActionButton } from "./Product/ActionButton";
import { DeleteAction } from "../Alerts";
import EditProduct from "./Product/EditProduct";
import FormatedDate from "./helpers/FormatedDate";

interface ProductColumnsInterface {
  handleSelectProducts: (products: Product[]) => void;
}
export const productColumns: ({
  handleSelectProducts,
}: ProductColumnsInterface) => ColumnDef<ProductTable>[] = ({
  handleSelectProducts,
}) => [
  {
    accessorFn: (row) => row.category,
    header: "Category",
    size: 20,
    cell: ({ row, getValue }) => (
      <div className="flex  gap-2 text-xl  items-center w-[150px]   ">
        <ProductImage category={getValue<string>()} />
        <p>{getValue<string>()}</p>
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.name,
    header: "Name",
    size: 200,
    cell: ({ row, getValue }) => (
      <div className="flex flex-col">
        <span className="text-xl">{getValue<string>()}</span>
        <PrdouctModelDetail product={row.original.products[0]} />
      </div>
    ),
    footer: (props) => props.column.id,
  },
  // UNA SOLA COLUMNA CON EL STOCK TOTAL Y DISPONIBLE
  {
    accessorFn: (row) => row.products,
    header: "Stock",
    size: 20,
    cell: ({ getValue }) => (
      <div className="flex flex-col  gap-2 justify-center font-normal   font-montserrat ">
        <span className=" flex justify-between  rounded-md p-1  px-2">
          <span> Total</span>
          <span className="font-semibold text-lg bg-lightPurple/25 rounded-md  h-6 w-6 px-2 grid place-items-center">
            {" "}
            {getValue<Product[]>().length}
          </span>
        </span>
        <span className="  flex justify-between shadow-sm rounded-md p-1 px-2">
          <span> Available</span>
          <span className="font-semibold text-lg bg-lightGreen/25 rounded-md  h-6  px-2 grid place-items-center">
            {" "}
            {
              getValue<Product[]>().filter(
                (product) => product.status === "Available"
              ).length
            }
          </span>
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
    header: "Acquisition Date ",

    cell: ({ getValue }) => <FormatedDate date={getValue<string>()} />,
  },
  {
    accessorFn: (row) => row.assignedEmail,
    header: "Currently with",
    cell: ({ getValue }) => <MemberName email={getValue<string>()} />,
  },
  {
    accessorFn: (row) => row.status,
    header: "Status",
    cell: ({ getValue }) => (
      <ShipmentStatusCard status={getValue<ShipmentStatus>()} />
    ),
  },
  {
    accessorFn: (row) => row.location,
    header: "Location",
    cell: ({ getValue }) => (
      <div>
        {" "}
        <ProductLocation location={getValue<Location>()} />{" "}
      </div>
    ),
  },
  {
    accessorFn: (row) => row.status,
    header: "Actions",
    cell: ({ row, getValue }) => <ActionButton product={row.original} />,
  },
  {
    id: "actiondelete",
    header: "",
    cell: ({ row }) => (
      <div className="flex justify-end px-2">
        <EditProduct product={row.original} />
        <DeleteAction type="product" id={row.original._id} />
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
      columns={productColumns({ handleSelectProducts })}
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
