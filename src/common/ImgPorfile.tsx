"use client";
import Image from "next/image";
import React from "react";
import userPhoto from "../../public/UserLogo.jpeg";
import { useSession } from "next-auth/react";

export function ImgPorfile() {
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
      sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  );
}
