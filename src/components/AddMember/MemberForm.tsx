"use client";
import { Button, SectionTitle, PageLayout } from "@/common";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Memberservices, TeamServices } from "@/services";
import { useStore } from "@/models/root.store";
import { TeamMember, zodCreateMembertModel } from "@/types";
import PersonalData from "./PersonalData";
import memberImage from "../../../public/member.png";
import EmployeeData from "./EmployeeData";
import ShipmentData from "./ShipmentData";
import AdditionalData from "./AdditionalData";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface MemberFormProps {
  initialData?: TeamMember;
  isUpdate?: boolean;
}

const MemberForm: React.FC<MemberFormProps> = ({
  initialData,
  isUpdate = false,
}) => {
  const {
    members: { addMember, setMembers, updateMember },
    alerts: { setAlert },
    teams: { getOrCreateTeam },
  } = useStore();

  const methods = useForm({
    resolver: zodResolver(zodCreateMembertModel),
    defaultValues: initialData || {},
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleSaveMember = async (data: TeamMember) => {
    try {
      let teamId: string | "";

      if (data.team && typeof data.team === "object" && data.team._id) {
        teamId = data.team._id;
      } else if (
        data.team &&
        typeof data.team === "string" &&
        data.team.trim() !== ""
      ) {
        const team = await getOrCreateTeam(data.team);
        teamId = team._id;
      }

      const memberData = { ...data, team: teamId };

      let response;
      if (isUpdate && initialData) {
        response = await Memberservices.updateMember(
          initialData._id,
          memberData
        );
        updateMember(response);
        setAlert("updateMember");
      } else {
        response = await Memberservices.createMember(memberData);
        addMember(response);
        setAlert("createMember");
      }
      methods.reset();
    } catch (error: any) {
      console.error(
        "API Error:",
        error.response?.data?.message || error.message
      );

      if (error.response?.data?.message === "Email is already in use") {
        setAlert("errorEmailInUse");
      } else {
        setAlert("errorCreateMember");
      }
    }
  };

  return (
    <PageLayout>
      <FormProvider {...methods}>
        <div className=" h-full w-full flex flex-col  ">
          <div className=" absolute h-[90%] w-[80%]  flex-grow overflow-y-auto p-4 ">
            <div className=" px-4 py-5 rounded-3xl  border  ">
              <SectionTitle className="text-[20px]">
                {isUpdate ? "" : "Add Team Member"}
              </SectionTitle>

              <section className="flex flex-col gap-4 ">
                <PersonalData
                  memberImage={memberImage}
                  isUpdate={isUpdate}
                  initialData={initialData}
                />
                <hr />
                <EmployeeData isUpdate={isUpdate} initialData={initialData} />
                <hr />
                <ShipmentData isUpdate={isUpdate} initialData={initialData} />

                <hr />
                <AdditionalData isUpdate={isUpdate} initialData={initialData} />
              </section>
            </div>
          </div>
          <aside className="absolute flex justify-end bg-white w-[80%] bottom-0 p-2 h-[10%] border-t">
            <Button
              body={isUpdate ? "Update" : "Save"}
              variant="primary"
              className="  rounded-lg"
              size={"big"}
              onClick={handleSubmit(handleSaveMember)}
              disabled={isSubmitting}
            />
          </aside>
        </div>
      </FormProvider>
    </PageLayout>
  );
};

export default observer(MemberForm);
