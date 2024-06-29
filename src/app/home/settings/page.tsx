"use client";
import { BillingForm, CompanyForm, AccessForm } from "@/components";
import { PageLayout } from "@/common";
import { useEffect, useState } from "react";
import { UserZod } from "@/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { UserServices } from "@/services/user.services";
import { getSession } from "next-auth/react";
import { BarLoader } from "@/components/Loader/BarLoader";

import SettingsForm from "./SettingsForm";
export default observer(function Settings() {
  const {
    user: { user, setUser },
    alerts: { setAlert },
  } = useStore();

  const [state, setState] = useState<UserZod>({ ...user });

  const [isUpdating, setIsUpdating] = useState(false);
  const session = getSession();
  useEffect(() => {
    session.then((res) => {
      setUser(res.user);
    });
  }, []);

  const handleUpdateUser = async () => {
    setIsUpdating(true);
    try {
      await UserServices.updateUser(state);
      setAlert("userUpdatedSuccesfully");
    } catch (error) {
      console.log(error);
      setAlert("errorUpdateTeam");
    } finally {
      setIsUpdating(false);
    }
  };
  return (
    <PageLayout>
      {!user ? (
        <BarLoader />
      ) : (
        <section className="h-full flex flex-col gap-2">
          <SettingsForm />
          {/* <div className="flex flex-col gap-4  h-[90%] max-h-[90%] overflow-y-auto">
            <div className="flex w-full gap-4 ">
              <CompanyForm handleInput={handleInput} />
              <AccessForm handleInput={handleInput} />
            </div>
            <BillingForm handleInput={handleInput} />
          </div> */}
        </section>
      )}
    </PageLayout>
  );
});
