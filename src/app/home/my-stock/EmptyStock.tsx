import { EmptyCard, EmptyCardLayout } from "@/common";
export default function EmptyStock() {
  return (
    <EmptyCardLayout>
      <EmptyCard
        imageBottom="/office.svg"
        paragraph="You don't have any items."
        altImage="Office"
        children="stock"
      />
    </EmptyCardLayout>
  );
}
