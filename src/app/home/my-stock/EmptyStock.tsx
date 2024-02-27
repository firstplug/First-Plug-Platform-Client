"use client";
import { EmptyCard, EmptyCardLayout } from "@/common";
import { observer } from "mobx-react-lite";
export default observer(function EmptyStock() {
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
});
