import EquipmentRow from "@/common/EquipmentRow";
import { ChevronDown } from "@/common/Icons";
import { dateTo_DDMMYY } from "@/utils/dateFormat";
import State from "@/common/State";

interface TableEquipmentProps {
  handleClick: (id: number | string) => void;
  orders: [];
}

export default function TableEquipment({ handleClick, orders } : TableEquipmentProps) {
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
          {orders.map(({ _id, teamMember, date, status, totalPrice }) => (
            <EquipmentRow
              key={_id}
              id={_id}
              idTeamMember={teamMember[0]}
              date={dateTo_DDMMYY(date)}
              state={<State message={status} />}
              price={totalPrice}
              handleClick={handleClick}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
