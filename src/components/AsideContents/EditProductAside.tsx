import ProductDetail from "@/common/ProductDetail";
import { useStore } from "@/models";
import { ProductServices } from "@/services";
import { Product } from "@/types";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";
import ProductForm from "../AddProduct/ProductForm";

export var EditProductAside = observer(() => {
  const {
    products: { productToEdit },
  } = useStore();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    console.log("Product to edit", productToEdit);
    if (productToEdit) {
      ProductServices.getProductById(productToEdit).then((res) => {
        setProduct(res);
      });
    }
  }, [productToEdit]);

  return product ? (
    <div>
      {/* <div>
        <p className="font-semibold text-lg">Product To Edit ✒️ </p>
        <ProductDetail product={product} />
      </div> */}
      <div>
        <ProductForm initialData={product} isUpdate={true} />
      </div>
    </div>
  ) : (
    <Loader />
  );
});
