import Button from "@/common/Button";
import Input from "@/common/Input";
import Form from "@/components/Form";
import Image from "next/image";

export default function page() {
  return (
    <section className="flex">
      <Image
        src="/firstpluig.png"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
      />

      <article className="w-[50%] h-screen flex justify-center">
        <Form title="Welcome Back!" register>
          <Input title="Full Name" placeholder="Placeholder" />
          <Input title="Email" placeholder="user@mail.com" />
          <Input title="Password" type="password" />
          <Button
            body="Create Account"
            variant="primary"
            className="rounded-md h-12"
            size={"big"}
          />
        </Form>
      </article>
    </section>
  );
}
