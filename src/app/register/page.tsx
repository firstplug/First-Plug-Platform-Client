"use client";

import { AlertCheck, Button, Input, LoaderSpinner } from "@/common";
import { Form } from "@/components";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth.services";
import useInput from "@/hooks/useInput";
import { FormEvent, useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Register() {
  const nameInput = useInput("", "userName");
  const emailInput = useInput("", "email");
  const passwordInput = useInput("", "password");
  const confirmPasswordInput = useInput("", "password");

  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await AuthServices.register({
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
      });
      toast({
        title: "Resgister Successfully",
        variant: "success",
        action: <AlertCheck />,
        duration: 1500,
      });
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false);
        router.push("/login");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showAlert, router]);

  const sumbtiValidation =
    !nameInput.value ||
    nameInput.error !== null ||
    !emailInput.value ||
    emailInput.error !== null ||
    !passwordInput.value ||
    passwordInput.error !== null ||
    confirmPasswordInput.value !== passwordInput.value;

  return (
    <>
      <section className="flex">
        <Image
          src="/firstpluig.png"
          alt="img"
          width={540}
          height={960}
          className="w-[50%] h-screen  object-cover"
          priority
        />

        <article className="w-[50%] h-screen flex justify-center">
          <Form title="Welcome Back!" register onSubmit={handleSubmit}>
            <div>
              <Input
                title="Full Name"
                placeholder="Placeholder"
                {...nameInput}
              />

              <Input
                title="Email"
                placeholder="user@mail.com"
                {...emailInput}
              />

              <Input
                title="Password"
                placeholder="Password"
                type="password"
                {...passwordInput}
              />
              <Input
                isLogin
                title="Password"
                placeholder="Confirm Password"
                type="password"
                {...confirmPasswordInput}
              />
            </div>

            <Button
              disabled={sumbtiValidation}
              variant={isLoading ? "text" : "primary"}
              className="rounded-md "
              size="big"
              onClick={handleSubmit}
            >
              {isLoading && <LoaderSpinner />}
              Create Account
            </Button>
          </Form>
        </article>
      </section>
      {showAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <Alert className="font-inter bg-white bg-opacity-90 p-6 rounded-md shadow-md w-1/3">
            <AlertTitle className="text-xl text-black font-semibold">
              Thank you for registering at FirstPlug!
            </AlertTitle>
            <AlertDescription className="text-md">
              We will soon grant you access. Stay tuned!
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}
