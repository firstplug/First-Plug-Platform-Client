"use client";
import {
  CustomLink,
  Button,
  Layout,
  FormLayout,
  SectionTitle,
  PageLayout,
} from "@/common";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import memberImage from "../../../../public/member.png";
import { IconX } from "../../../common/Icons";
import { observer } from "mobx-react-lite";
import { Memberservices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";
import { TeamServices } from "@/services/team.services";
import { FormInput } from "@/components";
import { TeamMember } from "@/types";

export default observer(function AddTeam() {
  const {
    members: { addMember },
    teams: { setTeams, teams },
  } = useStore();
  const [finish, setFinished] = useState(false);
  const [memberData, setMemberData] = useState<TeamMember | undefined>();

  useEffect(() => {
    TeamServices.getAllTeams().then((res) => setTeams(res));
  }, [setTeams]);

  const handleInput = useCallback((key: string, value: unknown) => {
    const newValue = key === "teams" && !Array.isArray(value) ? [value] : value;

    setMemberData((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  }, []);

  const handleAddTeamMember = () => {
    Memberservices.createMember(memberData)
      .then((res) => {
        alert("Member created!");
        setMemberData(undefined);
        setFinished(true);
        addMember(res);
      })
      .catch(() => {
        alert("Error!");
      });
  };

  return (
    <PageLayout>
      <div className="relative h-full   w-full  ">
        <div className=" absolute max-h-[90%] h-[90%] w-full overflow-y-auto   ">
          <div className=" px-10 py-4 rounded-3xl  border  ">
            <SectionTitle className="text-[20px]">Add Team Member</SectionTitle>

            <section className="flex flex-col gap-4 ">
              <div className="  flex items-center gap-7  ">
                <section className=" h-full rounded-[30px] relative">
                  <Image
                    src={memberImage}
                    alt="emptyImage"
                    className="object-cover  h-full"
                  />
                  <Button
                    icon={<IconX strokeWidth={2.0} />}
                    variant="primary"
                    className="w-1 h-5 absolute bottom-0 left-[110px] z-[1] py-4 px-4 rounded-full"
                  />
                </section>
                <section className="  w-full ">
                  <FormLayout>
                    <FormInput
                      type={"text"}
                      title={"First Name"}
                      placeholder={"Complete"}
                      prop="firstName"
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                    <FormInput
                      title="Last Name"
                      placeholder="Complete"
                      type="text"
                      prop={"lastName"}
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                    <FormInput
                      title="DNI"
                      placeholder="Complete"
                      type="text"
                      prop={"dni"}
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                    <FormInput
                      title="Date of Birth"
                      type="date"
                      placeholder="Date of birth"
                      prop={"dateOfBirth"}
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                  </FormLayout>
                  <FormLayout>
                    <FormInput
                      title="Phone Number"
                      placeholder="+54 11 11111111"
                      type="text"
                      prop={"phone"}
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                    <FormInput
                      title="Email Address"
                      placeholder="user@workemail.com"
                      type="email"
                      prop={"email"}
                      handleInput={handleInput}
                      required={"required"}
                      clear={finish}
                    />
                    <span className="w-[20%]"></span>
                  </FormLayout>
                </section>
              </div>
              <hr />
              <div>
                <SectionTitle>Employee information</SectionTitle>

                <FormLayout className="w-1/2">
                  <FormInput
                    options={teams.map((team) => team)}
                    placeholder="Team Name"
                    title="Team Name"
                    type="options"
                    prop={"teams"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />

                  <FormInput
                    placeholder="Job Position"
                    title="Job Position"
                    type="text"
                    prop={"jobPosition"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                </FormLayout>
                <FormLayout>
                  <p className="font-inter text-[16px] text-dark-grey">
                    Does the team not exist yet?
                  </p>
                  <CustomLink href="">Create Team</CustomLink>
                </FormLayout>
              </div>
              <hr />
              <div>
                <SectionTitle>Shipment Details</SectionTitle>

                <FormLayout>
                  <FormInput
                    title="Country"
                    placeholder="Country"
                    type="text"
                    prop={"country"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                  <FormInput
                    title="City"
                    placeholder="City"
                    type="text"
                    prop={"city"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                  <FormInput
                    title="Zip Code"
                    placeholder="0000"
                    type="number"
                    prop={"zipCode"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                  <FormInput
                    title="Address"
                    placeholder="Steet, number"
                    type="text"
                    prop={"address"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                  <FormInput
                    title="Appartment, Suite, etc."
                    placeholder="PB B"
                    type="text"
                    prop={"appartment"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                </FormLayout>
                <FormLayout>
                  <FormInput
                    title="Joining Date"
                    type="date"
                    placeholder="Join date"
                    prop={"joiningDate"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                  <FormInput
                    title="Time slot for delivery"
                    placeholder="HH/MM - HH/MM"
                    type="text"
                    prop={"timeSlotForDelivery"}
                    handleInput={handleInput}
                    required={"required"}
                    clear={finish}
                  />
                </FormLayout>
              </div>
              <hr />
              <FormInput
                title="Additional Info"
                placeholder="Additional Info"
                type="text"
                prop={"additionalInfo"}
                handleInput={handleInput}
                clear={finish}
                required={"required"}
              />
            </section>
          </div>
        </div>
        <aside className="absolute  flex justify-end bg-white w-full  bottom-0 p-2 h-[10%] border-t rou">
          <Button
            body="Save"
            variant="primary"
            className="  rounded-lg"
            size={"big"}
            onClick={handleAddTeamMember}
          />
        </aside>
      </div>
    </PageLayout>
  );
});
