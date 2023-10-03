import EquipmentRow from "@/common/EquipmentRow";

export default function TableEquipment({ handleClick }) {
  const fakeDataEquipment = [
    {
      id: 7635,
      name: "John doe",
      date: "08/06/1999",
      state: "CONFIRMATION PENDING",
      price: 40000,
    },
    {
      id: 1234,
      name: "Santiago Sucari",
      date: "08/06/2010",
      state: "PAYMENT PENDING",
      price: 1000,
    },
    {
      id: 1342,
      name: "Agustin Sandoval",
      date: "08/06/2012",
      state: "ORDER CANCELED",
      price: 2302,
    },
    {
      id: 1553,
      name: "Francisco Villanueva",
      date: "08/06/2014",
      state: "ORDER CONFIRMED",
      price: 4000,
    },
    {
      id: 2043,
      name: "Braian Barrientos",
      date: "08/06/2009",
      state: "CLOSED",
      price: 8000,
    },
    {
      id: 3000,
      name: "Esteban Rodriguez",
      date: "08/06/2001",
      state: "OPEN",
      price: 12000,
    },
  ];

  fetch("").then()

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
          {fakeDataEquipment.map(({ id, name, date, state, price }) => (
            <EquipmentRow
              key={id}
              id={id}
              name={name}
              date={date}
              state={state}
              price={price}
              handleClick={handleClick}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
