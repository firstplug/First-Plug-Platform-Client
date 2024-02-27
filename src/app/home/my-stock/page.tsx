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
      console.log({ products: res });
      setProducts(res);
    });
  }, []);
  return (
    <Layout className="flex  ">
      {products.length ? <DataStock /> : <EmptyStock />}
    </Layout>
  );
});
