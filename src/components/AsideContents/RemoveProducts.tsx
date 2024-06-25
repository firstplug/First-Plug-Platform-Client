import { LOCATION, Location, Product } from "@/types";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ProductDetail from "@/common/ProductDetail";
import { Button, LoaderSpinner } from "@/common";
import useActions from "@/hooks/useActions";
import { useStore } from "@/models";
import useFetch from "@/hooks/useFetch";

interface IRemoveItems {
  product: Product;
  closeAciton: () => void;
}
export function RemoveProducts({ product, closeAciton }: IRemoveItems) {
  const {
    alerts: { setAlert },
    aside: { setAside },
  } = useStore();
  const [isRemoving, setIsRemoving] = useState(false);
  const [newLocation, setNewLocation] = useState<Location>("Our office");

  const { unassignProduct } = useActions();
  const { fetchMembers } = useFetch();

  const {
    members: { selectedMember },
  } = useStore();

  const handleRemoveItems = async () => {
    setIsRemoving(true);
    await unassignProduct({
      location: newLocation,
      product,
      currentMember: selectedMember,
    });
    await fetchMembers();
    setIsRemoving(false);
    setAlert("removeItemSuccesfully");
    closeAciton();
    setAside(undefined);
  };

  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
        <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[65vw]">
          <Dialog.Title className="text-center flex justify-center flex-col items-start">
            <h2 className="font-semibold text-black text-xl">Remove Items</h2>
            <h2 className="font-normal text-black text-md">
              Are you sure you want to remove this items from{" "}
              <strong>{product.assignedMember}</strong>?
            </h2>
          </Dialog.Title>
          <Dialog.Description className="text-lg text-center my-2 ">
            <div className="flex items-start gap-1">
              <div className="w-3/4">
                <ProductDetail product={product} />
              </div>
              <section className="space-y-2 w-1/4 text-sm">
                <p>Please select the Location:</p>
                <select
                  onChange={(e) => setNewLocation(e.target.value as Location)}
                >
                  {LOCATION.filter((e) => e !== "Employee").map((location) => (
                    <option value={location} key={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </section>
            </div>
          </Dialog.Description>
          <div className="mt-4 flex justify-end gap-2">
            <Button
              onClick={closeAciton}
              variant="secondary"
              size="small"
              disabled={isRemoving}
            >
              close
            </Button>

            <Button
              onClick={handleRemoveItems}
              variant="delete"
              size="small"
              disabled={isRemoving}
            >
              Remove
            </Button>

            {isRemoving && <LoaderSpinner />}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
