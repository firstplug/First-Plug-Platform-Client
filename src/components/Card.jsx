"use client";
import React from "react";
import Button from "@/common/Button";

import Image from "next/image";

const Card = ({
  children,
  Title,
  titleButton,
  imageBottom,
  paragraph,
  icon,
  altImage,
  className,
}) => {
  return (
    <main
      className={` bg-white rounded-[16px] p-6 border border-grey ${
        className || ""
      }`}
    >
      {Title && (
        <div className="flex justify-between items-center text-white">
          <h1 className="text-[20px] text-black font-montserrat font-bold flex-1 md:text-sm lg:text-xl">
            {Title}
          </h1>
          {titleButton && (
            <Button
              icon={icon}
              className="p-2 whitespace-nowrap rounded-md"
              body={titleButton}
              size="small"
              variant="secondary"
            />
          )}
        </div>
      )}
      <div className="   flex flex-col  gap-y-[.5rem] ">
        <Image src={imageBottom} alt={altImage} />
        <p className="text-dark-grey">{paragraph}</p>
        {children && children}
      </div>
    </main>
  );
};

export default Card;
