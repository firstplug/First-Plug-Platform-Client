import { useForm } from "react-hook-form";
import { ProductsFormBase } from "./ProductsFormBase";

export const ProductsCreateForm = () => {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    };
    
    return (
        <ProductsFormBase
        onsubmit={handleSubmit(onSubmit)}
        buttonText="Create Product"
        register={register}
        />
    );
    };