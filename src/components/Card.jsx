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
    <article
      className={`bg-white rounded-[16px] p-6 border border-grey ${
        className || ""
      }`}
    >
      {Title && (
        <header className="flex justify-between items-center text-white">
          <h2 className="text-[20px] text-black font-montserrat font-bold flex-1 md:text-sm lg:text-xl">
            {Title}
          </h2>
          {titleButton && (
            <Button
              icon={icon}
              className="p-2 whitespace-nowrap rounded-md"
              body={titleButton}
              size="small"
              variant="secondary"
            />
          )}
        </header>
      )}
      <div
        className={`flex flex-col ${
          !children && "items-center"
        }  gap-y-[.5rem] `}
      >
        {imageBottom && (
          <div className="w-52 h-52 relative">
            <Image src={imageBottom} alt={altImage} fill />
          </div>
        )}
        <p className="text-dark-grey">{paragraph}</p>
        {children && children}
      </div>
    </article>
  );
};

export default Card;
