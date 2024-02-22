"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import EmptyShipments from "./EmptyShipments";
import DataShipments from "./DataShipments";
import { Layout } from "@/common";

export default observer(function Shipments() {
  const {
    shipments: { shipments },
  } = useStore();
  return (
    <Layout className="border shadow-sm border-border rounded-md flex-grow grid place-items-center">
      {shipments.length ? <DataShipments /> : <EmptyShipments />}
    </Layout>
  );
});
