import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function AlertRegistrationGranted() {
  return (
    <Alert className="font-inter bg-white bg-opacity-90 p-6 rounded-md shadow-md w-1/3">
            <AlertTitle className="text-xl text-black font-semibold">
              Thank you for registering at FirstPlug!
            </AlertTitle>
            <AlertDescription className="text-md">
              We will soon grant you access. Stay tuned!
            </AlertDescription>
          </Alert>
  );
}

export default AlertRegistrationGranted;