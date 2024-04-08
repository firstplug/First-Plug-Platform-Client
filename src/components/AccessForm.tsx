import { FormInput, Card } from "./";
import { CustomLink } from "@/common";

interface Props {
  handleInput: (prop: string, value: unknown) => void;
}
export const AccessForm = function ({ handleInput }: Props) {
  return (
    <section className="w-1/2 flex flex-col gap-5  border rounded-md p-4 ">
      <h2 className="text-xl font-montserrat font-bold text-black">Access</h2>
      <FormInput
        handleInput={handleInput}
        prop="email"
        type="text"
        title="Email Address"
        placeholder="user@workemail.com"
      />

      <div className="flex items-center gap-8">
        <FormInput
          handleInput={handleInput}
          prop="password"
          title="Password"
          type="password"
          placeholder="password"
        />
        <CustomLink href="#">Change Password</CustomLink>
      </div>
    </section>
  );
};
