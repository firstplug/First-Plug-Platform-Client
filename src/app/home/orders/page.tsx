"use client";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import DataOrders from "./DataOrders";
import EmptyOrders from "./EmptyOrders";
import { OrderServices, ShipmentServices } from "@/services";

export default observer(function OrderPage() {
  const {
    orders: { orders, setOrders },
    shipments: { setShipments, shipments },
  } = useStore();

  useEffect(() => {
    OrderServices.getAllOrders().then((res) => {
      setOrders(res);
    });
    ShipmentServices.getAllShipments().then((res) => {
      setShipments(res.data);
    });
  }, []);
  return <div>{shipments.length ? <DataOrders /> : <EmptyOrders />}</div>;
});
