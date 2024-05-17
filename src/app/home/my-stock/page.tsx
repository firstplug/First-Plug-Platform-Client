"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import DataStock from "./DataStock";
import EmptyStock from "./EmptyStock";
import { PageLayout } from "@/common";

export default observer(function MyStock() {
  const {
    products: { tableProducts },
  } = useStore();

  return (
    <PageLayout>
      {tableProducts.length ? <DataStock /> : <EmptyStock />}
    </PageLayout>
  );
});
