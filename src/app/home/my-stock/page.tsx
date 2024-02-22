"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import DataStock from "./DataStock";
import EmptyStock from "./EmptyStock";
import { useEffect } from "react";
import { ProductServices } from "@/services";
import { Layout } from "@/common";

export default observer(function MyStock() {
  const {
    products: { products, setProducts },
  } = useStore();

  useEffect(() => {
    ProductServices.getAllProducts().then((res) => {
      setProducts(res);
    });
  }, [setProducts]);
  return <Layout>{products.length ? <DataStock /> : <EmptyStock />}</Layout>;
});
