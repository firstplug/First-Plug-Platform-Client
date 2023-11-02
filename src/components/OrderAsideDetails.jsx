import Button from "@/common/Button";
import { DownloadIcon } from "@/common/Icons";
import ProductDetail from "@/common/ProductDetail";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

export default observer(function OrderAsideDetails() {
  const { orders } = useStore();
  const selectedOrder = orders.oneOrder();

  console.log(selectedOrder.products);
  return (
    <div>
      <section className="flex flex-col gap-4">
        {selectedOrder.products.map((id) => (
          <ProductDetail key={id} porductId={id} className="" />
        ))}
      </section>

      <div className="flex gap-4 w-full absolute bottom-0">
        <Button
          body="Download Invoice"
          variant={"secondary"}
          size={"big"}
          icon={<DownloadIcon />}
          className={"rounded-md w-3/6 "}
        />
        <Button
          body="Download Payment Details"
          variant={"secondary"}
          size={"big"}
          icon={<DownloadIcon />}
          className={"rounded-md w-4/6 "}
        />
      </div>
    </div>
  );
});
