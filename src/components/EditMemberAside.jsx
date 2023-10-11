import Button from "@/common/Button";
import DropdownInput from "@/common/DropdownInput";
import { TrashIcon } from "@/common/Icons";
import Input from "@/common/Input";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import useInput from "@/hooks/useInput";
import { TeamMemberServices } from "@/services/teamMember.services";
import { useStore } from "@/models/root.store";

export default observer(function EditMemberAside({ member, closeModal }) {
  const firstName = useInput(member.firstName, "required");
  const lastName = useInput(member.lastName, "required");
  const dateOfBirth = useInput(member.dateOfBirth, "required");
  const phoneNumber = useInput(member.phone, "required");
  const email = useInput(member.email, "email");
  const team = useInput(member.team, "required", true);
  const jobPosition = useInput(member.jobPosition, "required", true);
  const zipCode = useInput(member.zipCode, "required");
  const city = useInput(member.city, "required");
  const address = useInput(member.address, "required");
  const appartment = useInput(member.appartment, "required");
  const joiningDate = useInput(member.joiningDate, "required");
  const aditionalInfo = useInput(member.aditionalInfo, null);
  const timeSlotForDelivery = useInput(member.timeSlotForDelivery, "required");
  const store = useStore();

  const handleEditMember = () => {
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
    TeamMemberServices.updateMember(member._id, data)
      .then((res) => {
        closeModal();

        TeamMemberServices.getAllMembers().then(({ data }) => {
          store.setMembers(data);
        });
      })
      .catch((err) => alert("error"));
  };
  return (
    <div className="flex flex-col gap-6 pr-4 pb-10">
      <div className="flex gap-4">
        <div className="relative w-36 h-36">
          <Image
            src={member.img ? member.img : "/employees/member.jpg"}
            alt="Colaborator"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[75%] flex flex-col gap-4">
          <Input title="Name" {...firstName} />
          <Input title="Lastname" {...lastName} />
        </div>
      </div>
      <Input title="Date of Birth" type="Date" {...dateOfBirth} />
      <div className="flex gap-4">
        <Input
          title="Phone Number"
          type="tel"
          className="w-1/2"
          {...phoneNumber}
        />
        <Input
          title="Email Address"
          type="email"
          className="w-1/2"
          {...email}
        />
      </div>

      <h3 className="text-lg text-black font-inter  font-semibold border-t pt-4">
        Employee Information
      </h3>

      <DropdownInput title="Select Team" {...team} />
      <p>Does the theam not exist yet?</p>

      <Input title="Job position" className="pr-4" {...jobPosition} />

      <div className=" border-t flex justify-between items-center">
        <h3 className="text-lg text-black font-inter font-semibold pt-4">
          Shipment Details
        </h3>
        <span className="pt-4">Complete</span>
      </div>

      <div className="flex gap-4">
        <DropdownInput title="City" {...city} />
        {/* <DropdownInput title="State"{...city} /> */}
      </div>

      <div className="flex gap-1">
        <Input title="Zip code" className="w-1/6" {...zipCode} />
        <Input title="Address" className="w-3/6" {...address} />
        <Input
          title="Appartament, Suite, etc."
          className="w-2/6"
          {...appartment}
        />
      </div>

      <div className="flex gap-4">
        <Input
          title="Joining Date"
          type="Date"
          className="w-1/2"
          {...joiningDate}
        />
        <DropdownInput
          title="Time slot for delivery"
          {...timeSlotForDelivery}
        />
      </div>

      <div className="flex flex-col gap-1 m-auto w-[98%]">
        <label className="block text-dark-grey font-sans">
          Additional Information
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          {...aditionalInfo}
          placeholder="Comments..."
          className="border-2 p-2"
        ></textarea>
      </div>

      <div className="flex justify-end">
        <Button
          icon={
            <TrashIcon
              stroke={2}
              className="text-error y w-[1.2rem] h-[1.2rem]"
            />
          }
          body="Delete Member"
          className="text-error text-md font-bold"
        />
      </div>

      <div className="fixed bottom-5 w-[85%]">
        <Button
          body="Save "
          variant="primary"
          size="big"
          className="w-full rounded-md"
          onClick={handleEditMember}
        />
      </div>
    </div>
  );
});
