"use client";
import Image from "next/image";
import { Button, CustomLink, Input, LoaderSpinner } from "@/common";
import { Form } from "@/components";
import { useRouter } from "next/navigation";
import useInput from "@/hooks/useInput";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";

export default function Login() {
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

      router.push("/home/dashboard");
    } catch (error) {
      //TODO : Look for pop alerts with good ui
      alert("Error at Login");
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
          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink>

          <Button
            disabled={isLoading}
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
