"use client";
import { BillingForm, CompanyForm, AccessForm } from "@/components";
import { Button, LoaderSpinner, PageLayout } from "@/common";
import { useCallback, useEffect, useState } from "react";
import { CreationTeamMember, User, UserZod, UserZodSchema } from "@/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models";
import { UserServices } from "@/services/user.services";
import { getSession } from "next-auth/react";
import { BarLoader } from "@/components/Loader/BarLoader";
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

  const handleInput = useCallback((key: string, value: unknown) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleUpdateUser = async () => {
    console.log(state);
    setIsUpdating(true);
    try {
      const parsed = UserZodSchema.safeParse(state);
      console.log(parsed);
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
          <div className="flex flex-col gap-4  h-[90%] max-h-[90%] overflow-y-auto">
            <div className="flex w-full gap-4 ">
              <CompanyForm handleInput={handleInput} />
              <AccessForm handleInput={handleInput} />
            </div>
            <BillingForm handleInput={handleInput} />
          </div>

          <section className="flex h-[10%] py-6 items-center justify-end border-t">
            <Button
              body="Cancel"
              variant="secondary"
              className="mr-[20px] w-[200px] h-[40px] rounded-lg"
            />
            <Button
              variant="primary"
              className="mr-[39px] w-[200px] h-[40px] rounded-lg"
              onClick={handleUpdateUser}
              disabled={isUpdating}
            >
              {isUpdating ? <LoaderSpinner /> : "Save"}
            </Button>
          </section>
        </section>
      )}
    </PageLayout>
  );
});
