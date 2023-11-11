import Image from "next/image";

interface TableDetailsShipmentsProps {
  className?: string;
  data?: {
    image: string;
    category: string;
    model: string;
    description: string;
    quantity: number;
    serial: string;
  }[];
}

export default function TableDetailsShipments({
  className,
  data = [],
}: TableDetailsShipmentsProps) {
  // TODO: Consumir la data de "details shipment" de la store. como se hace con los member details
  return (
    <table
      className={`flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Model</th>
          <th className="py-3 px-3">Serial</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.serial}
            className="bg-white text-black border-b-2 border-gray-200 text-left"
          >
            <td className="py-4 px-3 flex gap-2">
              <Image
                src={item.image}
                alt={item.category}
                className="h-12 w-12"
              />
              <span>{item.category}</span>
            </td>
            <td className="py-4 px-3">
              {item.model}
              <br />
              {item.description}
            </td>
            <td className="py-4 px-3">{item.serial}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
