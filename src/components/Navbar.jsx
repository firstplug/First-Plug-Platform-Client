import React from "react";
import Button from "@/common/Button";
import SearchInput from "@/common/SearchInput";
import userPhoto from "../../public/UserLogo.jpeg";
import {
  ShopIcon,
  NotificationIcon,
  DropDownArrow,
  UserIcon,
} from "@/common/Icons";
export default function Navbar({
  title,
  searchInput,
  placeholder,
  hasNotification,
}) {
  return (
    <nav className="flex justify-between items-center   border pt-6 px-10 pb-3">
      <div className="flex gap-6 items-center">
        <h1 className="font-bold text-2xl text-black">{title || ""}</h1>
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
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/0e5c/b90b/8ba04ae79ee6443d2640a49b9558b040?Expires=1696204800&Signature=n7xrmsX3JEPK4KSnRKmFBcEJyzQ1VTO7wVNCL7DjbfsAcWPl91or3uyXP5INsh~SwjLxMKSxzGOCi4PazH4r1Q~ifciymMmh5eoU6S9CURrc6vW5ls7AtDT7xPTEXOn3-vqjOm-tXt1dvSp4~0Qe1RRCkjT~vrZL4JU~GAw9QYvgYNqlg-bxhQnfY1swiY-j0jY3YHD8z3AVHCm2ZHVtfdCy43wET1~9p6qWBS1oy6HIKggkv5us9dQNSsPeF1azmE2O55XvnvfYysfY98JdDoMEMUT-9WfHkzXAVdcxlfGvsUnIgvaSAcP3M7nwz8jMcqN29a5Dtb3BGxBysFVJLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt="userfoto"
            className="w-10 h-10 object-cover m-0 rounded-full"
          />
          <Button icon={<DropDownArrow />} className={"py-0 px-2 m-0 "} />
        </div>
      </div>
    </nav>
  );
}
