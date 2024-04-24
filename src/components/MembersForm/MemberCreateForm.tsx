import { useForm } from "react-hook-form";
import { MembersFormBase } from "./MembersFormBase";

export const MemberCreateForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <MembersFormBase
      onsubmit={handleSubmit(onSubmit)}
      buttonText="Create Member"
      register={register}
    />
  );
};