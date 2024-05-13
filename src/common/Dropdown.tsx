"use client";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { NavButtonIcon } from "./Icons";
import { useRouter } from "next/navigation";

export function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const session = useSession();

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-white flex items-center"
      >
        <NavButtonIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 z-10">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="text-sm text-gray-500 pl-4 pb-2 font-inter font-semibold mt-2">
              {session?.data?.user?.name || session?.data?.user?.name}
            </div>
            <div className="text-sm text-gray-500 pl-4 pb-4 font-inter font-medium mr-4">
              {session?.data?.user?.email}
            </div>
            <button
              onClick={() => {
                if (!!localStorage.getItem("token")) {
                  localStorage.removeItem("token");
                  router.push("/login");
                }
                if (session.status === "authenticated") {
                  signOut({ callbackUrl: "http://localhost:3000/login" });
                }
              }}
              type="button"
              className="block px-4 py-2 text-sm text-red-500 font-bold"
              role="menuitem"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
