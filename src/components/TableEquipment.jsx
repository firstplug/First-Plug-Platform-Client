import EquipmentRow from "@/common/EquipmentRow";
import { TeamMembersServices } from "@/services/teamMember.services";
import { ChevronDown } from "@/common/Icons";

export default function TableEquipment({ handleClick, orders }) {
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-4 h-4 transition-transform transform rotate-180`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 01.7.29l7 7a1 1 0 01-1.4 1.42L10 5.42 3.7 11.71a1 1 0 01-1.4-1.42l7-7A1 1 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
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
              date={new Date(date).toISOString().split("T")[0]}
              state={status}
              price={totalPrice}
              handleClick={handleClick}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
