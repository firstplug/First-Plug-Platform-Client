import { useStore } from "@/models";
import { Product, Shimpent } from "@/types";
import { observer } from "mobx-react-lite";
import Image from "next/image";

interface TableDetailsShipmentsProps {
  className?: string;
}

export default observer(function TableDetailsShipments({
  className,
}: TableDetailsShipmentsProps) {
  const {
    shipments: { shipmentDetails },
  } = useStore();

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
        {shipmentDetails.map((item) => (
          <tr
            key={item._id}
            className="bg-white text-black border-b-2 border-gray-200 text-left"
          >
            <td className="py-4 px-3 flex gap-2">
              <Image
                src={item.imgUrl}
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
            <td className="py-4 px-3">{item.serialNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
});
