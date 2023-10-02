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
import SidebarLink from "@/common/SidebarLink";

const Sidebar = () => {
  const [showLogo, setShowLogo] = useState(true);
  const [isSidebarSmall, setIsSidebarSmall] = useState(false);

  const toggleSidebarSize = () => {
    setIsSidebarSmall(!isSidebarSmall);
    setShowLogo(!showLogo);
  };

  return (
    <aside
      className={`h-[99.83vh] flex flex-col shadow-sm shadow-grey transition-all ${
        isSidebarSmall ? "w-20" : "w-64"
      }`}
    >
      <header className={`py-8 flex flex-[-1] h-[80px] mx-6`}>
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
          className={`w-10 h-10 bg-white border border-grey hover:bg-gray-300 rounded-full relative bottom-5 ${
            isSidebarSmall ? "left-[70%]" : "left-[90%]"
          }`}
        />
      </div>

      <section className="flex flex-col flex-[2] gap-4">
        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<DashboardIcon />}
          title="Dashboard"
          href="/home/dashboard"
          isActive
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<ComputerIcon />}
          title="My Stock"
          href="/home/my-stock"
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<PersonsGroupIcon />}
          title="My Team"
          href="/home/my-team"
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<NotebookOrdersIcon />}
          title="Orders"
          href="/home/orders"
        />

        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<TruckIcon />}
          title="Shipments"
          href="/home/shipments"
        />
      </section>

      <hr className="my-2" />

      <section className="flex flex-col flex-[-1] h-12 my-4 gap-4">
        <SidebarLink
          isSmall={isSidebarSmall}
          icon={<SettingsIcon />}
          title="Settings"
          href="/home/settings"
        />
      </section>
    </aside>
  );
};

export default Sidebar;
