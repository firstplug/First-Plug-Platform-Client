"use client";
import { ReactNode, useEffect } from "react";
import { Navbar, Sidebar, Aside } from "@/components";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { User } from "@/types";

interface RootLayoutProps {
  children: ReactNode;
}

export default observer(function RootLayout({ children }: RootLayoutProps) {
  const store = useStore();
  if (!store) return null;
  const {
    user: { setUser },
  } = store;
  const session = useSession();
  useEffect(() => {
    if (session.data) {
      const loggedUser: User = {
        _id: session.data.user._id,
        name: session.data.user.name,
        image: session.data.user.image,
        email: session.data.user.email,
        password: null,
        accessToken: session.data.backendTokens.accessToken,
      };

      setUser(loggedUser);
    }
  }, [session]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        {children}
        <Aside />
      </div>
    </div>
  );
});
