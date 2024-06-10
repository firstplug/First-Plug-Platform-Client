"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import personalData from "./JSON/personaldata.json";
import { InputProductForm } from "../AddProduct/InputProductForm";
import { useFormContext, Controller } from "react-hook-form";

const PersonalData = function ({ memberImage, isUpdate, initialData }) {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (isUpdate) {
      Object.keys(initialData).forEach((key) => {
        setValue(key, initialData[key]);
      });
    }
  }, [isUpdate, initialData, setValue]);

  return (
    <div className="flex items-center gap-7">
      <section className="h-full rounded-[30px] relative">
        <Image
          src={memberImage}
          alt="emptyImage"
          className="object-cover h-full"
        />
      </section>
      <div className="w-full lg:w-full">
        <div
          className={`grid gap-4 ${
            isUpdate
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 lg:grid-cols-3"
          }`}
        >
          {personalData.fields.map((field, index) => (
            <div className="w-full lg:w-full" key={index}>
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
                      allowFutureDates={false}
                    />
                    <div className="min-h-[24px]">
                      {errors[field.name] && (
                        <>
                          <p className="text-red-500">{field.errorMessage}</p>
                        </>
                      )}
                    </div>
                  </>
                )}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default observer(PersonalData);
