"use client";

import { useState } from "react";
import Button from "@/common/Button";
import Input from "@/common/Input";
import Form from "@/components/Form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthServices } from "@/services/auth.services";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Input
            title="Full Name"
            placeholder="Placeholder"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <Input
            title="Email"
            placeholder="user@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            title="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

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
