"use client";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { useEffect, useState } from "react";
import { FormLayout, PageLayout, SectionTitle } from "@/common";
interface ProductsFormBaseProps {
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText: string;
  register: any;
  formErrors: any;
  watch: any;
}

export const ProductsFormBase = observer(function ({
  onsubmit,
  buttonText,
  register,
  formErrors: error,
  watch,
}: ProductsFormBaseProps) {
  const { products } = useStore();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const categories = products.uniqueProducts.map(
      (product) => product.category
    );
    setCategories(categories);
  }, [products.uniqueProducts]);

  return (
    <div className="relative h-full   w-full  ">
      <div className=" absolute max-h-[90%] h-[90%] w-full   ">
        <div className=" px-10 py-4 rounded-3xl  border  ">
          <SectionTitle className="text-[20px]">Add Product</SectionTitle>
          
          <section className="flex flex-col gap-4 ">
            <div className="  flex items-center gap-7  ">
              <section className="  w-full ">
                <FormLayout>
              <select
                {...register("category", {
                  required: "puedo poner el mensaje de validación",
                  maxLength: {
                    value: 20,
                    message: "Aca el mensaje que quiero que aparezca",
                  },
                  placeholder: "Category",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
                <p>{error.category?.message}</p>
              </select>
              <input
                {...register("name")}
                type="text"
                placeholder="Product Name"
              >
                {error.name?.message}
              </input>
              <button type="submit">{buttonText}</button>
            </FormLayout>
              </section>
              
            </div>
            
          </section>
        </div>
      </div>
    </div>
  );
});

//     <PageLayout>
//       <div className="relative h-full   w-full  ">
//         <div className=" absolute max-h-[90%] h-[90%] w-full overflow-y-auto   ">
//           <div className=" px-10 py-4 rounded-3xl  border  ">
//             <SectionTitle className="text-[20px]">Add Product</SectionTitle>
//             <section>
//               <FormLayout>
//                 <select
//                   {...register("category", {
//                     required: "puedo poner el mensaje de validación",
//                     maxLength: {
//                       value: 20,
//                       message: "Aca el mensaje que quiero que aparezca",
//                     },
//                     placeholder: "Category",
//                   })}
//                   defaultValue=""
//                 >
//                   <option value="" disabled>
//                     Select a Category
//                   </option>
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                   <p>{error.category?.message}</p>
//                 </select>
//                 <input
//                   {...register("name")}
//                   type="text"
//                   placeholder="Product Name"
//                 >
//                   {error.name?.message}
//                 </input>
//                 <button type="submit">{buttonText}</button>
//               </FormLayout>
//             </section>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   );
// });
