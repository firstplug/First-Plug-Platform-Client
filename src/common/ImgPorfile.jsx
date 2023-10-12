"use client";
import Image from "next/image";
import React from "react";
import userPhoto from "../../public/UserLogo.jpeg";
import { useSession } from "next-auth/react";

export default function ImgPorfile() {
  const session = useSession();

  return (
    <Image
      src={
        session.status === "authenticated" && session?.data?.user?.image
          ? session?.data?.user?.image
          : userPhoto
      }
      alt="userPhoto"
      className="object-cover rounded-full"
      fill
      priority
    />
  );
}
