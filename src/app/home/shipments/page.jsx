import CustomLink from "@/common/CustomLink";
import EmptyCard from "@/common/EmptyCard";
import Layout from "@/common/Layout";

export default function Shipments() {
  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      <EmptyCard
        imageBottom="/world.svg"
        paragraph="You haven't made any shipment yet."
      >
        <CustomLink
          variant="primary"
          size="big"
          className="rounded-md flex justify-center"
          href="/home/my-stock"
        >
          Got to My Stock
        </CustomLink>
      </EmptyCard>
    </Layout>
  );
}
