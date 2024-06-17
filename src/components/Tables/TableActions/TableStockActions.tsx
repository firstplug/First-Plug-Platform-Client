import { AddIcon, Button, ShopIcon, UploadIcon } from "@/common";
import { useStore } from "@/models";
import { Table } from "@tanstack/react-table";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
interface ITableStockActions<TData> {
  table: Table<TData>;
}
export default observer(function TableStockActions<TData>({
  table,
}: ITableStockActions<TData>) {
  const [filter, setFilter] = useState(false);
  const router = useRouter();
  const {
    products: { toggleStockToShow },
    aside: { setAside },
  } = useStore();
  const handleFilter = () => {
    setFilter(!filter);
    toggleStockToShow();
  };
  return (
    <div className=" flex items-center justify-between   h-full w-full ">
      <div className="flex gap-2">
        <input type="checkbox" checked={filter} onChange={handleFilter} />
        <label className="ml-2 text-gray-500">Show only avaliable stock</label>
      </div>

      <div className="flex gap-2   ">
        <Button
          className="rounded-md py-2 px-4"
          variant="secondary"
          body="Add Product"
          icon={<AddIcon />}
          onClick={() => {
            router.push("/home/my-stock/addOneProduct");
          }}
        />

        <Button
          className="rounded-md py-2 px-4"
          variant="secondary"
          body="Load Stock"
          icon={<UploadIcon />}
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
    </div>
  );
});
