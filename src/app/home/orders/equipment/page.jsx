"use client";
import { useState } from "react";

import TableEquipment from "@/components/TableEquipment";
import Layout from "@/common/Layout";
import Header from "@/common/Header";
import Aside from "@/components/Aside";
import ProductDetail from "@/common/ProductDetail";
import Button from "@/common/Button";
import { DownloadIcon } from "@/common/Icons";
import useModal from "@/hooks/useModal";

export default function Equipment() {
  const [selectedTab, setSelectedTab] = useState("Equipment");
  const { isModalOpen, closeModal, openModal } = useModal();

  const data = [
    {
      id: "asda21312ssd",
      image: "./notebook1.png",
      category: "Notebook",
      model: "MacBook Pro 14",
      description: "CPU: M2 Pro | RAM: 16GB | SSD: 512GB",
      quantity: 5,
    },
    {
      id: "asd81927312",
      image: "./airpods.png",
      category: "Airpods",
      model: "Airpod",
      description: "Wireless earbuds for Apple devices",
      quantity: 5,
    },
  ];

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  const handleClick = (id) => {
    // Get Order by id

    openModal();
  };

  return (
    <Layout className="flex flex-col gap-8">
      <Header selectedTab={selectedTab} />
      <TableEquipment handleClick={handleClick} />

      {isModalOpen ? (
        <Aside closeModal={closeModal} title="ID Number" className="relative">
          <section className="flex flex-col gap-4">
            {data.map((product) => (
              <ProductDetail key={product.id} product={product} className="" />
            ))}
          </section>

          <div className="flex gap-4 w-full absolute bottom-0">
            <Button
              body="Download Invoice"
              variant={"secondary"}
              size={"big"}
              icon={<DownloadIcon />}
              className={"rounded-md w-3/6 "}
            />
            <Button
              body="Download Payment Details"
              variant={"secondary"}
              size={"big"}
              icon={<DownloadIcon />}
              className={"rounded-md w-4/6 "}
            />
          </div>
        </Aside>
      ) : null}
    </Layout>
  );
}
