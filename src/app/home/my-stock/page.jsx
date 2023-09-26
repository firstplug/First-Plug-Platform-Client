"use client";

import Button from "@/common/Button";
import Layout from "@/common/Layout";
import React from "react";
import office from "../../../../public/office.svg";
import Card from "@/components/Card";
import { ShopIcon, UpLoadIcon } from "../../../common/Icons";
import Aside from "@/components/Aside";
import useModal from "@/hooks/useModal";
import AddStockCard from "@/common/AddStockCard";
import CustomLink from "@/common/CustomLink";
import Image from "next/image";

export default function MyStock() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Layout>
      <div className="border-2 shadow-sm border-border rounded-md h-full grid place-items-center w-full ">
        <div>
          <Card
            imageBottom={office}
            paragraph={"You don't have any items."}
            className={"border-none p-0 m-0"}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={"secondary"}
            body="Load Stock"
            icon={<UpLoadIcon />}
            className={"p-3 rounded-md"}
            onClick={() => openModal()}
          />

          <Button
            variant={"primary"}
            icon={<ShopIcon />}
            body="Shop Now"
            className={"p-3 rounded-md"}
          />
        </div>
      </div>

      {isModalOpen && (
        <Aside title="Load Stock" closeModal={closeModal}>
          <div className="flex flex-col gap-6">
            <Card className="border-dashed border h-60 flex flex-col gap-4 justify-center">
              <Image
                alt="folder icon"
                src="/svg/folder.svg"
                width={84}
                height={88}
                className="mt-[-20px]"
              />

              <p>Drag and drop your CSV file here or</p>
              <CustomLink href="#">
                <h2>Select a File</h2>
              </CustomLink>
            </Card>
            <AddStockCard
              title="Stock_2023.cvs"
              file="443kb"
              currentDate="04/04/2023 12:41"
            />
            <AddStockCard
              title="Stock_2023.cvs"
              file="443kb"
              currentDate="04/04/2023 12:41"
            />
          </div>

          <div className="fixed bottom-5 w-[85%]">
            <CustomLink href="/home/my-stock/data">
              <Button
                body="Attach Files"
                variant="primary"
                size="big"
                className="w-full rounded-md"
              />
            </CustomLink>
          </div>
        </Aside>
      )}
    </Layout>
  );
}
