"use client";
import React, { MouseEvent, ReactNode } from "react";
import { Button } from "@/common";
import Image from "next/image";

interface CardProps {
  children?: ReactNode;
  Title?: string;
  titleButton?: string;
  imageBottom?: string;
  paragraph?: string;
  icon?: JSX.Element;
  altImage?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Card = function ({
  children,
  Title,
  titleButton,
  imageBottom,
  paragraph,
  icon,
  altImage,
  className = "",
  onClick,
}: CardProps) {
  return (
    <article
      className={` flex flex-col  rounded-xl p-4  border border-border outline  relative ${className}`}
    >
      {Title && (
        <header className="flex justify-between items-center text-white  ">
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
              onClick={onClick}
            />
          )}
        </header>
      )}
      <div>
        {children ? (
          <div
            className={` ${
              Title ? "" : "absolute"
            }  w-full  h-full  grid  place-items-center  left-0 top-0   `}
          >
            {children}
          </div>
        ) : (
          imageBottom && (
            <div className="absolute top-0 right-0 h-full w-full -z-10  grid place-items-center">
              <div className="flex flex-col ">
                <div className="w-52 h-52 relative">
                  <Image src={imageBottom} alt={altImage} fill priority />
                </div>
                <p className="text-dark-grey">{paragraph}</p>
              </div>
            </div>
          )
        )}
      </div>
    </article>
  );
};
