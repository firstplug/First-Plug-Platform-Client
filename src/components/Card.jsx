"use client";
import React from "react";
import Button from "@/common/Button";

import Image from "next/image";

const Card = ({ Title, bodyButton, imageBottom, paragraph, icon }) => {
  return (
    <main className="w-[100%] h-[388px] bg-white rounded-[16px] p-6 border border-grey">
      <div className="flex justify-between items-center text-white">
        <h1 className="text-[20px] text-black font-montserrat font-bold flex-1">
          {Title}
        </h1>
        <Button
          icon={icon}
          className="w-[140px] h-[40px] text-[14px] whitespace-nowrap"
          body={bodyButton}
          size="small"
          variant="secondary"
        />
      </div>
      <div className="w-[100%] h-[50%]  mt-[24px] flex flex-col items-center gap-y-[16px]">
        <Image src={imageBottom} />
        <p className="text-dark-grey">{paragraph}</p>
      </div>
    </main>
  );
};

export default Card;
