import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Image from "next/image";
import React from "react";
import LogoFirstPlug from "../../../public/logo1.png";
import Button from "@/common/Button";
import memberImage from "../../../public/member.png";
import RootLayout from "@/app/home/layout";

import { IconX } from "../../common/Icons";

const addTeam = () => {
  return (
    <>
      <RootLayout>
        <main className="h-full overflow-auto px-[48px] ">
          <div className="w-[100%] h-auto py-[45px] px-[20px]  rounded-[16px] shadow-lg border border-grey-200 ">
            <section className=" px-[32px] ">
              <h2 className="font-inter text-[20px] font-semibold text-black">
                Add Team Member
              </h2>
            </section>
            <section className="pt-[16px] px-[32px] gap-[28px] ">
              {/* ADD TEAM MEMBER*/}
              <div className="relative w-[100%] h-[152px] flex items-center gap-6">
                <span className="w-[152px] h-[152px] rounded-[30px] relative">
                  <Image
                    src={memberImage}
                    alt="emptyImage"
                    className="object-cover  h-full"
                  />
                  <Button
                    icon={<IconX />}
                    variant="primary"
                    className="rounded-3xl w-[30px] h-[30px] absolute bottom-0 left-[110px] z-[1] "
                  />
                </span>
                <span className="h-[148px] w-[100%]">
                  <div className="flex-grow flex items-center">
                    <Input
                      className="mr-4 font-inter text-[14px] w-[40%]"
                      title="First Name"
                      placeholder="Complete"
                      type="text"
                    />
                    <Input
                      className="font-inter text-[14px]  mr-4 w-[40%]"
                      title="Last Name"
                      placeholder="Complete"
                      type="text"
                    />
                    <Input
                      className="font-inter text-[14px] w-[20%]"
                      title="Date of Birth"
                      type="date"
                    />
                  </div>
                  <div className="flex-grow flex items-center">
                    <Input
                      className="mr-4 font-inter text-[14px] w-[40%]"
                      title="Phone Number"
                      placeholder="+54 11 11111111"
                      type="number"
                    />
                    <Input
                      className="font-inter text-[14px]  mr-4 w-[40%]"
                      title="Email Address"
                      placeholder="user@workemail.com"
                      type="email"
                    />
                    <span className="w-[20%]"></span>
                  </div>
                </span>
              </div>
              {/* ADD TEAM MEMBER */}
              <hr className="mt-4 mb-4" />
              {/* SEGUNDO DIV */}
              <div className="w-[100%] h-[auto]">
                <p className="font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px]">
                  Employee information
                </p>
                <div className=" w-[100%]  grid grid-cols-4 gap-y-16  ">
                  <Input
                    title="Select Team"
                    placeholder="aca va un dropdown"
                    className="mr-4 font-inter text-[14px] w-[full]"
                  />
                  <Input
                    title="Job Position"
                    placeholder="aca va un dropdown"
                    className="mr-4 font-inter text-[14px] w-full"
                  />
                </div>
                <div className="mt-[5px]  flex items-center">
                  <p className="font-inter text-[16px] text-dark-grey">
                    Does the team not exist yet?
                  </p>
                  <CustomLink href="" children="Create Team" className="ml-4" />
                </div>
              </div>
              {/* EMPLOYEE INFORMATION */}
              <hr className="mt-4 mb-4" />
              {/* SHIPMENT DETAILS */}
              <div>
                <p className="font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px]">
                  Shipment Details
                </p>

                <div className=" flex-grow flex items-center ">
                  <Input
                    className="mr-4 font-inter text-[14px] w-full"
                    title="City"
                    placeholder="City"
                    type="text"
                  />
                  <Input
                    className="font-inter text-[14px] w-full mr-4"
                    title="Zip Code"
                    placeholder="0000"
                    type="number"
                  />
                  <Input
                    className="font-inter text-[14px] w-full mr-4"
                    title="Address"
                    placeholder="Steet, number"
                    type="text"
                  />
                  <Input
                    className="font-inter text-[14px] w-full"
                    title="Appartment, Suite, etc."
                    placeholder="PB B"
                    type="text"
                  />
                </div>
                <div className=" flex-grow flex items-center mt-[28px] ">
                  <Input
                    className="mr-4 font-inter text-[14px] w-[33%]"
                    title="Joining Date"
                    type="date"
                  />
                  <Input
                    className="font-inter text-[14px]  mr-4 w-[33%]"
                    title="Time slot for delivery"
                    placeholder="HH/MM - HH/MM"
                    type="email"
                  />
                  <div className="w-[33%]"></div>
                </div>
              </div>
              {/* ADITIONAL INFORMATION */}
              <div>
                <div className=" flex-grow flex items-center mt-[28px]">
                  <Input
                    className="mr-4 font-inter text-[14px] w-[100%] "
                    title="Aditional information"
                    placeholder="Comments..."
                    type="text"
                  />
                </div>
              </div>
              {/* SECTION WITH CONTINUE BUTTON */}
            </section>
          </div>
        </main>
      </RootLayout>

      <section className="fixed bottom-0 left-0 right-0 h-[120px] flex items-center justify-end ">
        <Button
          body="Save"
          variant="primary"
          disabled="true"
          className="mr-[60px] w-[167px] h-[48px] rounded-lg"
        />
      </section>
    </>
  );
};

export default addTeam;
