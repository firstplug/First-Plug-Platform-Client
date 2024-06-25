import { ArrowLeft } from "@/common";
import ProductDetail from "@/common/ProductDetail";
import { Product } from "@/types";
interface IRelacoteProducts {
  products: Product[];
  handleBack: (action: "open" | "close") => void;
}

export function RelacoteProducts({ products, handleBack }: IRelacoteProducts) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-1 font-medium select-none cursor-pointer"
        onClick={() => handleBack("close")}
      >
        <ArrowLeft />
        <p>Back</p>
      </div>
      {products.map((product) => (
        <ProductDetail product={product} isRelocating />
      ))}
    </div>
  );
}
