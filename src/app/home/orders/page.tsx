import CustomLink from "@/common/CustomLink";
import EmptyCard from "@/common/EmptyCard";
import { ShopIcon } from "@/common/Icons";
import Layout from "@/common/Layout";

export default function Orders() {
  //TODO: implemetnar logica con estados para mostrar logistsi o equipment, y que no sean dos rutas diferentes
  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      <EmptyCard
        imageBottom="/Orders.svg"
        paragraph="You haven't made any shipment yet."
        altImage="Orders"
      >
        <CustomLink
          variant="primary"
          size="big"
          className="rounded-md flex gap-2"
          href="/home/orders/equipment"
        >
          <ShopIcon /> Shop Now
        </CustomLink>
      </EmptyCard>
    </Layout>
  );
}
