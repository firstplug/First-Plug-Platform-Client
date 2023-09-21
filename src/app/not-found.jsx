import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import Layout from "@/common/Layout";

import Image from "next/image";
import notFound from "../../public/svg/not-found.svg";

export default function NotFount() {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center h-[90vh] gap-8 m-10 border border-grey rounded-lg shadow-md">
        <Image src={notFound} alt="alerts" width={221} height={220} />
        <h2 className="font-montserrat font-bold text-[64px] text-dark-grey">
          404
        </h2>
        <p className="font-xl font-inter text-center text-dark-grey">
          Sorry! Something went wrong. Please try again
        </p>
        <div className="w-32 h-12">
          <CustomLink href="/">
            <Button body="Go Home" variant="primary" size="big" />
          </CustomLink>
        </div>
      </section>
    </Layout>
  );
}
