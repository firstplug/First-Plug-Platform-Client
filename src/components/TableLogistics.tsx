import { LogisticsRow } from "@/common";

export default function TableEquipment() {
  //TODO: Esta fake-data. Es una vista de shipments supongo. Que representa?
  const fakeDataLogistics = [
    {
      id: 1234,
      month: "05/2023",
      shipmentQuantity: 10,
      state: "CLOSED",
      total: 1000,
    },
    {
      id: 2345,
      month: "06/2023",
      shipmentQuantity: 1,
      state: "CLOSED",
      total: 1000,
    },
    {
      id: 6998,
      month: "07/2023",
      shipmentQuantity: 3,
      state: "PAYMENT PENDING",
      total: 1000,
    },
    {
      id: 1642,
      month: "08/2023",
      shipmentQuantity: 6,
      state: "OPEN",
      total: 1000,
    },
  ];

  return (
    <table className="flex-col\ border border-border divide-y divide-gray-200 font-inter text-black">
      <thead className="py-4 px-5">
        <tr className="divide-x-2 divide-gray-200 bg-light-grey text-black text-left font-semibold">
          <th scope="col" className="py-3 px-3 w-[10%]">
            <div className="flex justify-between items-center">
              <span>Month</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </div>
          </th>
          <th className="py-3 px-3 w-[10%]">Shipment Quantity</th>
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
        {fakeDataLogistics.map(
          ({ id, month, shipmentQuantity, state, total }) => (
            <LogisticsRow
              key={id}
              month={month}
              shipmentQuantity={shipmentQuantity}
              state={state}
              total={total}
            />
          )
        )}
      </tbody>
    </table>
  );
}
