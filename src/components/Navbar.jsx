import React from "react";
import Button from "@/common/Button";
import SearchInput from "@/common/SearchInput";

import {
  ShopIcon,
  NotificationIcon,
  DropDownArrow,
  UserIcon,
} from "@/common/Icons";
import Input from "@/common/Input";
export default function Navbar({ title, searchInput, placeholder }) {
  return (
    <nav className="flex justify-between p-3 w-ful items-center border ">
      <div className="flex gap-4 items-center">
        <h1 className="font-bold text-2xl text-black">{title || ""}</h1>
        {searchInput && (
          <SearchInput className="w-30" placeholder={placeholder} />
        )}
      </div>
      <div className="flex gap-2 items-center justify-around  ">
        <Button
          icon={<ShopIcon />}
          body={"Shop"}
          variant={"text"}
          size={"small"}
          className={"py-2 px-4 bg-none"}
        />
        <Button
          icon={<NotificationIcon />}
          variant={"text"}
          className={"hover:bg-none "}
        />
        <div className="flex items-centerp-0 rounded-md hover:bg-light-grey ">
          <UserIcon className={"h-28 text-blue"} />
          <Button icon={<DropDownArrow />} />
        </div>
      </div>
    </nav>
  );
}
