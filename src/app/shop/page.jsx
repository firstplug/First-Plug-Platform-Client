import React from "react";
import Image from "next/image";
import logo from "../../../public/logo1.png";
import SearchInput from "@/common/SearchInput";
import Navbar from "@/components/Navbar";
import Button from "@/common/Button";
import { ChevronRight } from "@/common/Icons";
import waveBottom from "../../../public/waves/Header shape 1.svg";
import waveTop from "../../../public/waves/Header shape 2.svg";
import girlPc from "../../../public/svg/Frame 427321382.svg";
import bagImage from "../../../public/svg/Frame 2608568.svg";
import arrowIcon from "../../../public/svg/Frame 427321381.svg";
import rectangle from "../../../public/svg/Rectangle 518.svg";
const Shop = () => {
  return (
    <>
      <div className="bg-lightBackgroundShop h-screen w-screen relative">
        <nav className="w-full h-[88px] flex justify-between items-center  py-[20px] px-[40px] bg-white ">
          <div className="flex items-center gap-[24px]">
            <Image src={logo} alt="logoFirstPlug" width={193} height={210} />
            <SearchInput
              placeholder="Search by Team, Name or ID Number"
              width={332}
              height={48}
            />
          </div>

          <Navbar />
        </nav>

        <section className="w-[616px] h-[228px] ml-[155px] mt-[140px]">
          <h1 className="font-montserrat text-[48px] font-bold text-black gap-[16px]">
            Coming Soon!
          </h1>
          <p className="font-inter text-[20px] text-dark-grey mb-[24px] mt-[16px]">
            We're excited to reveal that the Firstplug shop is coming soon! Our
            dedicated team is hard at work, handpicking the very best products
            for you.
          </p>
          <Button
            icon={<ChevronRight />}
            body="Dashboard"
            variant="primary"
            size="big"
            className="rounded-lg w-[166px] h-[48px]"
          />
        </section>
        <section className="w-[800px] h-[650px] absolute right-[300px] bottom-[80px]">
          <Image
            src={rectangle}
            alt="rectangle"
            height={50}
            className="absolute left-[12rem] top-[14rem] z-0"
          />
          <Image
            src={girlPc}
            alt="girlPc"
            height={500}
            className="absolute right-3 top-7"
          />
          <Image
            src={bagImage}
            alt="bagImage"
            className="absolute right-[400px] top-4"
          />
          <Image
            src={arrowIcon}
            alt="arrowIcon"
            className="absolute left-[45%]"
          />
        </section>
      </div>
      <Image
        src={waveBottom}
        alt="waveBottom"
        width={700}
        className="absolute bottom-0 left-0"
      />
      <Image
        src={waveTop}
        alt="waveTop"
        width={600}
        className="absolute top-[89px] right-0 "
      />
    </>
  );
};

export default Shop;
