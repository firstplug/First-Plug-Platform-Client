import { EmptyCard, EmptyCardLayout } from "@/common";

export default function EmptyOrders() {
  return (
    <EmptyCardLayout>
      <EmptyCard
        imageBottom="/Orders.svg"
        paragraph="You haven't made any shipment yet."
        altImage="Orders"
        children="orders"
      />
    </EmptyCardLayout>
  );
}
