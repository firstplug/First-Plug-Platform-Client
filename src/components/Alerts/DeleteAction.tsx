import { Button, TrashIcon } from "@/common";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ProductServices } from "@/services";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

type DeleteTypes = "product" | "member";

type ConfigType = {
  title: string;
  description?: string;
  deleteAction: () => void;
};

interface DeleteAlertProps {
  type: DeleteTypes;
  id: string;
}
export const DeleteAction: React.FC<DeleteAlertProps> = observer(
  ({ type, id }) => {
    const [open, setOpen] = useState(false);
    const {
      products: { deleteProduct, setTable },
    } = useStore();

    const handleDelete = async () => {
      try {
        await ProductServices.deleteProduct(id);
        deleteProduct(id);
        setTable(await ProductServices.getTableFormat());
        setOpen(false);
      } catch (error) {
        console.log("Error deleting product", error);
      }
    };

    const DeleteConfig: Record<DeleteTypes, ConfigType> = {
      product: {
        title: " Are you sure you want to delete this product? 🗑️",
        description: " This product will be permanetly deleted",
        deleteAction: handleDelete,
      },
      member: {
        title:
          " Are you sure you want to delete this member from your team? 🗑️",
        description: " This member will be permanetly deleted",
        deleteAction: () => {
          setOpen(false);
        },
      },
    };
    const { title, description, deleteAction } = DeleteConfig[type];
    return (
      <Dialog open={open}>
        <DialogTrigger onClick={() => setOpen(true)}>
          <TrashIcon color="red" strokeWidth={2} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl   ">{title}</DialogTitle>
            <DialogTitle className="text-md font-normal">
              {description}
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-md   ">
            <div className="flex items-center gap-2">
              <Button
                variant="secondary"
                onClick={() => setOpen(false)}
                className="w-full "
              >
                <p>Cancel</p>
              </Button>
              <Button
                variant="delete"
                onClick={deleteAction}
                className="w-full bg-error"
              >
                <p>Delete</p>
              </Button>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    );
  }
);
