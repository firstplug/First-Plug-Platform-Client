import React from "react";
import Button from "@/common/Button";
import SearchInput from "@/common/SearchInput";
import Image from "next/image";
import Logo from "../../public/logo1.png";
import { ShopIcon, NotificationIcon } from "@/common/Icons";
import DropdownButton from "@/common/Dropdown";
import ImgPorfile from "@/common/ImgPorfile";

export default function Navbar({
  title,
  searchInput,
  placeholder,
  hasNotification,
}) {
  
  return (
    <nav className="flex justify-between items-center pt-6 px-10 pb-3">
      <div className="flex gap-6 items-center">
        {title === "logo" ? (
          <Image src={Logo} alt="Logo" width={140} height="auto" />
        ) : (
          <h1 className="font-bold text-2xl text-black">{title || ""}</h1>
        )}

        {searchInput && <SearchInput placeholder={placeholder} />}
      </div>
      <div className="flex items-center  justify-end gap-2 ">
        <div>
          <Button
            icon={<ShopIcon />}
            body={"Shop"}
            variant={"text"}
            className={"py-2 px-4 bg-none text-sm"}
          />
        </div>
        <div>
          <Button
            icon={
              <NotificationIcon stroke={2} hasNotification={hasNotification} />
            }
            variant={"text"}
            className={"py-2 px-2 hover:bg-none "}
          />
        </div>
        <div className="flex items-center rounded-md hover:bg-light-grey ">
          <div className="relative w-10 h-10 ">
            <ImgPorfile />
          </div>
          <DropdownButton className="py-0 px-2 m-0 " />
        </div>
      </div>
    </nav>
  );
}
