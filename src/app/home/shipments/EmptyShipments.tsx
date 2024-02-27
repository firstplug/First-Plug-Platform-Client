import { EmptyCard, EmptyCardLayout } from "@/common";

export default function EmptyShipments() {
  return (
    <EmptyCardLayout>
      <EmptyCard
        imageBottom="/world.svg"
        paragraph="You haven't made any shipment yet."
        altImage="World"
        children="shipments"
      />
    </EmptyCardLayout>
  );
}
