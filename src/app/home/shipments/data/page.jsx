import Layout from "@/common/Layout";
import TableShipments from "@/components/TableShipments";

export default function ShipmentsData() {
  const data = [
    {
      image: "/notebook1.png",
      category: "Notebook ",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 16GB | SSD: 512GB",
      quantity: 5,
      serial: "#00113",
    },
    {
      image: "/notebook2.png",
      category: "Notebook",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 8GB | SSD: 256GB",
      quantity: 5,
      serial: "#00343",
    },
    {
      image: "/airpods.png",
      category: "Airpods",
      model: "Airpod",
      description: "Wireless earbuds for Apple devices",
      quantity: 5,
      serial: "#00563",
    },
    {
      image: "/keyboard.png",
      category: "Keyboard",
      model: "Magic Keyboard",
      description: "Apple's wireless keyboard",
      quantity: 5,
      serial: "#00332",
    },
  ];
  const orders = [
    {
      id: "#001",
      date: "25/09/2023",
      quantity: 2,
      type: "Internal",
      price: 2500,
      details: data.slice(0, 1),
    },
    {
      id: "#002",
      date: "15/09/2023",
      quantity: 3,
      type: "Courrier",
      price: 1000,
      details: data.slice(0, 3),
    },
    {
      id: "#003",
      date: "07/09/2023",
      quantity: 1,
      type: "Internal",
      price: 1850,
      details: data.slice(0),
    },
  ];
  return (
    <Layout className=" overflow-y-auto">
      <TableShipments orders={orders} />
    </Layout>
  );
}
