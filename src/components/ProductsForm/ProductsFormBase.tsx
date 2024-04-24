import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { useEffect , useState } from "react";

interface ProductsFormBaseProps {
    onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    buttonText: string;
    register: any;
}

export const ProductsFormBase = observer(function ({ onsubmit, buttonText, register }: ProductsFormBaseProps) {
    const { products } = useStore();
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const categories = products.uniqueProducts.map((product) => product.category);
        setCategories(categories);
    }, [products.uniqueProducts]);

    return (
        <div>
            <form onSubmit={onsubmit}>
                <select {...register("category")} defaultValue="" >
                    <option value="" disabled>Select a Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))                        
                    }
                </select>
                <input {...register("name")} type="text" placeholder="Product Name" />
                <button type="submit">{buttonText}</button>
            </form>
        </div>
    );
});