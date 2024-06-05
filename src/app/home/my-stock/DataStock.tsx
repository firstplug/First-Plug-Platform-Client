"use client";
import { Button } from "@/common";
import { AddIcon, ShopIcon, UploadIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { ProductsTable } from "@/components/Tables";
import { useState } from "react";

export default observer(function DataStock() {
  const router = useRouter();
  const {
    products: { products, tableProducts, availableProducts },
    aside: { setAside },
  } = useStore();

  const [filter, setFilter] = useState(false);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 relative  ">
      <aside className="flex justify-between items-center h-[6%]   ">
        <div className="flex gap-2">
          <input type="checkbox" checked={filter} onChange={handleFilter} />
          <label className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
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
      </aside>

      <div className="h-[90%] top-[8%] w-full overflow-y-auto  absolute ">
        {filter && <ProductsTable products={availableProducts} />}
        {!filter && <ProductsTable products={tableProducts} />}
      </div>
    </div>
  );
});
