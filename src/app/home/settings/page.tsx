"use client";
import { PageLayout } from "@/common";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { getSession } from "next-auth/react";
import { BarLoader } from "@/components/Loader/BarLoader";

import SettingsForm from "./SettingsForm";
export default observer(function Settings() {
  const {
    user: { user, setUser },
    alerts: { setAlert },
  } = useStore();

  const session = getSession();
  useEffect(() => {
    session.then((res) => {
      setUser(res.user);
    });
  }, []);

  return (
    <PageLayout>
      {!user ? (
        <BarLoader />
      ) : (
        <section className="h-full flex flex-col gap-2">
          <SettingsForm />
        </section>
      )}
    </PageLayout>
  );
});
