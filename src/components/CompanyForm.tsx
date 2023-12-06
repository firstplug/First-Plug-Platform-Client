import Image from "next/image";
import { FormInput, Card } from "./";
import Group from "public/svg/Group 133544.svg";

interface CompanyProps {
  handleInput: (key: string, value: string) => void;
}
export const CompanyForm = function ({ handleInput }: CompanyProps) {
  return (
    <Card Title="User" className="w-1/2 flex flex-col gap-5 px-8">
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
    </Card>
  );
};
