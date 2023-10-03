import Image from "next/image";

import CustomLink from "@/common/CustomLink";
import Button from "@/common/Button";
import Input from "@/common/Input";

import { IconX } from "../../common/Icons";
import DropdownInput from "@/common/DropdownInput";

const UserRegister = () => {
  const country = ["Argentina"];
  const cities = ["Buenos Aires"];
  const states = ["Escobar"];
  return (
    <>
      <header className="relative h-[84px] pb-[12px] px-[60px] flex justify-start items-center">
        <Image src="/logo1.png" alt="logoFirstPlug" width={200} height={100} />
        <Button
          icon={<IconX />}
          variant="primary"
          className="rounded-3xl w-[30px] h-[30px] absolute mt-[650px] ml-[170px] z-[1] "
        />
      </header>

      <section className="h-[100vh] overflow-auto px-[60px]">
        <div className="w-[100%] h-auto py-[45px] px-[20px]  rounded-[16px] shadow-lg border border-grey-200 ">
          <section className=" px-[32px] ">
            <h1 className="font-montserrat text-[32px] font-bold text-black ">
              Welcome!
            </h1>
            <p className="font-inter text-[20px] font-normal text-black">
              Please complete all the required fields to create your account.
            </p>
          </section>
          <section className="pt-[16px] px-[32px] gap-[28px] ">
            {/* PRIMER DIV */}
            <div className=" w-[100%] h-[152px] flex items-center gap-6">
              <span className=" w-[152px] h-[152px] rounded-[30px] relative">
                <Image
                  src="/svg/Group 133544.svg"
                  alt="emptyImage"
                  className="object-cover w-full h-full"
                  fill
                />
              </span>
              <span className=" h-[148px] w-[100%]  ">
                <div className=" flex-grow flex items-center">
                  <Input
                    className="mr-4 font-inter text-[14px] w-[328px]"
                    title="Company Name*"
                    placeholder="Company Name"
                  />
                  <Input
                    className="font-inter text-[14px] w-[328px]"
                    title="Contact Phone Number*"
                    placeholder="+54 11 11111111 "
                    type="tel"
                  />
                </div>
              </span>
            </div>
            {/* PRIMER DIV */}
            <hr className="mt-4 mb-4" />
            {/* SEGUNDO DIV */}
            <div className="w-[100%] h-[auto]">
              <p className="font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px]">
                Billing information
              </p>
              <div className=" w-[100%]  grid grid-cols-4 gap-y-7 ">
                <DropdownInput
                  className="mr-4 font-inter text-[14px] w-[full]"
                  placeholder="Country"
                  title="Country"
                  options={country}
                />
                <DropdownInput
                  className="mr-4 font-inter text-[14px] w-[full]"
                  placeholder="City"
                  title="City"
                  options={cities}
                />
                <DropdownInput
                  className="mr-4 font-inter text-[14px] w-[full]"
                  placeholder="State"
                  title="State"
                  options={states}
                />

                <Input
                  title="Zip Code*"
                  type="text"
                  placeholder="1123"
                  className="mr-4 font-inter text-[14px]"
                />
                <div className="col-span-2 grid grid-cols-2  gap-y-16">
                  <Input
                    title="Address*"
                    type="text"
                    placeholder="Armenia 3425"
                    className="mr-4 font-inter text-[14px] "
                  />
                  <Input
                    title="Appartment, Suite, etc*"
                    type="text"
                    placeholder="PB B "
                    className="mr-4 font-inter text-[14px] "
                  />
                </div>
              </div>
            </div>
            {/* SEGUNDO DIV */}
            <hr className="mt-4 mb-4" />
            {/* TERCER DIV */}
            <div>
              <p className="font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px]">
                Access information
              </p>
              <div className=" w-[100%] h-[128px] flex-grow flex items-center gap-x-4">
                <Input
                  title="Email Address"
                  type="text"
                  className="mr-4 font-inter text-[14px] w-[328px]"
                  placeholder="Email"
                />
                <Input
                  title="Password"
                  type="password"
                  placeholder="Password"
                  className="mr-4 font-inter text-[14px] w-[328px]"
                />
                <CustomLink href="" className="mt-[20px]">
                  Change Password
                </CustomLink>
              </div>
            </div>
            {/* TERCER DIV */}
          </section>
        </div>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 h-[140px] flex items-center justify-between bg-white shadow-lg">
        <p className="text-error font-inter font-semibold ml-[20px]">
          *Required fields
        </p>
        <Button
          body="Continue"
          variant="primary"
          disabled="true"
          className="mr-[20px] w-[210px] h-[48px]"
        />
      </footer>
    </>
  );
};

export default UserRegister;
