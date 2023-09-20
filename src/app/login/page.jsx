import { AppleIcon, GoogleIcon, MicrosoftIcon } from "@/common/Icons";
import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";

import Image from "next/image";

export default function Login() {
  return (
    <section className="flex">
      <Image
        src="/firstpluigthelast.jpg"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15 object-cover"
      />

      <article className="w-[50%] h-screen">
        <form className="py-40 px-56 w-[950px] h-screen flex flex-col justify-center gap-6">
          <h2 className="text-black font-bold text-3xl font-montserrat">
            Welcome Back!
          </h2>

          <Input title="Email" placeholder="user@mail.com" />
          <Input title="Password" type="password" />

          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink>

          <Button body="Log In" variant="primary" size="big" />

          <div className="flex justify-center items-center gap-4">
            <hr className="border-grey flex-1 " />
            <span className="text-dark-grey flex-2">Or continue with</span>
            <hr className="border-grey  flex-1 " />
          </div>

          <div className="flex justify-center items-center gap-4">
            <Button
              variant="secondary"
              icon={<GoogleIcon className="w-7 h-7" />}
              className="border-none w-1/12 rounded-full"
              size="small"
            />
            <Button
              variant="secondary"
              icon={<AppleIcon className="w-7 h-7" />}
              className="border-none w-1/12 rounded-full"
              size="small"
            />
            <Button
              variant="secondary"
              icon={<MicrosoftIcon className="w-7 h-7" />}
              className="border-none w-1/12 rounded-full"
              size="small"
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <p>Don`t have an account</p>
            <CustomLink href="/login">Sign Up</CustomLink>
          </div>
        </form>
      </article>
    </section>
  );
}
