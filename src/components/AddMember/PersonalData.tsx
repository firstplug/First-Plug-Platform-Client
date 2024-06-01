"use client";
import React from "react";
import Image from "next/image";
import { IconX } from "@/common/Icons";
import { Button } from "@/common";
import { observer } from "mobx-react-lite";
import personalData from "./JSON/personaldata.json";
import { InputProductForm } from "../AddProduct/InputProductForm";
import { useFormContext, Controller } from "react-hook-form";

const PersonalData = function ({ memberImage, isUpdate, initialData }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex items-center gap-7">
      <section className="h-full rounded-[30px] relative">
        <Image
          src={memberImage}
          alt="emptyImage"
          className="object-cover h-full"
        />
        <Button
          icon={<IconX strokeWidth={2.0} />}
          variant="primary"
          className="w-1 h-5 absolute bottom-0 left-[110px] z-[1] py-4 px-4 rounded-full"
        />
      </section>
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {personalData.fields.map((field, index) => (
            <div key={index}>
              <Controller
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <>
                    <InputProductForm
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      title={field.title}
                      value={controllerField.value || ""}
                      onChange={controllerField.onChange}
                      required={"required"}
                    />
                    <div className="min-h-[24px]">
                      {errors[field.name] && (
                        <p className="text-red-500">
                          {String(errors[field.name]?.message)}
                        </p>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default observer(PersonalData);
