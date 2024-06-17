"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { AlertType } from "@/types/alerts";
import { useRouter } from "next/navigation";
function CheckIcon() {
  return <img src="/svg/checkIcon.svg" alt="" />;
}

interface IConfig {
  title: string;
  description: string;
  closeAction: () => void;
}

export default observer(function AlertProvider() {
  const {
    alerts: { alertType, setAlert },
  } = useStore();
  const router = useRouter();
  const Config: Record<AlertType, IConfig> = {
    csvSuccess: {
      title: "Congratulations!",
      description: " The csv file has been uploaded successfully.",
      closeAction: () => {
        setAlert(undefined);
        location.reload();
      },
    },
    updateMember: {
      title: " Success",
      description: " Your Member has been successfully updated to your team.",
      closeAction: () => {
        setAlert(undefined);
        location.reload();
      },
    },
    updateStock: {
      title: " Success",
      description: " Your product has been successfully updated to your stock.",
      closeAction: () => {
        setAlert(undefined);
        location.reload();
      },
    },
    createMember: {
      title: " Success",
      description: " Your Member has been successfully added to your team.",
      closeAction: () => {
        setAlert(undefined);
        router.push("/home/my-team");
        location.reload();
      },
    },
    createProduct: {
      title: " Success",
      description: " Your product has been created successfully.",
      closeAction: () => {
        setAlert(undefined);
        router.push("/home/my-stock");
      },
    },
    deleteMember: {
      title: " Success",
      description: " The member has been successfully deleted.",
      closeAction: () => {
        setAlert(undefined);
        location.reload();
        router.push("/home/my-team");
      },
    },
    errorDeleteStock: {
      title: " Error",
      description:
        " There was an error deleting the product. Please try again.",
      closeAction: () => {
        setAlert(undefined);
        router.push("/home/my-team");
      },
    },
    errorDeleteMember: {
      title: " Error",
      description:
        "There was an error deleting this memeber. Please try again.",
      closeAction: () => {
        setAlert(undefined);
        location.reload();
      },
    },
  };
  if (!alertType) return null;
  const { description, title, closeAction } = Config[alertType];

  return (
    <Dialog.Root open={alertType !== undefined}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
        <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-96">
          <Dialog.Title className="text-center flex justify-center flex-col items-center">
            <div className="p-1 rounded-full bg-success/50 animate-pulse">
              <CheckIcon />
            </div>
            <h2 className="font-semibold text-black text-2xl">{title}</h2>
          </Dialog.Title>
          <Dialog.Description className="text-lg text-center my-2 ">
            {description}
          </Dialog.Description>
          <div className="mt-4 flex justify-end">
            <Dialog.Close asChild>
              <button
                className="px-4 py-2 bg-blue text-white rounded"
                onClick={closeAction}
              >
                close
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});
