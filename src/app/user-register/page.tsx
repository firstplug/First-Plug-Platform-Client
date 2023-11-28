"use client";
import Image from "next/image";
import { Button, Layout } from "@/common";
import { IconX } from "../../common/Icons";
import { CreationTeamMember } from "@/types";
import { useState } from "react";
import { AccessForm, BillingForm, CompanyForm } from "@/components";

export default function UserRegister() {
  const [state, setState] = useState<CreationTeamMember>({
    firstName: "",
    img: "",
    lastName: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    jobPosition: "",
    city: "",
    zipCode: "",
    address: "",
    appartment: "",
    joiningDate: "",
    timeSlotForDelivery: "",
    additionalInfo: "",
    image: "",
  });
  const handleInput = (key: string, value: string) => {
    setState((prev: CreationTeamMember) => ({
      ...prev,
      [key]: value,
    }));
    console.log(state);
  };
  return (
    <section className="flex flex-col overflow-auto max-h-[100vh]">
      <header className="relative  flex justify-between p-4 px-10 items-center">
        <Image src="/logo1.png" alt="logoFirstPlug" width={200} height={100} />
        <Button
          icon={<IconX />}
          variant="primary"
          className=" w-[30px] h-[10px] rounded-full  "
        />
      </header>

      <section className="px-6">
        <div className="w-[100%] p-6 flex flex-col gap-4 rounded-xl shadow-lg border border-grey-200 ">
          <section className="  ">
            <h1 className="font-montserrat text-[32px] font-bold text-black ">
              Welcome!
            </h1>
            <p className="font-inter text-[20px] font-normal text-black">
              Please complete all the required fields to create your account.
            </p>
          </section>
          <section className=" flex flex-col gap-4 ">
            <div className="flex gap-4">
              <CompanyForm handleInput={handleInput} />
              <AccessForm handleInput={handleInput} />
            </div>
            <hr />
            <BillingForm handleInput={handleInput} />
          </section>
        </div>
      </section>

      <div className="  py-4 px-10 flex items-center justify-between bg-white">
        <p className="text-error font-inter font-semibold ml-[20px]">
          *Required fields
        </p>
        <Button
          body="Continue"
          variant="primary"
          disabled={true}
          className="mr-[20px] w-[210px] h-[48px]"
        />
      </div>
    </section>
  );
}
