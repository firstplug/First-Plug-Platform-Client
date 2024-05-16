import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

export const GenericAlertDialog = ({
  open,
  onClose,
  title,
  description,
  buttonText,
  onButtonClick,
}: AlertDialogProps) => {
  return (
    <AlertDialog.Root open={open} onOpenChange={onClose}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-md rounded-md">
          <AlertDialog.Title className="text-lg font-semibold">
            {title}
          </AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm text-gray-500">
            {description}
          </AlertDialog.Description>
          <div className="mt-4 flex justify-end">
            <button onClick={onButtonClick} className="btn btn-primary">
              {buttonText}
            </button>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
