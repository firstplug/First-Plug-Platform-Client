import TableShipments from "@/components/TableShipments";
export default function Home() {
  const orders = [
    {
      id: "#002231",
      date: "25/06/2023",
      quantity: 3,
      type: "Internal",
      track: "trackurl",
      price: "2500",
    },
    {
      id: "#002231",
      date: "25/06/2023",
      quantity: 3,
      type: "Internal",
      track: "trackurl",
      price: "2500",
    },
  ];
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <TableShipments orders={orders} />
    </main>
  );
}
