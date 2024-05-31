"use client";
import { Button, SectionTitle, PageLayout } from "@/common";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Memberservices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";
import { TeamServices } from "@/services/team.services";
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
    teams: { setTeams, teams },
    aside: { setAside },
  } = useStore();

  const methods = useForm({
    resolver: zodResolver(zodCreateMembertModel),
    defaultValues: initialData || {},
  });

  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [memberData, setMemberData] = useState<TeamMember | undefined>();

  useEffect(() => {
    TeamServices.getAllTeams().then((res) => setTeams(res));
  }, [setTeams]);

  const handleSaveMember = async (data: TeamMember) => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
    setErrorMessage("");

    try {
      if (isUpdate) {
        await updateMember(data);
      } else {
        await addMember(data);
      }
      setMembers([]);
      setAside(undefined);
      setShowSuccessDialog(true);
    } catch (error) {
      setErrorMessage(error.message);
      setShowErrorDialog(true);
    }
  };
  return (
    <PageLayout>
      <FormProvider {...methods}>
        <div className="relative h-full   w-full  ">
          <div className=" absolute max-h-[90%] h-[90%] w-full overflow-y-auto   ">
            <div className=" px-10 py-4 rounded-3xl  border  ">
              <SectionTitle className="text-[20px]">
                Add Team Member
              </SectionTitle>

              <section className="flex flex-col gap-4 ">
                <PersonalData memberImage={memberImage} />
                <hr />
                <EmployeeData teams={teams} />

                <hr />
                <ShipmentData />

                <hr />
                <AdditionalData />
              </section>
            </div>
          </div>
          <aside className="absolute  flex justify-end bg-white w-full  bottom-0 p-2 h-[10%] border-t rou">
            <Button
              body="Save"
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
