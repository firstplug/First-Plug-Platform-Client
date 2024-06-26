"use client";
import { EmptyCard, EmptyCardLayout } from "@/common";
import { setAuthInterceptor } from "@/config/axios.config";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";

interface DataProvidersProps {
  children: ReactNode;
}

export default observer(function DataProvider({
  children,
}: DataProvidersProps) {
  const store = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  const {
    user: { setUser },
    setMainLoader,
  } = store;
  const { fetchMembers, fetchStock } = useFetch();

  useEffect(() => {
    const setup = async () => {
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
          tenantName: session.data.user.tenantName,
        });

        if (sessionStorage.getItem("accessToken")) {
          setAuthInterceptor(sessionStorage.getItem("accessToken"));

          try {
            await fetchMembers();
            await fetchStock();
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setMainLoader(false);
          }
        }
      }
    };

    setup();
  }, [session]);

  const tenantNameExists = session.data?.user?.tenantName;

  if (!tenantNameExists && !isLoading) {
    return (
      <div className="h-[100vh] p-10">
        <EmptyCardLayout>
          <EmptyCard type="registerok" />
        </EmptyCardLayout>
      </div>
    );
  }

  return <div>{children}</div>;
});
