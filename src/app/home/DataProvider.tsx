"use client";
import { EmptyCard, EmptyCardLayout, LoaderSpinner } from "@/common";
import { setAuthInterceptor } from "@/config/axios.config";
import { useStore } from "@/models";
import { TeamServices } from "@/services";
import { observer } from "mobx-react-lite";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";

interface DataProvidersProps {
  children: ReactNode;
}

// const transformData = (members, teams) => {
//   const teamMap = teams.reduce((acc, team) => {
//     acc[team._id] = team;
//     return acc;
//   }, {});

//   const transformedMembers = members.map((member) => ({
//     ...member,
//     team: teamMap[member.team._id]
//       ? teamMap[member.team._id].name
//       : member.team.name,
//   }));

//   return transformedMembers;
// };

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
          setFetchMembers(true);

          try {
            const teamRes = await TeamServices.getAllTeams();
            setTeams(teamRes);

            await fetchMembers();
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setFetchMembers(false);
          }

          try {
            setFetchStock(true);
            await fetchStock();
          } catch (error) {
            console.error("Error fetching stock:", error);
          } finally {
            setFetchStock(false);
            setIsLoading(false);
          }
        }
      }
    };

    setup();
  }, [
    session,
    setUser,
    setProducts,
    setOrders,
    setShipments,
    setTeams,
    setFetchMembers,
    setFetchStock,
    fetchMembers,
    fetchStock,
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
