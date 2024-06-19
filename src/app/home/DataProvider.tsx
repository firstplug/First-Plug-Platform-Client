"use client";
import { EmptyCard, EmptyCardLayout, LoaderSpinner } from "@/common";
import { setAuthInterceptor } from "@/config/axios.config";
import useFetch from "@/hooks/useFetch";
import { useStore } from "@/models";
import { TeamServices } from "@/services";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
interface DataProvidersProps {
  children: ReactNode;
}
export default observer(function DataProvider({
  children,
}: DataProvidersProps) {
  const store = useStore();
  const [isLoading, setIsLoading] = useState(true);
  const session = useSession();
  const { fetchMembers, fetchStock } = useFetch();
  const {
    user: { setUser },
    members: { setFetchMembers },
    products: { setProducts, setFetchStock },
    shipments: { setShipments },
    orders: { setOrders },
    teams: { setTeams },
  } = store;

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
        tenantName: session.data.user.tenantName,
      });

      if (sessionStorage.getItem("accessToken")) {
        setAuthInterceptor(sessionStorage.getItem("accessToken"));
        fetchMembers();
        fetchStock();
        TeamServices.getAllTeams().then((res) => {
          setTeams(res);
        });

        setIsLoading(false);
      }
    }
  }, [
    session,
    setUser,
    setProducts,
    setOrders,
    setShipments,
    setTeams,
    setFetchMembers,
    setFetchStock,
  ]);

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
