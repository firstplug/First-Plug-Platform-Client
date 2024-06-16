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
import { Memberservices, ProductServices } from "@/services";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { Loader } from "../Loader";

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
    const [loading, setLoading] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [showRecoverableDialog, setShowRecoverableDialog] = useState(false);
    const {
      products: { deleteProduct, setTable },
      members: { deleteMember },
      alerts: { setAlert },
    } = useStore();

    const handleDelete = async () => {
      try {
        if (!id) {
          throw new Error("Product ID is undefined");
        }
        setLoading(true);
        await ProductServices.deleteProduct(id);
        deleteProduct(id);
        setOpen(false);
        setLoading(false);
        setShowSuccessDialog(true);
        setTimeout(async () => {
          location.reload();
        }, 1500);
      } catch (error) {
        setOpen(false);
        setTimeout(() => {
          setShowErrorDialog(true);
        }, 3000);
      }
    };

    const handleDeleteMember = async () => {
      try {
        if (!id) {
          throw new Error("Member ID is undefined");
        }
        setLoading(true);
        const result = await Memberservices.deleteMember(id);
        deleteMember(result);
        setOpen(false);
        setLoading(false);
        setShowSuccessDialog(true);
        setTimeout(() => {
          location.reload();
        }, 1500);
      } catch (error) {
        setOpen(false);
        setLoading(false);
        setShowErrorDialog(true);
      }
    };

    const checkMemberProducts = async () => {
      try {
        const member = await Memberservices.getOneMember(id);
        const hasRecoverableProducts = member.products.some(
          (product) => product.recoverable
        );

        if (hasRecoverableProducts) {
          setShowRecoverableDialog(true);
          return false;
        }

        return true;
      } catch (error) {
        setShowErrorDialog(true);
        return false;
      }
    };

    const handleTriggerClick = async () => {
      const canDelete = await checkMemberProducts();
      if (canDelete) {
        setOpen(true);
      }
    };

    const DeleteConfig: Record<DeleteTypes, ConfigType> = {
      product: {
        title: " Are you sure you want to delete this product? 🗑️",
        description: "This product will be permanently deleted",
        deleteAction: handleDelete,
      },
      member: {
        title:
          " Are you sure you want to delete this member from your team? 🗑️",
        description: " This member will be permanetly deleted",
        deleteAction: handleDeleteMember,
      },
    };
    const { title, description, deleteAction } = DeleteConfig[type];
    return (
      <>
        <Dialog open={open}>
          <DialogTrigger onClick={handleTriggerClick}>
            <TrashIcon
              className=" text-dark-grey w-[1.2rem] h-[1.2rem] hover:text-error"
              strokeWidth={2}
            />
          </DialogTrigger>
          {!loading ? (
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
                    disabled={loading}
                    variant="delete"
                    onClick={deleteAction}
                    className="w-full bg-error"
                  >
                    <p>Delete</p>
                  </Button>
                </div>
              </DialogDescription>
            </DialogContent>
          ) : (
            <DialogContent>
              <Loader />
            </DialogContent>
          )}
        </Dialog>
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">Success</DialogTitle>
              <DialogDescription className="text-md font-normal">
                {type === "product"
                  ? "The product has been successfully deleted."
                  : "The member has been successfully deleted."}
              </DialogDescription>
            </DialogHeader>
            <DialogDescription className="text-md"></DialogDescription>
          </DialogContent>
        </Dialog>
        <Dialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">Error</DialogTitle>
              <DialogDescription className="text-md font-normal">
                There was an error deleting the {type}. Please try again.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog
          open={showRecoverableDialog}
          onOpenChange={setShowRecoverableDialog}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Cannot Delete Member
              </DialogTitle>
              <DialogDescription className="text-md font-normal">
                Cannot delete a member with recoverable products assigned.
                Please unassign the products first.
              </DialogDescription>
              <Button
                variant="primary"
                onClick={() => setShowRecoverableDialog(false)}
                className="mt-4"
              >
                OK
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </>
    );
  }
);
