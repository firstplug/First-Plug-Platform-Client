"use client";
import React from "react";
import Layout from "@/common/Layout";
import Card from "@/components/Card";
import girl from "../../../../public/girl.svg";
import Button from "@/common/Button";
import { AddIcon, UpLoadIcon } from "@/common/Icons";
import useModal from "@/hooks/useModal";
import CustomLink from "@/common/CustomLink";
import AddStockCard from "@/common/AddStockCard";
import Image from "next/image";
import Aside from "@/components/Aside";

export default function MyTeam() {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <Layout>
      <Card
        className={"h-full grid place-items-center  "}
        imageBottom={girl}
        paragraph={"You havnet't loaded any  employees yet."}
      >
        <div className="flex gap-2 mt-4">
          <Button
            body={"Load Team Members"}
            icon={<AddIcon />}
            variant={"secondary"}
            size={"big"}
            className={"rounded-md"}
            onClick={openModal}
          />
          <Button
            body={"Add Team Members"}
            icon={<UpLoadIcon />}
            variant={"primary"}
            size={"big"}
            className={"rounded-md"}
          />
        </div>
      </Card>

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
              title="Team_2023.cvs"
              file="443kb"
              currentDate="04/04/2023 12:41"
            />
            <AddStockCard
              title="Team_2023.cvs"
              file="443kb"
              currentDate="04/04/2023 12:41"
            />
          </div>

          <div className="fixed bottom-5 w-[85%]">
            <CustomLink href="/home/my-team/data">
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
