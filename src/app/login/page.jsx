import CustomLink from "@/common/CustomLink";
import { AppleIcon, GoogleIcon, MicrosoftIcon } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <section className="flex">
      <Image
        src="/firstpluigthelast.jpg"
        alt="img"
        width={540}
        height={960}
        className="w-[50%] h-screen p-15"
      />
      <article className="w-[50%] h-screen">
        <form className="py-40 px-52 h-screen flex flex-col justify-center gap-6">
          <h2 className="text-black font-bold text-3xl font-montserrat">
            Welcome Back!
          </h2>

          <Input title="Email" placeholder="user@mail.com" />
          <Input title="Password" type="password" />

          <CustomLink href="/login" className="text-right">
            Forgot Password ?
          </CustomLink>
 
          <div className="flex justify-center items-center gap-4">
            <hr className="border-grey flex-1 " />
            <span className="text-dark-grey flex-2">Or continue with</span>
            <hr className="border-grey  flex-1 " />
          </div>

          <div className="flex justify-center align-center gap-10">
            <CustomLink href="/">
              <GoogleIcon className="w-7 h-7" />
            </CustomLink>
            <CustomLink href="/">
              <AppleIcon className="w-7 h-7" />
            </CustomLink>
            <CustomLink href="/">
              <MicrosoftIcon className="w-7 h-7" />
            </CustomLink>
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
