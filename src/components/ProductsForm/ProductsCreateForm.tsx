"use client";
import { useForm } from "react-hook-form";
import { ProductsFormBase } from "./ProductsFormBase";

export const ProductsCreateForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // con watch suscribo todo el formulario para que vaya tomando lo que se va escribiendo,
    // pero tambien puedo decirle que inputs necesito suscribir
    // xej: const watch = useForm({ mode: "onChange" });
    const onSubmit = (data) => {
        console.log(data);
    };
    console.log(watch());
    console.log(errors);
    
    return (
        <ProductsFormBase
        onsubmit={handleSubmit(onSubmit)}
        buttonText="Create Product"
        register={register}
        formErrors={errors}
        watch={watch}
        />
    );
    };