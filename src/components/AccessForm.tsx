"use client";
import { CustomLink, Input } from "@/common";
import { SettingsSubForm } from "@/app/home/settings/SettingsSubForm";
import { UseFormReturn } from "react-hook-form";

interface Props {
  form: UseFormReturn;
}
export var AccessForm = function AccessForm({ form }: Props) {
  return (
    <section className="w-1/2 flex flex-col gap-5  border rounded-md p-4 ">
      <h2 className="text-xl font-montserrat font-bold text-black">Access</h2>
      <SettingsSubForm form={form} keyValue="email" />

      <div className="flex items-center gap-8">
        <Input type="password" title="Change Password" />
        <CustomLink href="#">Change Password</CustomLink>
      </div>
    </section>
  );
};
