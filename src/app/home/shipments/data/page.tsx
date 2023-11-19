import Layout from "@/common/Layout";
import TableShipments from "@/components/TableShipments";

export default function ShipmentsData() {
  //TODO: No mas facke data. Consumir del back

  return (
    <Layout className=" overflow-y-auto">
      <TableShipments />
    </Layout>
  );
}
