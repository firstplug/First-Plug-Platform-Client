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

type DeleteTypes = "product" | "member";

type ConfigType = {
  title: string;
  description?: string;
  deleteAction: () => void;
};

interface DeleteAlertProps {
  type: DeleteTypes;
}
export function DeleteAction({ type }: DeleteAlertProps) {
  const [open, setOpen] = useState(false);
  const DeleteConfig: Record<DeleteTypes, ConfigType> = {
    product: {
      title: " Are you sure you want to delete this product? 🗑️",
      description: " This product will be permanetly deleted",
      deleteAction: () => {
        setOpen(false);
      },
    },
    member: {
      title: " Are you sure you want to delete this member from your team? 🗑️",
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
