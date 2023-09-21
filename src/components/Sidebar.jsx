"use client";
import React, { useState } from "react";
import Image from "next/image";
import CustomLink from "@/common/CustomLink";
import Button from "@/common/Button";
import {
  ComputerIcon,
  DashboardIcon,
  NotebookOrdersIcon,
  PersonsGroupIcon,
  SettingsIcon,
  TruckIcon,
  ArrowLeft,
  ArrowRight,
} from "@/common/Icons";

const Sidebar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [isSidebarSmall, setIsSidebarSmall] = useState(false);

  const toggleSidebarSize = () => {
    setIsSidebarSmall(!isSidebarSmall);
    setShowLogo(!showLogo);
  };

  return (
    <aside
      className={` h-full flex flex-col shadow-sm shadow-grey transition-all ${
        isSidebarSmall ? "w-20" : "w-64"
      }`}
    >
      <header className={`py-8 flex flex-[-1] h-[80px] m-auto`}>
        <div>
          {isSidebarSmall ? (
            <Image
              src="/Isotipo.png"
              alt="Logo small"
              width={280}
              height={98}
              className="w-10"
            />
          ) : (
            <Image src="/logo1.png" alt="Logo" width={144.2} height={48} />
          )}
        </div>
      </header>

      <div className="h-5">
        <hr />

        <Button
          icon={isSidebarSmall ? <ArrowRight /> : <ArrowLeft />}
          onClick={toggleSidebarSize}
          className={`w-32 h-10 bg-white border border-grey hover:bg-gray-300 rounded-full relative bottom-5 ${
            isSidebarSmall ? "left-[70%]" : "left-[90%]"
          }`}
        />
      </div>

      <section className="flex flex-col flex-[2] w-[50%] mx-auto gap-5">
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center gap-2 text-dark-grey hover:text-black  ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <DashboardIcon />
          <span className={isSidebarSmall && "hidden"}>Dashboard</span>
        </CustomLink>
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center    gap-2 text-dark-grey hover:text-black ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <ComputerIcon className="w-6 h-6 mr-2" />
          <span className={isSidebarSmall && "hidden"}>My Stock</span>
        </CustomLink>
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center gap-2 text-dark-grey hover:text-black ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <PersonsGroupIcon className="w-6 h-6 mr-2" />
          <span className={isSidebarSmall && "hidden"}>My Team</span>
        </CustomLink>
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center  gap-2 text-dark-grey hover:text-black ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <NotebookOrdersIcon className="w-6 h-6 mr-2" />
          <span className={isSidebarSmall && "hidden"}>Orders</span>
        </CustomLink>
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center gap-2 text-dark-grey hover:text-black ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <TruckIcon className="w-6 h-6 mr-2" />
          <span className={isSidebarSmall && "hidden"}>Shipments</span>
        </CustomLink>
      </section>

      <hr className="my-2" />

      <section className="text-center flex flex-col gap-5 py-1 w-[50%] mx-auto  ">
        <CustomLink
          href={"#"}
          className={`py-2 w-full flex items-center gap-2 mb-3 text-dark-grey hover:text-black ${
            isSidebarSmall ? "justify-center" : "justify-start"
          }`}
        >
          <SettingsIcon className="w-6 h-6 mr-2" />
          <span className={isSidebarSmall && "hidden"}>Settings</span>
        </CustomLink>
      </section>
    </aside>
  );
};

export default Sidebar;
