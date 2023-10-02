import Layout from "@/common/Layout";
import TableShipments from "@/components/TableShipments";

export default function page() {
  const orders = [
    {
      id: "#001",
      date: "25/09/2023",
      quantity: 2,
      type: "Internal",
      price: 2500,
    },
    {
      id: "#002",
      date: "15/09/2023",
      quantity: 3,
      type: "Courrier",
      price: 1000,
    },
    {
      id: "#003",
      date: "07/09/2023",
      quantity: 1,
      type: "Internal",
      price: 1850,
    },
  ];
  return (
    <Layout>
      <TableShipments orders={orders} />
    </Layout>
  );
}
