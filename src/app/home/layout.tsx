"use client";
import { ReactNode, useEffect } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { Memberservices } from "@/services";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();

  const {
    user: { setUser },
  } = store;

  const session = useSession();

  useEffect(() => {
    if (session.data) {
      sessionStorage.setItem(
        "accessToken",
        session.data.backendTokens.accessToken
      );

      setUser({
        _id: session.data.user._id,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
      });

      if (sessionStorage.getItem("accessToken")) {
        Memberservices.getAllMembers().then((res) => {
          store.members.setMembers(res);
        });
      }
    }
  }, [session, store.members]);

  if (!store) return null;
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar />
        <div className="flex-grow overflow-auto  p-4">{children}</div>
        <Aside />
      </div>
    </div>
  );
});
