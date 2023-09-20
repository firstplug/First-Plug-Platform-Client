// components/Sidebar.js
"use client";
import CustomLink from "@/common/CustomLink";
import {
  ComputerIcon,
  DashboardIcon,
  NotebookOrdersIcon,
  PersonsGroupIcon,
  SettingsIcon,
  TruckIcon,
} from "@/common/Icons";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <article className="relative">
      <button
        onClick={toggleSidebar}
        className={`fixed top-8 left-60  p-3 bg-white rounded-full z-10  ${
          sidebarVisible ? "transform rotate-180" : ""
        }`}
      >
        {sidebarVisible ? "<" : ">"}
      </button>

      <section
        className={`${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 fixed h-full w-64 bg-white flex flex-col shadow-sm shadow-grey`}
      >
        <header className="py-8 flex items-center justify-center">
          <div className="font-bold text-xl">
            <Image src="/logo1.png" alt="Logo" width={144.2} height={48} />
          </div>
        </header>
        <hr className="mb-6" />
        <section className="flex-grow flex flex-col gap-5 mx-14">
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center  gap-2"
          >
            <DashboardIcon className="w-6 h-6 mr-2" /> Dashboard
          </CustomLink>
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center  gap-2"
          >
            <ComputerIcon className="w-6 h-6 mr-2" /> My stock
          </CustomLink>
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center  gap-2"
          >
            <PersonsGroupIcon className="w-6 h-6 mr-2" />
            My team
          </CustomLink>
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center  gap-2"
          >
            <NotebookOrdersIcon className="w-6 h-6 mr-2" />
            Orders
          </CustomLink>
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center  gap-2"
          >
            <TruckIcon className="w-6 h-6 mr-2" />
            Shipments
          </CustomLink>
        </section>
        <hr className="my-2" />
        <section className="text-center flex flex-col gap-5 py-1 mx-14">
          <CustomLink
            href={"#"}
            className="py-2 w-full flex items-center gap-2 mb-3"
          >
            <SettingsIcon className="w-6 h-6 mr-2" /> Settings
          </CustomLink>
        </section>
      </section>
    </article>
  );
};

export default Sidebar;
