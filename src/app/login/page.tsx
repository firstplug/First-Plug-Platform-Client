"use client";
import Image from "next/image";
import { Button, Input, LoaderSpinner } from "@/common";
import { Form } from "@/components";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { AlertCheck, IconX } from "@/common/Icons";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Login() {
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        email: emailInput.value,
        password: passWordInput.value,
        redirect: false,
      });

      if (!res.ok) {
        throw new Error(res.error);
      }
      toast({
        title: "Logged in successfuly",
        variant: "success",
        action: <AlertCheck />,
        duration: 1500,
      });
      router.push("/home/dashboard");
    } catch (error) {
      toast({
        title: "Invalid Credentials",
        variant: "destructive",
        action: (
          <div className="border border-error rounded-full p-1">
            <IconX className="text-error w-3" strokeWidth={2} />
          </div>
        ),
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="flex">
      <Image
        src="/firstpluig.png"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
        priority
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" login onSubmit={handleSumbit}>
          <div>
            <Input
              title="Email"
              placeholder="user@mail.com"
              {...emailInput}
              required
            />

            <Input
              title="Password"
              type="password"
              placeholder="Password"
              {...passWordInput}
              required
            />
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <div className=" flex justify-end">
                <Button variant="text">Forgot Password ?</Button>
              </div>
            </AlertDialogTrigger>
            <AlertDialogContent className="font-inter">
              <AlertDialogHeader>
                <AlertDialogTitle>
                  <h2 className="text-xl text-black font-semibold ">
                    Forgot Password ?
                  </h2>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="text-md ">
                    <p>
                      Looks like you&apos;ve forgotten your password. Don&apos;t
                      worry, we&apos;ve got you covered. Simply send an email to
                      <b className="text-black "> hola@firstplug.co </b>
                      requesting a password reset, and we&apos;ll get you back
                      into your account in no time.
                    </p>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>OK</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            disabled={
              isLoading ||
              !emailInput.value ||
              !passWordInput.value ||
              emailInput.error !== null
            }
            type="submit"
            variant={isLoading ? "text" : "primary"}
            className="rounded-md "
            size="big"
          >
            {isLoading && <LoaderSpinner />}
            Log In
          </Button>
        </Form>
      </article>
    </section>
  );
}
