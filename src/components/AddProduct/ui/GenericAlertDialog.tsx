import * as Dialog from "@radix-ui/react-dialog";

interface GenericAlertDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const GenericAlertDialog: React.FC<GenericAlertDialogProps> = ({
  open,
  onClose,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed bg-white p-6 rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
          <Dialog.Description className="mt-2">
            {description}
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={onButtonClick}
            >
              {buttonText}
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default GenericAlertDialog;
