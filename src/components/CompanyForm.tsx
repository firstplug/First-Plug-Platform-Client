import Image from "next/image";
import { FormInput } from "./";
import Group from "public/svg/Group 133544.svg";

interface CompanyProps {
  handleInput: (key: string, value: unknown) => void;
}
export const CompanyForm = function ({ handleInput }: CompanyProps) {
  return (
    <section className="w-1/2 flex flex-col gap-5  border rounded-md p-4 ">
      <h2 className="text-xl font-montserrat font-bold text-black">User</h2>
      <div className="flex gap-8">
        <div className="flex ">
          <Image src={Group} alt="empty image" height={180} width={180} />
        </div>

        <div className="w-3/4 flex flex-col gap-4">
          <FormInput
            type="text"
            handleInput={handleInput}
            prop="company"
            title="Company Name"
            placeholder="Company Name"
          />
          <FormInput
            type="text"
            handleInput={handleInput}
            prop="phone"
            title="Contact Phone Number"
            placeholder="+54 11 11111111"
          />
        </div>
      </div>
    </section>
  );
};
