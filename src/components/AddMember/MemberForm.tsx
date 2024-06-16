"use client";
import { Button, SectionTitle, PageLayout } from "@/common";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Memberservices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";
import { TeamMember, TeamMemberModel, zodCreateMembertModel } from "@/types";
import PersonalData from "./PersonalData";
import memberImage from "../../../public/member.png";
import EmployeeData from "./EmployeeData";
import ShipmentData from "./ShipmentData";
import AdditionalData from "./AdditionalData";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GenericAlertDialog from "../AddProduct/ui/GenericAlertDialog";
import { useRouter } from "next/navigation";

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
    aside: { setAside },
    alerts: { setAlert },
  } = useStore();
  const router = useRouter();

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
  const [teams, setTeams] = useState<string[]>([]);

  const handleSaveMember = async (data: TeamMember) => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
    setErrorMessage("");

    try {
      let response;
      if (isUpdate && initialData) {
        response = await Memberservices.updateMember(initialData._id, data);
        updateMember(response);
        setAlert("updateMember");
      } else {
        response = await Memberservices.createMember(data);
        addMember(response);
        // setShowSuccessDialog(true);
        setAlert("createMember");
      }
      methods.reset();
      setMembers([]);
    } catch (error) {
      if (error.response?.data?.message === "Email is already in use") {
        setErrorMessage("Email is already in use");
      } else {
        setErrorMessage(error.message);
      }
      setShowErrorDialog(true);
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
                <EmployeeData
                  teams={teams}
                  setTeams={setTeams}
                  isUpdate={isUpdate}
                  initialData={initialData}
                />

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
        <div className="z-50">
          <GenericAlertDialog
            open={showErrorDialog}
            onClose={() => setShowErrorDialog(false)}
            title="Error"
            description={errorMessage}
            buttonText="OK"
            onButtonClick={() => {
              setShowErrorDialog(false);
            }}
          />
        </div>
      </FormProvider>
    </PageLayout>
  );
};

export default observer(MemberForm);
