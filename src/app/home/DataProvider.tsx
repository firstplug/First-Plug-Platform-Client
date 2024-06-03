"use client";
import { EmptyCard, EmptyCardLayout, LoaderSpinner } from "@/common";
import { setAuthInterceptor } from "@/config/axios.config";
import { useStore } from "@/models";
import { Memberservices, ProductServices, TeamServices } from "@/services";
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

  const {
    user: { setUser },
    members: { setMembers },
    products: { setProducts, setTable },
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
        Memberservices.getAllMembers().then((res) => {
          setMembers(res);
        });
        ProductServices.getTableFormat().then((res) => {
          setTable(res);
        });
        TeamServices.getAllTeams().then((res) => {
          setTeams(res);
        });

        setIsLoading(false);
      }
    }
  }, [session, setUser, setMembers, setProducts, setOrders, setShipments]);

  const tenantNameExists = session.data?.user?.tenantName;
  if (isLoading) {
    return <LoaderSpinner />;
  }

  if (!tenantNameExists) {
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
