"use client";

import Link from "next/link";
import { useState } from "react";
import { IconX } from "@/common/Icons";

export default function Aside({ children, title, href, onActive = false }) {
  const [active, setActive] = useState(onActive);

  const handleClick = () => {
    setActive(false);
  };

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 ${
          active ? "backdrop-blur-[1px] bg-grey bg-opacity-50" : ""
        }`}
      ></div>

      {/* aside */}
      <aside
        className={`fixed top-0 right-0 h-full w-[40%] min-w-[600px] shadow-md shadow-gray-400 px-14 py-10 bg-white z-20 transform transition-transform duration-300 ${
          active ? "" : "translate-x-full"
        }`}
      >
        {/* header */}
        <header className="flex justify-between items-center pb-8">
          <h2 className="text-2xl font-sans text-black font-semibold">
            {title}
          </h2>
          <Link href={href} onClick={handleClick}>
            <IconX className="h-8 w-8" />
          </Link>
        </header>

        {children}
      </aside>
    </>
  );
}
