"use client";
import React from "react";
import Image from "next/image";
import memberImage from "../../../public/member.png";
import { TeamMember, zodCreateMemberModel, emptyTeamMember } from "@/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddIcon,
  PageLayout,
  SectionTitle,
  Button,
  FormLayout,
} from "@/common";
import PersonalData from "./PersonalData";

interface MemberFormProps {
  initialData?: TeamMember;
  isUpdate?: boolean;
}

const MemberForm: React.FC<MemberFormProps> = ({
  initialData,
  isUpdate = false,
}) => {
  const {
    members: { addMember, setSelectedMember },
    teams: { setTeams, addTeam },
    aside: { setAside },
  } = useStore();
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(zodCreateMemberModel),
    defaultValues: initialData || emptyTeamMember,
  });

  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);
  const [showErrorDialog, setShowErrorDialog] = React.useState(false);

  const handleSaveMember = async (data: TeamMember) => {
    try {
      if (isUpdate) {
      } else {
        addMember(data);
        setShowSuccessDialog(true);
      }
    } catch (error) {
      setShowErrorDialog(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <PageLayout>
        <div className="relative h-full w-full">
          <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
            <div className="px-10 py-4 rounded-3xl border">
              <SectionTitle className="text-[20px]">
                Add Team Member
              </SectionTitle>
              <section className="flex flex-col gap-4">
                <div className="flex gap-7">
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                      <Image
                        src={memberImage}
                        alt="emptyImage"
                        layout="fill"
                        className="object-cover"
                      />
                      <Button
                        icon={<AddIcon />}
                        variant="primary"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <FormLayout>
                      <PersonalData />
                    </FormLayout>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </PageLayout>
    </FormProvider>
  );
};

export default observer(MemberForm);
