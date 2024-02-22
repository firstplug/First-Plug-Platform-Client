import { EmptyCard, CustomLink } from "@/common";

export default function EmptyShipments() {
  return (
    <EmptyCard
      imageBottom="/world.svg"
      paragraph="You haven't made any shipment yet."
      altImage="World"
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
  );
}
