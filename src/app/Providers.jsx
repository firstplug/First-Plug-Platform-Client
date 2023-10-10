"use client";

import { UsersStore, UsersStoreContext } from "@/models/users.store";
import { SessionProvider } from "next-auth/react";
import { AuthServices } from "@/services/auth.services";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { TeamMemberContext, TeamMemberStore } from "@/models/teamMeber.store";

export default function Providers({ children }) {
  const store = UsersStore.create();

  const memberStore = TeamMemberStore.create({ members: [] });

  const router = useRouter();
  const pathname = usePathname();

  const checkUserSession = useCallback(async () => {
    if (pathname === "/") router.push("/login");

    const token = localStorage.getItem("token");
    if (!token && (pathname === "/login" || pathname === "/register")) return;
    if (!token) return router.push("/login");

    await AuthServices.me(token);
    memberStore.loadMembers();

    console.log("USE CALLBAK ");
  }, [pathname, router]);

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <UsersStoreContext.Provider value={store}>
      <TeamMemberContext.Provider value={memberStore}>
        <SessionProvider>{children}</SessionProvider>
      </TeamMemberContext.Provider>
    </UsersStoreContext.Provider>
  );
}
