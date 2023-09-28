import Image from "next/image";
import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Form from "@/components/Form";

export default function Login() {
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
        <Form title="Welcome Back!" login>
          <Input title="Email" placeholder="user@mail.com" />
          <Input title="Password" type="password" placeholder="Password" />
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
