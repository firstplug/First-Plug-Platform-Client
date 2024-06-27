"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import DataStock from "./DataStock";
import EmptyStock from "./EmptyStock";
import { PageLayout } from "@/common";
import { BarLoader } from "@/components/Loader/BarLoader";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";

export default observer(function MyStock() {
  const {
    products: { tableProducts, fetchingStock },
  } = useStore();

  const { fetchStock } = useFetch();
  useEffect(() => {
    fetchStock();
  }, []);
  return (
    <PageLayout>
      {fetchingStock ? (
        <BarLoader />
      ) : tableProducts.length ? (
        <DataStock />
      ) : (
        <EmptyStock />
      )}
    </PageLayout>
  );
});
