"use client";
import { BillingForm, Card, CompanyForm, AccessForm } from "@/components";
import { Layout, Button, PageLayout } from "@/common";
import { VisaIcon } from "@/common/Icons";
import { useCallback, useState } from "react";
import { CreationTeamMember } from "@/types";
export default function Settings() {
  const [state, setState] = useState<CreationTeamMember>({
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
    position: "",
    personalEmail: "",
    phone: "",
    city: "",
    country: "",
    zipCode: "",
    address: "",
    apartment: "",
    additionalInfo: "",
    startDate: "",
    birthDate: "",
    team: "",
    isDeleted: false,
  });
  const handleInput = useCallback((key: string, value: unknown) => {
    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return (
    <PageLayout>
      <section className="h-full flex flex-col ">
        <div className="flex flex-col gap-4  h-[90%] max-h-[90%] overflow-y-auto">
          <div className="flex w-full gap-4 ">
            <CompanyForm handleInput={handleInput} />
            <AccessForm handleInput={handleInput} />
          </div>
          <BillingForm handleInput={handleInput} />
        </div>

        <section className="flex h-[10%] items-center justify-end py-4">
          <Button
            body="Cancel"
            variant="secondary"
            className="mr-[20px] w-[200px] h-[40px] rounded-lg"
          />
          <Button
            body="Save"
            variant="primary"
            className="mr-[39px] w-[200px] h-[40px] rounded-lg"
          />
        </section>
      </section>
    </PageLayout>
  );
}
