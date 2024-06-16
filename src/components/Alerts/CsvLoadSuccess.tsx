import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
function CheckIcon() {
  return <img src="/svg/checkIcon.svg" alt="" />;
}
export function CsvLoadSuccess() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="bg- p-1 rounded-md px-4">
          <span className="font-bold text-blue">CARGAR</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center flex justify-center flex-col items-center   ">
            <div className="p-1 rounded-full bg-success/50 animate-pulse">
              <CheckIcon />
            </div>
            <h2 className="font-semibold text-black text-2xl">
              Congratulations!
            </h2>
          </DialogTitle>
          <DialogTitle className="text-lg flex justify-center">
            The csv file has been uploaded successfully.
          </DialogTitle>
          <DialogDescription className="text-md   "></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
