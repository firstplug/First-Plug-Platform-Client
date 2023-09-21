import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Layout from "@/common/Layout";

import Image from "next/image";
import notFound from "../../public/svg/not-found.svg";
import Navbar from "@/components/Navbar";

export default function NotFount() {
  return (
    <>
      <Navbar title="logo" />
      <Layout>
        <section className="flex flex-col justify-center items-center h-full min-h-[40vh] gap-8 mx-[40px] my-[32px] border border-boder rounded-lg shadow-md">
          <Image src={notFound} alt="alerts" width={221} height={220} />
          <h2 className="font-montserrat font-bold text-[64px] text-dark-grey">
            404
          </h2>
          <p className="font-xl font-inter text-center text-dark-grey">
            Sorry! Something went wrong. Please try again
          </p>
          <div>
            <CustomLink href="/">
              <Button
                body="Go Home"
                variant="primary"
                className="w-32 h-12 text-lg rounded-md"
              />
            </CustomLink>
          </div>
        </section>
      </Layout>
    </>
  );
}
