"use client";
import Image from "next/image";

import Aside from "@/components/Aside";
import Card from "@/components/Card";

import Button from "@/common/Button";
import Layout from "@/common/Layout";
import AddStockCard from "@/common/AddStockCard";
import CustomLink from "@/common/CustomLink";
import { ShopIcon, UpLoadIcon } from "@/common/Icons";

import useModal from "@/hooks/useModal";
import EmptyCard from "@/common/EmptyCard";

export default function MyStock() {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <Layout className="border-2 shadow-sm border-border rounded-md grid place-items-center w-[98%] ">
      <EmptyCard
        imageBottom="/office.svg"
        paragraph="You don't have any items."
      >
        <div className="flex gap-2 ">
          <Button
            variant="secondary"
            body="Load Stock"
            size="big"
            icon={<UpLoadIcon />}
            className="p-3 rounded-md"
            onClick={() => openModal()}
          />

          <CustomLink
            variant="primary"
            size="big"
            className="rounded-md flex   gap-2"
            href="/shop"
          >
            <ShopIcon /> Shop Now
          </CustomLink>
        </div>
      </EmptyCard>

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

          <div className="fixed bottom-5 w-[85%] flex">
            <CustomLink
              href="/home/my-stock/data"
              className="w- rounded-md flex-grow text-center"
              variant="primary"
              size="big"
            >
              Attach File
            </CustomLink>
          </div>
        </Aside>
      )}
    </Layout>
  );
}
