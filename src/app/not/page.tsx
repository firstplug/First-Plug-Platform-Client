import { CustomLink, EmptyCardLayout, Layout } from "@/common";
import { Navbar } from "@/components";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="outline h-screen flex flex-col">
      <Navbar title="logo" />

      <div className="flex-grow  p-6">
        <div className="flex flex-col justify-center items-center h-full w-full   gap-4   border border-boder rounded-lg shadow-md">
          <Image
            src={"/svg/not-found.svg"}
            alt="alerts"
            width={221}
            height={220}
          />
          <div className="flex flex-col items-center text-dark-grey ">
            <h2 className=" font-bold text-[70px]  ">404</h2>
            <p className="">Sorry! Something went wrong. Please try again</p>
          </div>

          <CustomLink
            href="/home/dashboard"
            variant="primary"
            className="w-32 h-12 text-lg rounded-md grid place-items-center"
          >
            Go Home
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
