import Image from "next/image";
import React from "react";
import Card from "./Card";
import { AddStockCard, CustomLink } from "@/common";

export default function LoadStock() {
  return (
    <div>
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

      <div className="fixed bottom-5 w-[85%] flex">
        <CustomLink
          href="/home/my-team/data"
          className="w- rounded-md flex-grow text-center"
          variant="primary"
          size="big"
        >
          Attach File
        </CustomLink>
      </div>
    </div>
  );
}
