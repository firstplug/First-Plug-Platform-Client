import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/react-dialog";

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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
        <DialogClose asChild>
          <button onClick={onButtonClick}>{buttonText}</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default GenericAlertDialog;
