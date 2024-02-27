"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import EmptyShipments from "./EmptyShipments";
import DataShipments from "./DataShipments";
import { useEffect } from "react";
import { Layout } from "@/common";
import { ShipmentServices } from "@/services";

export default observer(function Shipments() {
  const {
    shipments: { shipments, setShipments },
  } = useStore();

  useEffect(() => {
    ShipmentServices.getAllShipments().then((res) => setShipments(res.data));
  }, []);
  return (
    <Layout>{shipments.length ? <DataShipments /> : <EmptyShipments />}</Layout>
  );
});
