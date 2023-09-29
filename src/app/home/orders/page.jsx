import CustomLink from "@/common/CustomLink";
import EmptyCard from "@/common/EmptyCard";
import { ShopIcon } from "@/common/Icons";
import Layout from "@/common/Layout";

export default function page() {
  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      <EmptyCard
        imageBottom="/Orders.svg"
        paragraph="You haven't made any shipment yet."
      >
        <CustomLink
          variant="primary"
          size="big"
          className="rounded-md flex gap-2"
          href="/shop"
        >
          <ShopIcon /> Shop Now
        </CustomLink>
      </EmptyCard>
    </Layout>
  );
}
