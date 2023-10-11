"use client";
import CustomLink from "@/common/CustomLink";
import Input from "@/common/Input";
import Image from "next/image";
import React from "react";
import DropdownInput from "@/common/DropdownInput";
import Button from "@/common/Button";
import memberImage from "../../../../public/member.png";
import Layout from "@/common/Layout";
import { IconX } from "../../../common/Icons";
import useInput from "@/hooks/useInput";
import { observer } from "mobx-react-lite";
import { useTeamMemberStore } from "@/models/teamMeber.store";
import { TeamMemberServices } from "@/services/teamMember.services";
import { clearinputs, validateForm } from "@/utils/inputsServices";

export default observer(function AddTeam() {
  const STORE_TEAM_MEMBERS = useTeamMemberStore();

  const teamName = ["Team1", "Team2", "Team3"];
  const jobPositionData = ["Job1", "Job2", "Job3"];
  const firstName = useInput("", "required");
  const lastName = useInput("", "required");
  const dateOfBirth = useInput("", "required");
  const phoneNumber = useInput("", "required");
  const email = useInput("", "email");
  const team = useInput("", "required", true);
  const jobPosition = useInput("", "required", true);
  const zipCode = useInput("", "required");
  const city = useInput("", "required");
  const address = useInput("", "required");
  const appartment = useInput("", "required");
  const joiningDate = useInput("", "required");
  const aditionalInfo = useInput(" ", null);

  const timeSlotForDelivery = useInput("", "required");

  const isFormValid = validateForm(
    firstName,
    lastName,
    dateOfBirth,
    phoneNumber,
    email,
    team,
    jobPosition,
    zipCode,
    city,
    address,
    appartment,
    joiningDate,
    aditionalInfo,
    timeSlotForDelivery
  );

  console.log("Is form valid?", isFormValid);

  const handleAddTeamMember = () => {
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      phone: phoneNumber.value,
      email: email.value,
      team: team.selectedOption,
      jobPosition: jobPosition.selectedOption,
      zipCode: zipCode.value,
      city: city.value,
      address: address.value,
      appartment: appartment.value,
      joiningDate: joiningDate.value,
      additionalInfo: aditionalInfo.value,
      timeSlotForDelivery: timeSlotForDelivery.value,
    };

    TeamMemberServices.createMember(data)
      .then((res) => {
        clearinputs(
          firstName,
          lastName,
          dateOfBirth,
          phoneNumber,
          email,
          team,
          jobPosition,
          zipCode,
          city,
          address,
          appartment,
          joiningDate,
          aditionalInfo,
          timeSlotForDelivery
        );
        alert("Member created!");

        STORE_TEAM_MEMBERS.addMember(res.data);
      })
      .catch(() => {
        alert("Error!");
      });
  };
  return (
    <>
      <Layout className="flex flex-col gap-6 overflow-auto pb-16">
        <main className="h-full overflow-auto px-[48px] ">
          <div className="w-[100%] h-auto py-[45px] px-[20px]  rounded-[16px] shadow-lg border border-grey-200 ">
            <section className=" px-[32px] ">
              <h2 className="font-inter text-[20px] font-semibold text-black">
                Add Team Member
              </h2>
            </section>
            <section className="pt-[16px] px-[32px] gap-[28px] ">
              <div className="relative w-[100%] h-[152px] flex items-center gap-7 mb-11">
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
                      {...firstName}
                    />
                    <Input
                      className="font-inter text-[14px]  mr-4 w-[40%]"
                      title="Last Name"
                      placeholder="Complete"
                      type="text"
                      {...lastName}
                    />
                    <Input
                      className="font-inter text-[14px] w-[20%]"
                      title="Date of Birth"
                      type="date"
                      {...dateOfBirth}
                    />
                  </div>
                  <div className="flex-grow flex items-center">
                    <Input
                      className="mr-4 font-inter text-[14px] w-[40%]"
                      title="Phone Number"
                      placeholder="+54 11 11111111"
                      type="number"
                      {...phoneNumber}
                    />
                    <Input
                      className="font-inter text-[14px]  mr-4 w-[40%]"
                      title="Email Address"
                      placeholder="user@workemail.com"
                      type="email"
                      bg-black
                      {...email}
                    />
                    <span className="w-[20%]"></span>
                  </div>
                </span>
              </div>
              <hr className="mt-4 mb-4" />
              <div className="w-[100%] h-[auto]">
                <p className="font-inter text-black font-bold text-[16px] mt-[16px] mb-[16px]">
                  Employee information
                </p>
                <div className=" w-[100%]  grid grid-cols-4 gap-y-16  ">
                  <DropdownInput
                    className="mr-4 font-inter text-[14px] w-[full]"
                    options={teamName}
                    placeholder="Team Name"
                    title="Team Name"
                    {...team}
                  />
                  <DropdownInput
                    className="mr-4 font-inter text-[14px] w-[full]"
                    options={jobPositionData}
                    placeholder="Job Position"
                    title="Job Position"
                    {...jobPosition}
                  />
                </div>
                <div className="mt-[5px]  flex items-center">
                  <p className="font-inter text-[16px] text-dark-grey">
                    Does the team not exist yet?
                  </p>
                  <CustomLink href="" className="ml-4">
                    Create Team
                  </CustomLink>
                </div>
              </div>
              <hr className="mt-4 mb-4" />
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
                    {...city}
                  />
                  <Input
                    className="font-inter text-[14px] w-full mr-4"
                    title="Zip Code"
                    placeholder="0000"
                    type="number"
                    {...zipCode}
                  />
                  <Input
                    className="font-inter text-[14px] w-full mr-4"
                    title="Address"
                    placeholder="Steet, number"
                    type="text"
                    {...address}
                  />
                  <Input
                    className="font-inter text-[14px] w-full"
                    title="Appartment, Suite, etc."
                    placeholder="PB B"
                    type="text"
                    {...appartment}
                  />
                </div>
                <div className=" flex-grow flex items-center mt-[28px] ">
                  <Input
                    className="mr-4 font-inter text-[14px] w-[33%]"
                    title="Joining Date"
                    type="date"
                    {...joiningDate}
                  />
                  <Input
                    className="font-inter text-[14px]  mr-4 w-[33%]"
                    title="Time slot for delivery"
                    placeholder="HH/MM - HH/MM"
                    type="text"
                    {...timeSlotForDelivery}
                  />
                  <div className="w-[33%]"></div>
                </div>
              </div>
              <div>
                <div className=" flex-grow flex items-center mt-[28px]">
                  <Input
                    className="mr-4 font-inter text-[14px] w-[100%] "
                    title="Aditional information"
                    placeholder="Comments..."
                    type="text"
                    {...aditionalInfo}
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>

      <section className="absolute bottom-0 left-[259px] right-0 h-[88px] flex items-center justify-end bg-white ">
        <Button
          body="Save"
          variant="primary"
          disabled={!isFormValid}
          className="mr-[60px] w-[167px] h-[48px] rounded-lg"
          onClick={handleAddTeamMember}
        />
      </section>
    </>
  );
});
