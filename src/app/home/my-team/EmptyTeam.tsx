import { EmptyCard, EmptyCardLayout } from "@/common";

export default function EmptyTeam() {
  return (
    <EmptyCardLayout>
      <EmptyCard
        imageBottom="/girl.svg"
        paragraph="You havnet't loaded any  employees yet."
        altImage="Girl"
        children="members"
      />
    </EmptyCardLayout>
  );
}
