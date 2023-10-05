"use client";

import Button from "@/common/Button";
import Input from "@/common/Input";
import Form from "@/components/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth.services";
import useInput from "@/hooks/useInput";

export default function Register() {
  const nameInput = useInput("", "required");
  const emailInput = useInput("", "email");
  const passWordInput = useInput("", "password");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await AuthServices.register({ fullname, email, password });
      router.push("/user-register");
    } catch (error) {
      console.error(error);
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
        <Form title="Welcome Back!" register onSubmit={handleSubmit}>
          <div className="my-0">
            <Input title="Full Name" placeholder="Placeholder" {...nameInput} />

            <Input title="Email" placeholder="user@mail.com" {...emailInput} />

            <Input
              title="Password"
              placeholder="Password"
              type="password"
              {...passWordInput}
            />
          </div>

          <Button
            body="Create Account"
            variant="primary"
            className="rounded-md h-12"
            size="big"
          />
        </Form>
      </article>
    </section>
  );
}
