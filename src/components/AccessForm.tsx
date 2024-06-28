"use client";
import { useStore } from "@/models";
import { FormInput, Card } from "./";
import { CustomLink } from "@/common";
import { observer } from "mobx-react-lite";

interface Props {
  handleInput: (prop: string, value: unknown) => void;
}
export const AccessForm = observer(function AccessForm({ handleInput }: Props) {
  const {
    user: { user },
  } = useStore();

  return (
    <section className="w-1/2 flex flex-col gap-5  border rounded-md p-4 ">
      <h2 className="text-xl font-montserrat font-bold text-black">Access</h2>
      <div className={`relative   h-24  font-inter `}>
        <label className="block text-dark-grey ml-2 ">Email Address</label>
        <input
          value={user?.email}
          readOnly
          className={`w-full  h-14 py-2 rounded-xl border  text-black p-4 bg-disabled/50 select-none cursor-default  focus:outline-none`}
        />
      </div>

      <div className="flex items-center gap-8">
        <FormInput
          handleInput={handleInput}
          prop="password"
          title="Current Password"
          type="password"
          placeholder="password"
        />
        <CustomLink href="#">Change Password</CustomLink>
      </div>
    </section>
  );
});
