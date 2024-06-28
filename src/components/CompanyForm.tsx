"use client";
import Image from "next/image";
import { FormInput } from "./";
import Group from "public/svg/Group 133544.svg";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { ImgPorfile } from "@/common";

interface CompanyProps {
  handleInput: (key: string, value: unknown) => void;
}
export var CompanyForm = observer(function CompanyForm({
  handleInput,
}: CompanyProps) {
  const {
    user: { user },
  } = useStore();

  return (
    <section className="w-1/2 flex flex-col gap-5  border rounded-md p-4 ">
      <h2 className="text-xl font-montserrat font-bold text-black">User</h2>
      <div className="flex gap-8 items-center">
        <ImgPorfile size={150} />
        <div className="w-3/4 flex flex-col gap-4">
          <div className={`relative   h-24  font-inter `}>
            <label className="block text-dark-grey ml-2 ">Company Name</label>
            <input
              value={user?.tenantName}
              readOnly
              className={`w-full  h-14 py-2 rounded-xl border  text-black p-4 bg-disabled/50 select-none cursor-default  focus:outline-none`}
            />
          </div>
          <FormInput
            type="number"
            handleInput={handleInput}
            prop="phone"
            title="Contact Phone Number"
            placeholder="+54 11 11111111"
          />
        </div>
      </div>
    </section>
  );
});
