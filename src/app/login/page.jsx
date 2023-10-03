"use client";
import Image from "next/image";
import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Form from "@/components/Form";
import { useState } from "react";
import { AuthServices } from "@/services/auth.services";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSumbit = async (e) => {
    e.preventDefault();

    try {
      await AuthServices.login({ email, password });
      router.push("/home/dashboard");
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
        <Form title="Welcome Back!" login onSubmit={handleSumbit}>
          <Input
            title="Email"
            placeholder="user@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            title="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink>
          <Button
            body="Log In"
            variant="primary"
            className="rounded-md "
            size="big"
          />
        </Form>
      </article>
    </section>
  );
}
