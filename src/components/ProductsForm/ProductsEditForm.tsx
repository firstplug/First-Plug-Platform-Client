import { useForm } from "react-hook-form";
import { ProductsFormBase } from "./ProductsFormBase";

export const ProductsEditForm = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };
    
    return (
        <ProductsFormBase
        onsubmit={handleSubmit(onSubmit)}
        buttonText="Edit Product"
        register={register}
        />
    );
    };