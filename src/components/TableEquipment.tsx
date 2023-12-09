"use client";
import { EquipmentRow } from "@/common";
import { ChevronDown } from "@/common/Icons";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";

export const TableEquipment = observer(function () {
  const {
    orders: { orders },
  } = useStore();
  return (
    <>
      <table className="flex-col\ border border-border divide-y divide-gray-200 font-inter text-black">
        <thead className="py-4 px-5">
          <tr className="divide-x-2 divide-gray-200 bg-light-grey text-black text-left font-semibold">
            <th scope="col" className="py-3 px-3 w-[10%]">
              Order ID
            </th>
            <th className="py-3 px-3 w-[10%]">
              <div className="flex justify-between items-center">
                <span>Team Member</span>
                <ChevronDown />
              </div>
            </th>
            <th className="py-3 px-3 w-[5%]">Order Date</th>
            <th className="py-3 px-3 w-[10%]">
              <div className="flex justify-between items-center">
                <span>Status</span>

                <ChevronDown />
              </div>
            </th>
            <th className="py-3 px-3 w-[10%]">Total</th>
          </tr>
        </thead>

        <tbody className="font-medium text-md divide-y divide-gray-200 ">
          {orders.map((order) => (
            <EquipmentRow key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </>
  );
});
