"use client";
import Image from "next/image";
import React from "react";
import userPhoto from "../../public/UserLogo.jpeg";
import { useSession } from "next-auth/react";
import Avvvatars from "avvvatars-react";
export function ImgPorfile({ size }: { size?: number }) {
  const session = useSession();

  return session.status === "authenticated" && session?.data?.user ? (
    session?.data?.user?.image ? (
      <Image
        src={session.data.user.image}
        alt="userPhoto"
        className="object-cover rounded-full"
        fill
        priority
      />
    ) : (
      <Avvvatars
        value={session.data.user.email}
        style={"character"}
        size={size || 40}
      />
    )
  ) : null;
}
