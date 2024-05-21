import ProductDetail from "@/common/ProductDetail";
import { useStore } from "@/models";
import { ProductServices } from "@/services";
import { Product } from "@/types";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Loader } from "../Loader";

export var EditProductAside = observer(function EditProductAside() {
  const {
    products: { productToEdit },
  } = useStore();
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    ProductServices.getProductById(productToEdit).then((res) => {
      setProduct(res);
    });
  }, [productToEdit]);
  return product ? (
    <div>
      <p className="font-semibold text-lg">Product To Edit ✒️ </p>
      <ProductDetail product={product} />
    </div>
  ) : (
    <Loader />
  );
});
